<script setup>
import {Link, useForm} from '@inertiajs/vue3';
import {nextTick, ref} from "vue";
import ApplicationLayout from "@/Layouts/ApplicationLayout.vue";
import FooterApplicationLayout from "@/Layouts/Partials/FooterApplicationLayout.vue";
import ItemBreadcrumb from "@/Components/Softui/Breadcrumb/ItemBreadcrumb.vue";
import Dropdown from "@/Components/old/Dropdown.vue";
import DropdownLink from "@/Components/old/DropdownLink.vue";
import PaginationLink from "@/Components/Softui/Link/PaginationLink.vue";
import ButtonTable from "@/Components/Softui/Button/ButtonTable.vue";
import LinkTable from "@/Components/Softui/Link/LinkTable.vue";
import CreateCampanhaForm from "@/Pages/Campanha/Partials/CreateCampanhaForm.vue";
import InputSoftUi from "@/Components/Softui/Form/InputSoftUi.vue";
import Modal from "@/Components/old/Modal.vue";
import ButtonPadrao from "@/Components/Softui/Button/ButtonPadrao.vue";
import InputLabel from "@/Components/old/InputLabel.vue";
import InputError from "@/Components/old/InputError.vue";
import ButtonSave from "@/Components/Softui/Button/ButtonSave.vue";
import ButtonSim from "@/Components/Softui/Button/ButtonSim.vue";
import InputPesquisa from "@/Components/Softui/Form/InputPesquisa.vue";
import ButtonLink from "@/Components/Softui/Link/ButtonLink.vue";

const props = defineProps({
    erros: {},
    ordem: String,
    fluxo: String,
    pesquisar: String
});

console.log(props.ordem)

const busca = ref(props.pesquisar)
const quantidade = ref(props.erros.per_page)
const pesquisar = ref(props.pesquisar)

const form = useForm({})

const handlePesquisar = () => {
    form.get(route('erros.filtrar', [props.ordem, props.fluxo, quantidade.value, busca.value]))
};
</script>

<template>
    <ApplicationLayout title="Erros">
        <template #breadcrumb>
            <!-- breadcrumb -->
            <ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                <ItemBreadcrumb href="">{{ __('sidebar.link.dashboard') }}</ItemBreadcrumb>
                <ItemBreadcrumb href="" :active="true">Erros</ItemBreadcrumb>
            </ol>
            <h6 class="mb-0 font-bold capitalize">Erros</h6>
        </template>

        <div class="w-full px-6 py-6 mx-auto">
            <!-- table 1 -->

            <div class="flex flex-wrap -mx-3">
                <div class="flex-none w-full max-w-full px-3">
                    <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="p-6 pb-0 mb-0 bg-white border-t-0 rounded-t-2xl border-t-transparent">
                            <div class="flex justify-between items-center">
                                <h6>Relação de Erros</h6>
                                <div class="flex flex-wrap md:flex-nowrap">
                                    <InputPesquisa placeholder="Pesquisar" v-model="busca" @keyup.enter="handlePesquisar" />
                                    <ButtonPadrao v-if="!pesquisar" @click="handlePesquisar" cor="blue" class="mt-3 md:mr-3 md:mt-0 w-full md:w-auto">
                                        Pesquisar
                                    </ButtonPadrao>
                                    <ButtonLink v-if="pesquisar" class="mt-3 md:mr-3 md:mt-0 w-full md:w-64" cor="slate" :href="route('erros.index')">Limpar Pesquisa</ButtonLink>
                                    <Dropdown>
                                        <template #trigger>
                                            <div class="inline-flex rounded-full mt-3 md:mt-0 w-full">
                                                <button
                                                    type="button"
                                                    class="inline-flex justify-between items-center h-8 w-full px-3 border border-gray-300 text-xs font-semibold rounded-lg text-gray-500 hover:scale-105 transition ease-in-out duration-150"
                                                >
                                                    Fluxo

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
                                            <DropdownLink :href="route('erros.filtrar', [ordem, 'todas', erros.per_page, pesquisar])"> Todos </DropdownLink>
                                            <DropdownLink :href="route('erros.filtrar', [ordem, 'Entrada', erros.per_page, pesquisar])"> Entrada </DropdownLink>
                                            <DropdownLink :href="route('erros.filtrar', [ordem, 'Saida', erros.per_page, pesquisar])"> Saida </DropdownLink>
                                        </template>
                                    </Dropdown>
                                    <Dropdown>
                                        <template #trigger>
                                            <span class="inline-flex rounded-full mr-3 ml-3">
                                                <button
                                                    type="button"
                                                    class="inline-flex items-center h-8 px-3 border border-gray-300 text-xs font-semibold rounded-lg text-gray-500 hover:scale-105 transition ease-in-out duration-150"
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
                                            </span>
                                        </template>

                                        <template #content>
                                            <DropdownLink :href="route('erros.filtrar', ['id', fluxo, erros.per_page])"> ID </DropdownLink>
                                            <DropdownLink :href="route('erros.filtrar', ['campanha_id', fluxo, erros.per_page])"> Campanha </DropdownLink>
                                            <DropdownLink :href="route('erros.filtrar', ['contato_id', fluxo, erros.per_page])"> Contato </DropdownLink>
                                            <DropdownLink :href="route('erros.filtrar', ['created_at', fluxo, erros.per_page])"> Data </DropdownLink>
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
                                        <th class="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell">Erro</th>
                                        <th class="px-2 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell">Data</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="erro in erros.data">
                                        <td class="px-3 py-2 align-middle bg-transparent border-t shadow-transparent">
                                            <div class="flex flex-col justify-center px-3 py-1">
                                                <h6 class="mb-0 text-sm leading-normal">
                                                    {{ erro.contato.name }}
                                                </h6>
                                                <p v-if="erro.campanha_id" class="mb-0 text-xs leading-tight text-slate-400">
                                                    {{ erro.campanha.nome }}
                                                </p>
                                            </div>
                                        </td>
                                        <td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell">
                                            <span class="text-xs font-semibold leading-tight text-slate-400">
                                                {{ erro.erro }}
                                            </span>
                                        </td>
                                        <td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell">
                                            <span class="text-xs font-semibold leading-tight text-slate-400">
                                                {{ erro.dt_criacao }}
                                            </span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="px-6 pt-3 pb-6 flex justify-between items-center">
                            <div class="flex items-baseline">
                                <PaginationLink :href="erros.prev_page_url" v-if="erros.prev_page_url !== null">
                                    <i class="fas fa-arrow-left"></i>
                                </PaginationLink>
                                <div v-for="link in erros.links">
                                    <PaginationLink :href="link.url" v-if="link.url !== null && link.label.length < 5" :active="link.active">
                                        {{ link.label }}
                                    </PaginationLink>
                                </div>
                                <PaginationLink :href="erros.next_page_url" v-if="erros.next_page_url !== null" >
                                    <i class="fas fa-arrow-right"></i>
                                </PaginationLink>
                            </div>
                            <div class="flex items-center text-xs gap-3">
                                <div>
                                    Exibindo {{ erros.from }}-{{ erros.to }} de {{ erros.total }} itens
                                </div>
                                <div>
                                    |
                                </div>
                                <div>
                                    Exibir
                                </div>
                                <select @change="handlePesquisar" v-model="quantidade" class="py-2 pl-3 pr-5 border border-gray-300 text-xs font-bold rounded-lg focus:border-sky-500 focus:outline-none text-gray-500 hover:scale-105 transition ease-in-out duration-300">
                                    <option value="15">15</option>
                                    <option value="30">30</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                                <div>
                                    itens
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
