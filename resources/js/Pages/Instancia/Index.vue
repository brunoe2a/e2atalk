<script setup>
import ApplicationLayout from "@/Layouts/ApplicationLayout.vue";
import FooterApplicationLayout from "@/Layouts/Partials/FooterApplicationLayout.vue";
import ItemBreadcrumb from "@/Components/Softui/Breadcrumb/ItemBreadcrumb.vue";
import ButtonTable from "@/Components/Softui/Button/ButtonTable.vue";
import {router, useForm} from "@inertiajs/vue3";
import {ref} from 'vue';
import axios from 'axios';
import Modal from "@/Components/old/Modal.vue";
import ButtonPadrao from "@/Components/Softui/Button/ButtonPadrao.vue";
import CreateInstanciaForm from "@/Pages/Instancia/Partials/CreateInstanciaForm.vue";
import ButtonExcluindo from "@/Components/Softui/Button/ButtonExcluindo.vue";
import LinkTable from "@/Components/Softui/Link/LinkTable.vue";

const props = defineProps({
    instancias: {},
    checkAtendimento: {
        type: Boolean,
    },
    empresas: {}
});

const qrcode = ref(null);
const instanciaID = ref(null);
const deleteInstancia = ref(false);
const showQrcode = ref(false);
const countdown = ref(60); // Tempo inicial (em segundos)
let timer = null;

const form = useForm({
    name: '',
});

const confirmDeleteInstancia = (id) => {
    deleteInstancia.value = true;
    instanciaID.value = id;
};

const startCountdown = () => {
    countdown.value = 60; // Resetar contador sempre que abrir
    timer = setInterval(() => {
        countdown.value--;
        if (countdown.value <= 0) {
            closeModal();
        }
    }, 1000);
};

const submit = () => {
    form.post(route('instancia.store'));
};
const connect = (id) => {
    showQrcode.value = true;
    axios.get(route('instancia.connect', id))
        .then((res) => {
            qrcode.value = res.data.qrcode;
            startCountdown();
        }).catch((error) => {
        console.log(error.data);
    });
};
const closeModal = () => {
    showQrcode.value = false;
    clearInterval(timer);
    window.location.reload();
};
const closeDeleteModal = () => {
    deleteInstancia.value = false;
    instanciaID.value = null;
};
const deletar = () => {
    form.delete(route('instancia.destroy', instanciaID.value), {
        preserveScroll: true,
        onSuccess: () => closeDeleteModal(),
        onError: () => closeDeleteModal(),
        onFinish: () => closeDeleteModal(),
    })
};
const logout = (id) => {
    form.get(route('instancia.logout', id))
};
</script>

<template>
    <ApplicationLayout title="Instâncias">
        <template #breadcrumb>
            <!-- breadcrumb -->
            <ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                <ItemBreadcrumb :href="route('dashboard')">{{ __('sidebar.link.dashboard') }}</ItemBreadcrumb>
                <ItemBreadcrumb href="" :active="true">Instâncias</ItemBreadcrumb>
            </ol>
            <h6 class="mb-0 font-bold capitalize">Instâncias</h6>
        </template>

        <div class="w-full px-6 py-6 mx-auto">

            <Modal :show="showQrcode" @close="closeModal" max-width="md">
                <div class="p-6">
                    <h6 class="font-bold">Escaneie o QR Code com o WhatsApp:</h6>

                    <div class="my-4" ></div>

                    <div v-if="qrcode">
                        <img :src="qrcode" class="w-full" alt="QR Code">
                    </div>
                    <h2 v-else class="font-semibold text-lg">
                        Gerando QR code.
                    </h2>

                    <div v-if="qrcode" class="mt-6 flex justify-between">
                        <p>Fechando em {{ countdown }} segundos...</p>
                        <ButtonPadrao @click="closeModal" cor="slate">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            Fechar
                        </ButtonPadrao>
                    </div>
                </div>
            </Modal>

            <Modal :show="deleteInstancia" @close="closeDeleteModal" max-width="md">
                <div class="p-6">

                    <div class="flex justify-center">
                        <svg class="w-24 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                    </div>

                    <h6 class="font-semibold text-slate-500 text-center">
                        Tem certeza que gostaria de Excluir?
                    </h6>

                    <div class="mt-6 flex justify-end">
                        <ButtonPadrao @click="closeDeleteModal" cor="red">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            Não
                        </ButtonPadrao>
                        <ButtonExcluindo
                            cor="green"
                            class="ms-3"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                            @click="deletar"
                        >Sim</ButtonExcluindo>
                    </div>
                </div>
            </Modal>

            <div class="flex flex-wrap gap-4">
                <CreateInstanciaForm :empresas="empresas" :check-atendimento="checkAtendimento" />
            </div>

            <div class="flex flex-wrap md:mt-6 -mx-3">

                <!-- card2 -->
                <div v-for="instancia in instancias" class="max-w-full px-3 mb-6 w-full md:w-1/3">
                    <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4">
                            <div class="flex flex-row justify-between -mx-3">
                                <div class="max-w-full px-3">
                                    <div>
                                        <h5 class="mb-0 text-lg font-bold">
                                            {{ instancia.nome }}
                                        </h5>
                                        <p class="mb-2 mt-0 text-xs">
                                            {{ instancia.empresa.name }}
                                        </p>
                                    </div>
                                </div>
                                <div class="px-3">
                                    <div class="flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-cyan-700 to-cyan-500">
                                        <svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z" clip-rule="evenodd"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div v-if="instancia.conection.profileName" class="mt-3 mb-5 flex justify-between items-center">
                                <img :src="instancia.conection.profilePicUrl" class="w-12 h-12 rounded-full" />
                                <div class="pl-3 grow font-semibold text-sm">
                                    {{ instancia.conection.profileName }} <br />
                                    {{ instancia.conection.ownerJid }}
                                </div>
                            </div>
                            <div class="mt-3 mb-5 flex justify-between items-center">
                                <span v-if="instancia.conection.connectionStatus === 'open'" class="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                    Conectado
                                </span>
                                <span v-else-if="instancia.conection.connectionStatus === 'close'" class="bg-gradient-to-tl from-red-700 to-red-500 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                    Desconectado
                                </span>
                                <span v-else-if="instancia.conection.connectionStatus === 'connecting'" class="bg-gradient-to-tl from-yellow-600 to-yellow-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                    Conectando
                                </span>
                                <span v-else class="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">
                                    {{ instancia.conection.connectionStatus }}
                                </span>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    <p class="pl-1 font-sans font-semibold leading-normal text-sm">
                                        {{ instancia.conection._count.Contact }}
                                    </p>
                                </div>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>
                                    <p class="pl-1 font-sans font-semibold leading-normal text-sm">
                                        {{ instancia.conection._count.Message }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex justify-between items-center border-t pt-3">
                                <div class="text-xs text-slate-400 grow flex items-center gap-4">
                                    <div v-if="instancia.atendimento === 'S'" class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                        </svg>
                                        <p class="pl-1 font-sans font-semibold leading-normal">
                                            Atendimento
                                        </p>
                                    </div>
                                    <div v-if="instancia.campanha === 'S'" class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                        </svg>
                                        <p class="pl-1 font-sans font-semibold leading-normal">
                                            Campanha
                                        </p>
                                    </div>
                                </div>
                                <div class="flex gap-3 items-center">
                                    <LinkTable :href="route('instancia.conection', instancia.id)" v-if="instancia.conection.connectionStatus !== 'open'" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                        </svg>
                                    </LinkTable>
                                    <ButtonTable v-if="instancia.conection.connectionStatus !== 'open'" @click="connect(instancia.id)" :disabled="showQrcode">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                                        </svg>
                                    </ButtonTable>
                                    <ButtonTable v-if="instancia.conection.connectionStatus === 'open'" @click="logout(instancia.id)">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 transition ease-in-out duration-300 hover:scale-125">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </ButtonTable>
                                    <ButtonTable @click="confirmDeleteInstancia(instancia.id)">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </ButtonTable>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

        <template #footer>
            <FooterApplicationLayout />
        </template>
    </ApplicationLayout>
</template>
