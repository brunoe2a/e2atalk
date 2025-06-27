<script setup>
import ServiceLayout from "@/Layouts/ServiceLayout.vue";
import {ref, onMounted, onBeforeUnmount, nextTick, watch} from "vue";
import {useForm, Link} from "@inertiajs/vue3";
import {dataBrasil} from "@/functions.js";
import ButtonPadrao from "@/Components/Softui/Button/ButtonPadrao.vue";
import Modal from "@/Components/old/Modal.vue";
import ButtonSend from "@/Components/Softui/Button/ButtonSend.vue";
import ImagemForm from "@/Pages/Service/Partials/ImagemForm.vue";
import DocumentoForm from "@/Pages/Service/Partials/DocumentoForm.vue";
import AudioForm from "@/Pages/Service/Partials/AudioForm.vue";
import VideoForm from "@/Pages/Service/Partials/VideoForm.vue";

const props = defineProps({
    messagesChat: {},
    messages: {},
    sessoes: {},
    sessao: {},
    contato: null,
    protocolo: null,
});

const form = useForm({
    message: '',
    contato_id: '',
    numero: '',
    sessao_id: props.sessao ? props.sessao.id : null,
    encerrar: null,
});

const encerrarModal = ref(false);
const newModal = ref(false);
const anexo = ref(false);
const messageContainer = ref(null);
const Echo = window.Echo;

function formatMessage(content) {
    if (!content) return '';
    // Aplica negrito para *texto*
    return content.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
}

const listenForMessages = () => {
    Echo.channel(`channel-message`)
        .listen('MessageSent', (data) => {
            props.messages.push(data.message);
            props.sessoes.forEach(obj => {
                if (obj.id === data.message.sessao_atendimento_id) {
                    obj.new_chat = "S";
                }
            });
            nextTick(() => {
                scrollToBottom();
            });
        });
};

const listenForSessoes = () => {
    Echo.channel(`channel-chat`)
        .listen('NewAtendimentoEvent', (data) => {
            data.sessoes.hasNewMessage = true;
            props.sessoes.push(data.sessoes);
            nextTick(() => {
                scrollToBottom();
            });
        });
};

onMounted(() => {
    listenForSessoes();
    listenForMessages();
    scrollToBottom();
});

onBeforeUnmount(() => {
    Echo.leave(`channel-chat`);
    Echo.leave(`channel-message`);
});

watch(() => props.messages, () => {
    nextTick(() => {
        scrollToBottom();
    });
});

const scrollToBottom = () => {
    const container = messageContainer.value;
    container.scrollTop = container.scrollHeight;
};

const sendMessage = () => {
    form.contato_id = props.contato.id ?? ''
    form.post(route('service.messages.sendText'),{
        onSuccess: () => {
            form.message = '';
            nextTick(() => {
                scrollToBottom();
            });
        }
    });
};

const newConversa = () => {
    form.post(route('service.new'), {
        onSuccess: () => {
            form.numero = '';
            closeNewModal();
        }
    })
}

const encerrar = () => {
    form.encerrar = true;
    form.post(route('service.encerrar'), {
        onSuccess: () => {
            closeModal();
        }
    })
}

const closeModal = () => {
    encerrarModal.value = false;
    form.encerrar = null;
};
const closeNewModal = () => {
    newModal.value = false;
};
</script>

<template>
    <ServiceLayout>
        <template #contatos>
            <div
                v-for="sessao in sessoes"
                class="px-4 py-3 border-b hover:bg-slate-100"
                :class="{ 'bg-slate-50': sessao.contato_id === (contato ? contato.id : 0) }"
            >
                <Link :href="route('service.messages.contato', [sessao.contato_id, sessao.protocolo] )">
                    <div class="flex items-center">
                        <div class="grow">
                            <div class="text-slate-500">{{ sessao.contato.name ?? sessao.contato.numero }}</div>
                            <div class="text-xs text-slate-500">{{ sessao.contato.numero }}</div>
                        </div>
                        <div v-if="sessao.new_chat === 'S'" class="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                </Link>
            </div>
        </template>

        <template #header_mensagens>
            <div class="flex items-center">
                <div class="text-white">
                    <div class="font-semibold">
                        {{ contato ? (contato.name ?? contato.numero) : 'Selecione um contato!' }}
                    </div>
                    <div v-if="contato" class="flex items-center gap-2 text-sm">
                        <span v-if="contato.name">Telefone: {{ contato.numero }}</span>
                        <span v-if="contato.name">
                            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                            </svg>
                        </span>
                        <span>Protocolo: {{ sessao ? sessao.protocolo : '' }}</span>
                    </div>
                </div>
            </div>
            <button @click="encerrarModal = true" v-if="contato" class="p-2 bg-white rounded-full transition ease-in-out duration-300 hover:scale-110">
                <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                </svg>
            </button>
            <button @click="newModal = true" v-if="!contato" class="p-2 bg-white rounded-full transition ease-in-out duration-300 hover:scale-110">
                <svg class="w-6 h-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
                    <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                </svg>
            </button>
        </template>

        <!-- Área de mensagens -->
        <div ref="messageContainer" class="flex-grow p-4 overflow-y-auto bg-gray-100">
            <div v-for="(message, index) in messages" :key="index" class="mb-4">
                <div class="mb-4 flex justify-start" v-if="message.fluxo === 'Entrada' && message.contato_id === contato.id">
                    <div>
                        <div class="bg-white text-sm text-slate-500 p-2 rounded-lg shadow-md max-w-xs">
                            <img v-if="message.type === 'imageMessage'" class="rounded-lg mb-2" :src="$page.props.ziggy.url + '/storage/' + message.file_path" alt="">
                            <p v-if="message.content" class="px-2 whitespace-pre-wrap" v-html="formatMessage(message.content)"></p>
                            <div v-if="message.content && message.caption" class="border-t my-2 mx-2 border-slate-400"></div>
                            <div v-if="message.type === 'audioMessage'">
                                <audio controls>
                                    <source :src="$page.props.ziggy.url + '/storage/' + message.file_path" :type="message.mimetype" />
                                    Seu navegador não suporta o elemento de áudio.
                                    <a :download="message.caption ?? message.content" class="bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700" :href="$page.props.ziggy.url + '/storage/' + message.file_path">Baixar</a>
                                </audio>
                            </div>
                            <div v-if="message.type === 'videoMessage'">
                                <video controls>
                                    <source :src="$page.props.ziggy.url + '/storage/' + message.file_path" :type="message.mimetype" />
                                    Seu navegador não suporta o elemento de Vídeo.
                                    <a :download="message.caption ?? message.content" class="bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700" :href="$page.props.ziggy.url + '/storage/' + message.file_path">Baixar</a>
                                </video>
                            </div>
                            <p v-if="message.caption" class="px-2 mt-2 whitespace-pre-wrap" v-html="formatMessage(message.caption)"></p>
                            <div v-if="message.mimetype">
                                <div v-if="message.mimetype === 'application/pdf'" class="pb-3 pt-4">
                                    <a class="bg-sky-400 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-sky-600" :href="$page.props.ziggy.url + '/storage/' + message.file_path" target="_blank">Abrir</a>
                                </div>
                                <div v-else-if="message.type !== 'audioMessage' && message.type !== 'videoMessage'" class="pb-3 pt-4">
                                    <a :download="message.caption ?? message.content" class="bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700" :href="$page.props.ziggy.url + '/storage/' + message.file_path">Baixar</a>
                                </div>
                            </div>
                        </div>
                        <div class="text-xs text-gray-500 mt-2 pr-5">{{ dataBrasil(message.created_at) }}</div>
                    </div>
                </div>
                <div class="mb-4 flex justify-end" v-if="message.fluxo === 'Saida'">
                    <div>
                        <div class="bg-emerald-100 text-slate-500 text-sm p-2 rounded-lg shadow-md max-w-xs">
                            <img v-if="message.type === 'image'" class="rounded-lg mb-2" :src="$page.props.ziggy.url + '/storage/' + message.file_path" alt="">
                            <div v-if="message.type === 'ptt' || message.type === 'audio'">
                                <audio controls>
                                    <source :src="$page.props.ziggy.url + '/storage/' + message.file_path" :type="message.mimetype" />
                                    Seu navegador não suporta o elemento de áudio.
                                    <a :download="message.caption ?? message.content" class="bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700" :href="$page.props.ziggy.url + '/storage/' + message.file_path">Baixar</a>
                                </audio>
                            </div>
                            <div v-if="message.type === 'video'">
                                <video controls>
                                    <source :src="$page.props.ziggy.url + '/storage/' + message.file_path" :type="message.mimetype" />
                                    Seu navegador não suporta o elemento de Vídeo.
                                    <a :download="message.caption ?? message.content" class="bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700" :href="$page.props.ziggy.url + '/storage/' + message.file_path">Baixar</a>
                                </video>
                            </div>
                            <p v-if="message.content && message.type !== 'video'" class="px-2 whitespace-pre-wrap" v-html="formatMessage(message.content)"></p>
                            <div v-if="message.content && message.caption && message.type !== 'video'" class="border-t my-2 mx-2 border-slate-400"></div>
                            <p v-if="message.caption" class="px-2 mt-2 whitespace-pre-wrap" v-html="formatMessage(message.caption)"></p>
                            <div v-if="message.mimetype">
                                <div v-if="message.mimetype === 'application/pdf'" class="pb-3 pt-4">
                                    <a class="bg-sky-400 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-sky-600" :href="$page.props.ziggy.url + '/storage/' + message.file_path" target="_blank">Abrir</a>
                                </div>
                                <div v-else-if="message.type !== 'ptt' && message.type !== 'audio' && message.type !== 'video'" class="pb-3 pt-4">
                                    <a :download="message.caption ?? message.content" class="bg-green-500 text-white rounded-2xl px-4 py-2 transition ease-in-out duration-300 hover:bg-green-700" :href="$page.props.ziggy.url + '/storage/' + message.file_path">Baixar</a>
                                </div>
                            </div>
                        </div>
                        <div class="text-xs text-right text-gray-500 mt-2 pr-5">{{ dataBrasil(message.created_at) }}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Menu de Anexos -->
        <div v-show="anexo" v-if="sessao" class="w-56 px-4 py-2 absolute left-4 bottom-16 bg-white text-slate-500 border shadow-md rounded-2xl">
            <ul>
                <DocumentoForm :contato_id="contato.id" :sessao_id="sessao.id" @closeAnexo="anexo = !anexo" />
                <ImagemForm :contato_id="contato.id" :sessao_id="sessao.id" @closeAnexo="anexo = !anexo" />
                <AudioForm :contato_id="contato.id" :sessao_id="sessao.id" @closeAnexo="anexo = !anexo"  />
                <VideoForm :contato_id="contato.id" :sessao_id="sessao.id" @closeAnexo="anexo = !anexo"  />
            </ul>
        </div>

        <!-- Campo de entrada de mensagem -->
        <div class="py-4 pl-4 pr-6 bg-slate-100 border-t flex items-center">
            <button v-if="sessao" class="p-2 mr-4 transition ease-in-out duration-300 hover:scale-110" @click="anexo = !anexo">
                <svg class="h-6 w-6 text-slate-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                        :class="{
                                            hidden: anexo,
                                            'inline-flex': !anexo,
                                        }"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                    />
                    <path
                        :class="{
                                            hidden: !anexo,
                                            'inline-flex': anexo,
                                        }"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <textarea placeholder="Digite uma mensagem..." v-model="form.message" class="w-full h-12 px-4 py-3 border-none rounded-lg bg-white text-slate-500 focus:border-sky-500 focus:ring-sky-500"></textarea>
            <ButtonSend
                v-show="form.message"
                @click="sendMessage"
                :class="{ 'opacity-60': form.processing }"
                :disabled="form.processing"
            />
        </div>

        <Modal :show="encerrarModal" @close="closeModal" max-width="md">
            <div class="p-6 flex flex-col items-center">
                <svg class="w-20 mb-2 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 class="text-2xl mb-6 text-slate-500">Deseja encerrar o atendimento?</h3>
                <div class="flex items-center gap-4">
                    <ButtonPadrao @click="encerrar" cor="green">Sim</ButtonPadrao>
                    <ButtonPadrao @click="closeModal" cor="slate">Não</ButtonPadrao>
                </div>
            </div>
        </Modal>

        <Modal :show="newModal" @close="closeNewModal" max-width="sm">
            <div class="p-6 flex flex-col items-center">
                <h3 class="text-2xl mb-6 text-slate-500">Iniciar Conversa:</h3>
                <input type="text" placeholder="Whatsapp..." v-mask="'(##) #####-####'" v-model="form.numero" class="w-56 px-4 py-2 mb-6 text-sm border-none rounded-lg bg-slate-100 text-slate-500 focus:border-sky-500 focus:ring-sky-500">
                <div class="flex items-center gap-4">
                    <ButtonPadrao @click="newConversa" cor="green">Sim</ButtonPadrao>
                    <ButtonPadrao @click="closeNewModal" cor="slate">Não</ButtonPadrao>
                </div>
            </div>
        </Modal>

    </ServiceLayout>
</template>
