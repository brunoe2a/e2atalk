<script setup>
import ApplicationLayout from "@/Layouts/ApplicationLayout.vue";
import FooterApplicationLayout from "@/Layouts/Partials/FooterApplicationLayout.vue";
import ItemBreadcrumb from "@/Components/Softui/Breadcrumb/ItemBreadcrumb.vue";
import {Link, useForm} from "@inertiajs/vue3";
import {ref, computed, nextTick, onMounted, onBeforeUnmount} from "vue";
import ButtonPadrao from "@/Components/Softui/Button/ButtonPadrao.vue";
import ButtonLink from "@/Components/Softui/Link/ButtonLink.vue";
import Dropdown from "@/Components/old/Dropdown.vue";
import DropdownLink from "@/Components/old/DropdownLink.vue";
import PaginationLink from "@/Components/Softui/Link/PaginationLink.vue";
import InputPesquisa from "@/Components/Softui/Form/InputPesquisa.vue";
import Modal from "@/Components/old/Modal.vue";
import Checkbox from "@/Components/old/Checkbox.vue";
import ButtonIniciar from "@/Components/Softui/Button/ButtonIniciar.vue";
import ButtonSim from "@/Components/Softui/Button/ButtonSim.vue";

const props = defineProps({
    instancias: {},
    campanha: {},
    envios: {},
    total: {},
    ordem: String,
    status: String,
    pesquisar: String
});

const busca = ref(props.pesquisar)
const startCampanha = ref(false)
const reenviarCampanha = ref(false)
const Echo = window.Echo;

const form = useForm({
    content: props.campanha.content ?? '',
    campanha_id: props.campanha.id,
    instancias: {},
});

const totalProcessada = computed(() => {
    return props.total.contatos - props.total.erro_invalido
});

// Cálculo do percentual concluído
const enviados = ref(props.total.enviada); // Número de envios concluídos
const totalValidos = ref(totalProcessada); // Número de envios concluídos
const percentualConcluido = computed(() => {
    return enviados.value > 0 ? Math.round((enviados.value / totalValidos.value) * 100) : 0;
});

const confirmeStartCampanha = () => {
    startCampanha.value = true;
};

const confirmeReenviarCampanha = () => {
    reenviarCampanha.value = true;
};

const handlePesquisar = () => {
    form.get(route('campanha.envios.filtrar', [props.campanha.id, props.ordem, props.status, busca.value]))
};

const stop = () => {
    form.get(route('campanha.stop', props.campanha.id));
};

const start = () => {
    form.post(route('campanha.start'),{
        preserveScroll: true,
        onSuccess: () => closeModalStart(),
        onError: () => closeModalStart(),
        onFinish: () => closeModalStart(),
    });
};

const reenviar = () => {
    form.get(route('campanha.reenviar', props.campanha.id), {
        preserveScroll: true,
        onSuccess: () => closeModalReenviar(),
        onError: () => closeModalReenviar(),
        onFinish: () => closeModalReenviar(),
    })
};

const closeModalStart = () => {
    startCampanha.value = false;
    form.reset();
};

const closeModalReenviar = () => {
    reenviarCampanha.value = false;
};

const listenForMessages = () => {
    Echo.channel(`channel-campanha-send-message`)
        .listen('CampanhaSendMessageEvent', (data) => {
            if(data.envio){
                props.total.enviada = props.total.enviada + 1;
                props.total.fila = props.total.fila - 1;
                enviados.value = enviados.value + 1;
            }else{
                props.total.erro = props.total.erro + 1;
                props.total.erro_invalido = props.total.erro_invalido + 1;
            }
        });
};

const listenForValNumero = () => {
    Echo.channel(`channel-campanha-valida-numero`)
        .listen('CampanhaValidaNumeroEvent', (data) => {
            // console.log(data.contatos)
            props.total.contatos = props.total.contatos + data.contatos.total;
            props.total.invalido = props.total.invalido + data.contatos.invalidos;
            props.total.erro_invalido = props.total.erro_invalido + data.contatos.invalidos;
        });
};

const listenForContatoEnviado = () => {
    Echo.channel(`channel-campanha-contato-enviado`)
        .listen('CampanhaContatoEnviadoEvent', (data) => {
            // console.log(data.contato_enviado)
            props.envios.data.push(data.contato_enviado);
        });
};

const listenForFila = () => {
    Echo.channel(`channel-campanha-fila`)
        .listen('CampanhaStartFilaEvent', (data) => {
            // console.log(data.fila)
            props.total.fila = props.total.fila + data.fila;
        });
};

onMounted(() => {
    listenForMessages();
    listenForValNumero();
    listenForContatoEnviado();
    listenForFila();
});

onBeforeUnmount(() => {
    Echo.leave(`channel-campanha-send-message`);
    Echo.leave(`channel-campanha-valida-numero`);
    Echo.leave(`channel-campanha-contato-enviado`);
    Echo.leave(`channel-campanha-fila`);
});
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

            <div class="flex flex-wrap gap-4">
                <ButtonPadrao
                    v-if="campanha.status !== 'Iniciada' && campanha.status !== 'Concluida'"
                    cor="green"
                    @click="confirmeStartCampanha"
                >Iniciar</ButtonPadrao>
                <ButtonPadrao
                    v-if="campanha.status === 'Iniciada'"
                    cor="red"
                    @click="stop"
                >
                    <svg class="w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" clip-rule="evenodd" />
                    </svg>
                    Parar
                </ButtonPadrao>
                <ButtonLink
                    v-if="total.erro > 0"
                    :href="route('campanha.erros.reprocessar', campanha.id)"
                    cor="sky"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    Reenviar Erros
                </ButtonLink>
                <ButtonLink
                    :href="route('campanha.index')"
                    cor="slate"
                >
                    Campanhas
                </ButtonLink>
                <ButtonPadrao
                    v-if="campanha.status === 'Concluida'"
                    cor="green"
                    @click="confirmeReenviarCampanha"
                >Reenviar</ButtonPadrao>
            </div>

            <div class="flex flex-wrap mt-6 -mx-3">
                <!-- card1 -->
                <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none md:mb-0 md:w-1/3">
                    <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4">
                            <div>
                                <p class="mb-0 font-sans font-semibold leading-normal text-sm">Processamento da Campanha</p>
                                <div class="flex items-center gap-3">
                                    <h5 class="mb-0 text-lg font-bold">
                                        {{ percentualConcluido }}%
                                    </h5>
                                    <div class="text-xs h-1.5 w-full m-0 flex items-center overflow-visible rounded-lg bg-gray-200">
                                        <!-- Barra de progresso ajustada conforme o percentual -->
                                        <div
                                            v-if="percentualConcluido === 100"
                                            class="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 flex h-3 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                            :style="{ width: `${percentualConcluido}%` }"
                                            role="progressbar"
                                            :aria-valuenow="percentualConcluido"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                        <div v-else class="text-xs h-1.5 w-full m-0 flex items-center overflow-visible rounded-lg bg-gray-200">
                                            <div
                                                class="animate-pulse duration-600 ease-soft bg-gradient-to-tl from-sky-600 to-cyan-400 flex h-3 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                                :style="{ width: `${percentualConcluido}%` }"
                                                role="progressbar"
                                                :aria-valuenow="percentualConcluido"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- card2 -->
                <div class="max-w-full px-3 mb-6 w-1/2 md:mb-0 md:w-1/3">
                    <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4">
                            <div>
                                <p class="hidden md:block mb-0 font-sans font-semibold leading-normal text-sm">Efetuados com Sucesso</p>
                                <p class="md:hidden mb-0 font-sans font-semibold leading-normal text-sm">Sucesso</p>
                                <div class="flex items-center gap-3">
                                    <h5 class="mb-0 text-lg font-bold">
                                        {{ total.enviada }}
                                    </h5>
                                    <div
                                        v-if="percentualConcluido === 100"
                                        class="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 flex h-3 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                        :style="{ width: `${percentualConcluido}%` }"
                                        role="progressbar"
                                        :aria-valuenow="percentualConcluido"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                    <div v-else class="text-xs h-1.5 w-full m-0 flex items-center overflow-visible rounded-lg bg-gray-200">
                                        <div
                                            class="animate-pulse duration-600 ease-soft bg-gradient-to-tl from-sky-600 to-cyan-400 flex h-3 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all"
                                            :style="{ width: `${percentualConcluido}%` }"
                                            role="progressbar"
                                            :aria-valuenow="percentualConcluido"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                    <h5 class="mb-0 text-lg font-bold">
                                        {{ totalProcessada }}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="max-w-full px-3 mb-6 w-1/2 md:mb-0 md:w-1/3">
                    <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4">
                            <div class="flex flex-row -mx-3">
                                <div class="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p class="mb-0 font-sans font-semibold leading-normal text-sm">Inválidos</p>
                                        <h5 class="mb-0 text-lg font-bold">
                                            {{ total.invalido }}
                                        </h5>
                                    </div>
                                </div>
                                <div class="px-3 text-right basis-1/3">
                                    <div class="flex items-center justify-center w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                        <svg class="w-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z" clip-rule="evenodd"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex flex-wrap md:mt-6 -mx-3">
                <!-- card1 -->
                <div class="max-w-full px-3 mb-6 w-1/2 md:w-1/3 xl:mb-0 xl:w-1/4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4">
                            <div class="flex flex-row -mx-3">
                                <div class="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p class="mb-0 font-sans font-semibold leading-normal text-sm">Contatos</p>
                                        <h5 class="mb-0 text-lg font-bold">
                                            {{ total.contatos }}
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
                <div class="max-w-full px-3 mb-6 w-1/2 md:w-1/3 xl:mb-0 xl:w-1/4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4">
                            <div class="flex flex-row -mx-3">
                                <div class="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p class="mb-0 font-sans font-semibold leading-normal text-sm">Fila</p>
                                        <h5 class="mb-0 text-lg font-bold">
                                            {{ total.fila }}
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
                <div class="max-w-full px-3 mb-6 w-1/2 md:w-1/3 xl:mb-0 xl:w-1/4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4">
                            <div class="flex flex-row -mx-3">
                                <div class="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p class="mb-0 font-sans font-semibold leading-normal text-sm">Enviados</p>
                                        <h5 class="mb-0 text-lg font-bold">
                                            {{ total.enviada }}
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
                <div class="max-w-full px-3 w-1/2 md:w-1/3 xl:w-1/4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4">
                            <div class="flex flex-row -mx-3">
                                <div class="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p class="mb-0 font-sans font-semibold leading-normal text-sm">Erros</p>
                                        <h5 class="mb-0 text-lg font-bold">
                                            {{ total.erro }}
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
                <div class="flex-none w-full max-w-full px-3">
                    <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="p-6 pb-0 mb-0 bg-white border-t-0 rounded-t-2xl border-t-transparent">
                            <div class="md:flex justify-between items-center">
                                <h6>Contatos enviados</h6>
                                <div class="mt-3 flex flex-wrap md:flex-nowrap">
                                    <InputPesquisa placeholder="Pesquisar" v-model="busca" @keyup.enter="handlePesquisar" />
                                    <ButtonPadrao v-if="!pesquisar" @click="handlePesquisar" cor="blue" class="mt-3 md:mr-3 md:mt-0 w-full md:w-auto">
                                        Pesquisar
                                    </ButtonPadrao>
                                    <ButtonLink v-if="pesquisar" class="mt-3 md:mt-0 w-full md:w-64" cor="slate" :href="route('campanha.envios', campanha.id)">Limpar Pesquisa</ButtonLink>
                                    <Dropdown class="w-1/2 pr-2 md:mr-3 md:pr-0 md:w-auto">
                                        <template #trigger>
                                            <div class="inline-flex rounded-full mt-3 md:mt-0 w-full">
                                                <button
                                                    type="button"
                                                    class="inline-flex justify-between items-center h-8 w-full px-3 border border-gray-300 text-xs font-semibold rounded-lg text-gray-500 hover:scale-105 transition ease-in-out duration-150"
                                                >
                                                    Ordem

                                                    <svg
                                                        class="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </template>

                                        <template #content>
                                            <DropdownLink :href="route('campanha.envios.filtrar', [campanha.id,'updated_at', status, pesquisar])"> Data </DropdownLink>
                                            <DropdownLink :href="route('campanha.envios.filtrar', [campanha.id,'status', status, pesquisar])"> Status </DropdownLink>
                                            <DropdownLink :href="route('campanha.envios.filtrar', [campanha.id,'name', status, pesquisar])"> Contato </DropdownLink>
                                        </template>
                                    </Dropdown>
                                    <Dropdown class="w-1/2 pl-2 md:pl-0 md:w-auto">
                                        <template #trigger>
                                            <div class="inline-flex rounded-full mt-3 md:mt-0 w-full">
                                                <button
                                                    type="button"
                                                    class="inline-flex justify-between items-center h-8 w-full px-3 border border-gray-300 text-xs font-semibold rounded-lg text-gray-500 hover:scale-105 transition ease-in-out duration-150"
                                                >
                                                    Status

                                                    <svg
                                                        class="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </template>

                                        <template #content>
                                            <DropdownLink :href="route('campanha.envios.filtrar', [campanha.id, ordem, 'all', pesquisar])"> Todos </DropdownLink>
                                            <DropdownLink :href="route('campanha.envios.filtrar', [campanha.id, ordem, 'Fila', pesquisar])"> Fila </DropdownLink>
                                            <DropdownLink :href="route('campanha.envios.filtrar', [campanha.id, ordem, 'Enviada', pesquisar])"> Enviada </DropdownLink>
                                            <DropdownLink :href="route('campanha.envios.filtrar', [campanha.id, ordem, 'Inválido'], pesquisar)"> Inválido </DropdownLink>
                                            <DropdownLink :href="route('campanha.envios.filtrar', [campanha.id, ordem, 'Erro', pesquisar])"> Erro </DropdownLink>
                                        </template>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div class="flex-auto px-0 py-2">
                            <div class="p-0 overflow-x-auto">
                                <table class="table-fixed items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                    <thead class="align-bottom">
                                    <tr>
                                        <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70">Contato</th>
                                        <th class="w-auto px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70">Instância</th>
                                        <th class="w-36 px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell">Data Hora</th>
                                        <th class="w-36 px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell">Data Hora</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="envio in envios.data">
                                        <td class="p-2 align-middle bg-transparent border-t shadow-transparent">
                                            <div class="flex flex-col justify-center px-3 py-1">
                                                <h6 class="mb-0 text-sm leading-normal">
                                                    <Link :href="route('campanha.show', envio.id)">
                                                        {{ envio.name }}
                                                    </Link>
                                                </h6>
                                                <p class="mb-0 text-xs leading-tight text-slate-400">{{ envio.numero }}</p>
                                            </div>
                                        </td>
                                        <td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell">
                                            <span class="text-xs font-semibold leading-tight text-slate-400">
                                                {{ envio.nome }}
                                            </span>
                                        </td>
                                        <td class="p-2 align-middle bg-transparent border-t whitespace-pre-wrap shadow-transparent">
                                            <div v-if="envio.status === 'Erro' " class="flex items-center">
                                                <svg class="w-5 mr-2 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
                                                </svg>
                                                <span class="text-xs font-semibold leading-tight text-red-600">
                                                    {{ envio.status }}
                                                </span>
                                            </div>

                                            <div v-else-if="envio.status === 'Fila' " class="flex items-center">
                                                <svg class="w-5 mr-2 text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"/>
                                                </svg>
                                                <span class="text-xs font-semibold leading-tight text-slate-400">
                                                    {{ envio.status }}
                                                </span>
                                            </div>

                                            <div v-else-if="envio.status === 'Válido' " class="flex items-center">
                                                <svg class="w-5 mr-2 text-sky-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                                                </svg>
                                                <span class="text-xs font-semibold leading-tight text-sky-500">
                                                    {{ envio.status }}
                                                </span>
                                            </div>

                                            <div v-else-if="envio.status === 'Enviada' " class="flex items-center">
                                                <svg class="w-5 mr-2 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"/>
                                                </svg>
                                                <span class="text-xs font-semibold leading-tight text-green-500">
                                                    {{ envio.status }}
                                                </span>
                                            </div>

                                            <div v-else class="flex items-center">
                                                <svg class="w-5 mr-2 text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z" clip-rule="evenodd"/>
                                                </svg>
                                                <span class="text-xs font-semibold leading-tight text-slate-400">
                                                    {{ envio.status }}
                                                </span>
                                            </div>

                                        </td>
                                        <td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell">
                                            <span class="text-xs font-semibold leading-tight text-slate-400">
                                                {{ envio.dt_envio }}
                                            </span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="px-6 pt-3 pb-6 md:flex md:justify-between md:items-center">
                            <div class="hidden md:flex items-baseline">
                                <PaginationLink :href="envios.prev_page_url" v-if="envios.prev_page_url !== null">
                                    <i class="fas fa-arrow-left"></i>
                                </PaginationLink>
                                <div v-for="link in envios.links">
                                    <PaginationLink :href="link.url" v-if="link.url !== null && link.label.length < 5" :active="link.active">
                                        {{ link.label }}
                                    </PaginationLink>
                                </div>
                                <PaginationLink :href="envios.next_page_url" v-if="envios.next_page_url !== null" >
                                    <i class="fas fa-arrow-right"></i>
                                </PaginationLink>
                            </div>
                            <div class="flex md:hidden items-baseline">
                                <PaginationLink :href="envios.prev_page_url" v-if="envios.prev_page_url !== null">
                                    <i class="fas fa-arrow-left mr-2"></i> Anterior
                                </PaginationLink>
                                <PaginationLink :href="envios.next_page_url" v-if="envios.next_page_url !== null" >
                                    <i class="fas fa-arrow-right mr-2"></i> Próxima
                                </PaginationLink>
                            </div>
                            <div class="mt-5 md:mt-0 flex items-center text-xs gap-3">
                                <div>
                                    Exibindo {{ envios.from }}-{{ envios.to }} de {{ envios.total }} itens
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal :show="startCampanha" @close="closeModalStart" max-width="sm">
                <div class="p-6">
                    <div>
                        <h6 class="font-bold text-lg mb-4">Selecione as Instâncias de Campanha:</h6>
                        <div v-for="instancia in instancias">
                            <Checkbox v-model:checked="form.instancias[instancia.id]" />
                            <span class="font-extrabold text-sm ml-2">{{ instancia.nome }}</span>
                        </div>
                    </div>
                    <div class="mt-6 flex gap-5 justify-center">
                        <ButtonPadrao @click="closeModalStart" cor="red">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            Cancelar
                        </ButtonPadrao>
                        <ButtonIniciar
                            cor="green"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                            @click="start"
                        >Iniciar</ButtonIniciar>
                    </div>
                </div>
            </Modal>

            <Modal :show="reenviarCampanha" @close="closeModalReenviar" max-width="sm">
                <div class="p-6">
                    <div class="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 text-orange-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <h6 class="font-bold text-lg text-center">Deseja reenviar a campanha?</h6>
                    </div>
                    <div class="mt-6 flex gap-5 justify-center">
                        <ButtonPadrao @click="closeModalReenviar" cor="red">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            Não
                        </ButtonPadrao>
                        <ButtonSim
                            cor="green"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                            @click="reenviar"
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
