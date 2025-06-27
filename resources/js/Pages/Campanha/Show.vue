<script setup>
import ApplicationLayout from "@/Layouts/ApplicationLayout.vue";
import FooterApplicationLayout from "@/Layouts/Partials/FooterApplicationLayout.vue";
import ItemBreadcrumb from "@/Components/Softui/Breadcrumb/ItemBreadcrumb.vue";
import ButtonLink from "@/Components/Softui/Link/ButtonLink.vue";
import InputError from "@/Components/old/InputError.vue";
import {useForm} from "@inertiajs/vue3";
import ImportMediaForm from "@/Pages/Campanha/Partials/ImportMediaForm.vue";
import ButtonSave from "@/Components/Softui/Button/ButtonSave.vue";
import ButtonIniciar from "@/Components/Softui/Button/ButtonIniciar.vue";
import ButtonPadrao from "@/Components/Softui/Button/ButtonPadrao.vue";
import Modal from "@/Components/old/Modal.vue";
import {computed, ref} from "vue";
import ButtonSim from "@/Components/Softui/Button/ButtonSim.vue";

const props = defineProps({
    campanha: {},
    total: {},
});

const removeMidia = ref(false)

const form = useForm({
    content: props.campanha.content ?? null,
});

const totalProcessada = computed(() => {
    return (props.total.contatos ?? 0) - (props.total.erro_invalido ?? 0)
});

// Cálculo do percentual concluído
const enviados = ref(props.total.enviada ?? 0); // Número de envios concluídos
const totalValidos = ref(totalProcessada); // Número de envios concluídos
const percentualConcluido = computed(() => {
    return enviados.value > 0 ? Math.round((enviados.value / totalValidos.value) * 100) : 0;
});

const confirmeRemoveMidia = () => {
    removeMidia.value = true;
};

const salvar = () => {
    form.put(route('campanha.update', props.campanha.id));
};

const remover = () => {
    form.delete(route('campanha.remover.midia', props.campanha.id), {
        preserveScroll: true,
        onSuccess: () => closeModalMidia(),
        onError: () => closeModalMidia(),
        onFinish: () => closeModalMidia(),
    });
};
const closeModalMidia = () => {
    removeMidia.value = false;
};
</script>

<template>
    <ApplicationLayout :title="'Campanha:' + campanha.nome">
        <template #breadcrumb>
            <!-- breadcrumb -->
            <ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                <ItemBreadcrumb :href="route('dashboard')">{{ __('sidebar.link.dashboard') }}</ItemBreadcrumb>
                <ItemBreadcrumb :href="route('campanha.index')">Campanhas</ItemBreadcrumb>
                <ItemBreadcrumb href="" :active="true">Campanha: {{ campanha.nome }}</ItemBreadcrumb>
            </ol>
            <h6 class="mb-0 font-bold capitalize">Campanha: {{ campanha.nome }}</h6>
        </template>

        <div class="w-full px-6 py-6 mx-auto">

            <div class="flex flex-wrap -mx-3">
                <!-- card1 -->
                <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4">
                            <div class="flex flex-row -mx-3">
                                <div class="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p class="mb-0 font-sans font-semibold leading-normal text-sm">Contatos</p>
                                        <h5 class="mb-0 text-lg font-bold">
                                            {{ totalProcessada }}
                                        </h5>
                                    </div>
                                </div>
                                <div class="px-3 text-right basis-1/3">
                                    <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-tl from-blue-600 to-sky-300">
                                        <svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- card2 -->
                <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4">
                            <div class="flex flex-row -mx-3">
                                <div class="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p class="mb-0 font-sans font-semibold leading-normal text-sm">Processados</p>
                                        <h5 class="mb-0 text-lg font-bold">
                                            {{ percentualConcluido }}%
                                        </h5>
                                    </div>
                                </div>
                                <div class="px-3 text-right basis-1/3">
                                    <div class="flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-cyan-700 to-cyan-500">
                                        <svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z" clip-rule="evenodd"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- card3 -->
                <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4">
                            <div class="flex flex-row -mx-3">
                                <div class="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p class="mb-0 font-sans font-semibold leading-normal text-sm">Enviados</p>
                                        <h5 class="mb-0 text-lg font-bold">
                                            {{ total.enviada ?? 0 }}
                                        </h5>
                                    </div>
                                </div>
                                <div class="px-3 text-right basis-1/3">
                                    <div class="flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-green-700 to-green-500">
                                        <svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- card4 -->
                <div class="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4">
                            <div class="flex flex-row -mx-3">
                                <div class="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p class="mb-0 font-sans font-semibold leading-normal text-sm">Erro</p>
                                        <h5 class="mb-0 text-lg font-bold">
                                            {{ total.erro ?? 0 }}
                                        </h5>
                                    </div>
                                </div>
                                <div class="px-3 text-right basis-1/3">
                                    <div class="flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-red-700 to-red-500">
                                        <svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- table 1 -->

            <div class="flex flex-wrap mt-6 -mx-3">
                <div class="flex gap-4 w-full max-w-full px-3">
                    <div class="w-1/3 p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="mb-1 uppercase">
                            {{ campanha.nome }}
                        </div>

                        <div class="text-xs">
                            {{ campanha.descricao }}
                        </div>

                        <div class="my-2 border-t" ></div>

                        <div class="text-sm flex items-center gap-4">
                            <div class="grow">
                                <p>
                                    Intervalo de Tempo entre envios: <br />
                                    Inicio: {{ campanha.t_inicial }} seg. | Fim: {{ campanha.t_final }} seg.
                                </p>
                                <p>
                                    Pausa: {{ campanha.tempo_pausa }} min. a cada {{ campanha.quat_pausa }} envios.
                                </p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>

                        <div class="my-2 border-t" ></div>

                        <div class="mb-3 text-sm flex items-center gap-4">
                            <div class="grow">
                                Lista de Contatos: <span class="text-xs"> (Total: {{ total.contatos ?? 0 }})</span> <br />
                                <b>{{ campanha.lista.nome }}</b> <br />
                                <span class="text-xs">{{ campanha.lista.descricao }}</span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                            </div>
                        </div>

                        <div class="my-4 border-t" ></div>
                        <div class="flex gap-4">
                            <ButtonLink :href="route('campanha.index')" cor="gray">
                                Voltar
                            </ButtonLink>
                            <ButtonLink
                                v-if="campanha.status !== 'Iniciada' && campanha.status !== 'Concluida' && (campanha.content !== null || campanha.file_path !== null) "
                                :href="route('campanha.envios', campanha.id)"
                                cor="sky"
                            >
                                <svg class="w-5 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"/>
                                </svg>
                                Envios
                            </ButtonLink>
                        </div>
                    </div>
                    <div class="grow p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                        <h6 class="font-bold text-gray-600">Conteúdo Mensagem:</h6>

                        <div class="mb-4">
                            <textarea
                                id="content"
                                rows="5"
                                class="mt-1 block w-full border-gray-300 text-sm focus:border-sky-500 focus:ring-sky-500 rounded-lg"
                                v-model="form.content"
                            ></textarea>
                            <InputError class="mt-2" :message="form.errors.content" />
                        </div>

                        <div class="my-4 border-t" ></div>
                        <div class="flex gap-4">
                            <ImportMediaForm :campanha_id="campanha.id" v-if="campanha.file_path === null" />
                            <ButtonPadrao
                                v-else
                                cor="red"
                                @click="confirmeRemoveMidia"
                            >
                                <svg class="w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                                </svg>
                                Remover Mídia
                            </ButtonPadrao>
                            <ButtonSave
                                v-if="form.content !== campanha.content"
                                cor="green"
                                :class="{ 'opacity-25': form.processing }"
                                :disabled="form.processing"
                                @click="salvar"
                            >Salvar</ButtonSave>
                        </div>
                    </div>
                    <div v-if="campanha.content || campanha.type === 'image'" class="w-1/4 p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                        <h6 class="font-bold text-gray-600">Modelo Mensagem:</h6>
                        <div class="my-4 border-t" ></div>

                        <div v-if="campanha.content !== null || campanha.file_path !== null" class="text-xs whitespace-pre-wrap p-3 rounded-lg bg-slate-100">
                            <img v-if="campanha.type === 'image'" class="rounded-lg" :src="$page.props.ziggy.url + '/storage/' + campanha.file_path" alt="">
                            <video controls v-if="campanha.type === 'video'">
                                <source :src="$page.props.ziggy.url + '/storage/' + campanha.file_path" :type="campanha.mimetype" />
                                Seu navegador não suporta o elemento de áudio.
                            </video>
                            <div v-if="form.content" class="mt-3">{{ form.content }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal :show="removeMidia" @close="closeModalMidia" max-width="sm">
                <div class="p-6">
                    <div class="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 text-orange-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <h6 class="font-bold text-lg text-center">Deseja remover a mídia?</h6>
                    </div>
                    <div class="mt-6 flex justify-center">
                        <ButtonPadrao @click="closeModalMidia" cor="red">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            Não
                        </ButtonPadrao>
                        <ButtonSim
                            cor="green"
                            class="ms-3"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                            @click="remover"
                        >Sim</ButtonSim>
                    </div>
                </div>
            </Modal>

        </div>

        <template #footer>
            <FooterApplicationLayout />
        </template>
    </ApplicationLayout>
</template>
