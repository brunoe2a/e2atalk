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

const props = defineProps({
    campanhas: {},
    listas: {},
    ordem: String,
    status: String,
    pesquisar: String
});

const quantidade = ref(props.campanhas.per_page)
const pesquisar = ref(props.pesquisar)
const editCampanha = ref(false)
const deleteCampanha = ref(false)
const duplicarCampanha = ref(false)
const nomeCampanha = ref(null)
const idCampanha = ref(null)

const form = useForm({
    id: 0,
    nome: '',
    descricao: '',
    t_inicial: 0,
    t_final: 0,
    tempo_pausa: 0,
    quat_pausa: 0,
})

const editarCampanha = (campanha) => {
    editCampanha.value = true;
    nomeCampanha.value = campanha.nome;
    form.id = campanha.id
    form.nome = campanha.nome
    form.descricao = campanha.descricao
    form.t_inicial = campanha.t_inicial
    form.t_final = campanha.t_final
    form.tempo_pausa = campanha.tempo_pausa
    form.quat_pausa = campanha.quat_pausa
    nextTick(() => form.nome.focus());
};

const confirmeDeleteCampanha = (id) => {
    deleteCampanha.value = true;
    idCampanha.value = id;
};

const confirmeDuplicarCampanha = (id) => {
    duplicarCampanha.value = true;
    idCampanha.value = id;
};

const deletar = () => {
    form.delete(route('campanha.destroy', idCampanha.value), {
        preserveScroll: true,
        onSuccess: () => closeModalDelete(),
        onError: () => closeModalDelete(),
        onFinish: () => closeModalDelete(),
    })
};

const duplicar = () => {
    form.get(route('campanha.duplicar', idCampanha.value), {
        preserveScroll: true,
        onSuccess: () => closeModalDuplicar(),
        onError: () => closeModalDuplicar(),
        onFinish: () => closeModalDuplicar(),
    })
};

const handlePesquisar = () => {
    form.get(route('campanha.filtrar', [props.ordem, quantidade.value, props.status, pesquisar.value]))
};

const salvar = () => {
    form.post(route('campanha.alterar'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => nextTick(() => form.nome.focus()),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    editCampanha.value = false;
    nomeCampanha.value = null;
    form.reset();
};

const closeModalDelete = () => {
    deleteCampanha.value = false;
    idCampanha.value = null;
};

const closeModalDuplicar = () => {
    duplicarCampanha.value = false;
    idCampanha.value = null;
};
</script>

<template>
    <ApplicationLayout title="Campanhas">
        <template #breadcrumb>
            <!-- breadcrumb -->
            <ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                <ItemBreadcrumb href="">{{ __('sidebar.link.dashboard') }}</ItemBreadcrumb>
                <ItemBreadcrumb href="" :active="true">Campanhas</ItemBreadcrumb>
            </ol>
            <h6 class="mb-0 font-bold capitalize">Campanhas</h6>
        </template>

        <div class="w-full px-6 py-6 mx-auto">
            <!-- table 1 -->

            <div class="flex flex-wrap -mx-3">
                <div class="flex-none w-full max-w-full px-3">
                    <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="p-6 pb-0 mb-0 bg-white border-t-0 rounded-t-2xl border-t-transparent">
                            <div class="flex justify-between items-center">
                                <h6>Relação de campanhas</h6>
                                <div class="flex">
                                    <Dropdown>
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
                                            <DropdownLink :href="route('campanha.filtrar', [ordem, campanhas.per_page, 'todas', pesquisar])"> Todas </DropdownLink>
                                            <DropdownLink :href="route('campanha.filtrar', [ordem, campanhas.per_page, 'Aguardando', pesquisar])"> Aguardando </DropdownLink>
                                            <DropdownLink :href="route('campanha.filtrar', [ordem, campanhas.per_page, 'Iniciada', pesquisar])"> Iniciada </DropdownLink>
                                            <DropdownLink :href="route('campanha.filtrar', [ordem, campanhas.per_page, 'Pausada', pesquisar])"> Pausada </DropdownLink>
                                            <DropdownLink :href="route('campanha.filtrar', [ordem, campanhas.per_page, 'Concluida', pesquisar])"> Concluida </DropdownLink>
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
                                            <DropdownLink :href="route('campanha.filtrar', ['id', campanhas.per_page])"> ID </DropdownLink>
                                            <DropdownLink :href="route('campanha.filtrar', ['nome', campanhas.per_page])"> Nome </DropdownLink>
                                            <DropdownLink :href="route('campanha.filtrar', ['updated_at', campanhas.per_page])"> Data </DropdownLink>
                                        </template>
                                    </Dropdown>
                                    <CreateCampanhaForm :listas="listas" />
                                </div>
                            </div>
                        </div>
                        <div class="flex-auto px-0 py-2">
                            <div class="p-0 overflow-x-auto">
                                <table class="table-fixed items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                    <thead class="align-bottom">
                                    <tr>
                                        <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70">Campanha</th>
                                        <th class="w-28 px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell">Status</th>
                                        <th class="w-28 px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70 hidden md:table-cell">Cadastro</th>
                                        <th class="w-48 pl-6 py-3 font-semibold capitalize align-middle bg-transparent border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="campanha in campanhas.data">
                                        <td class="p-2 align-middle bg-transparent border-t shadow-transparent">
                                            <div class="flex flex-col justify-center px-3 py-1">
                                                <h6 class="mb-0 text-sm leading-normal">
                                                    <Link :href="route('campanha.envios', campanha.id)">
                                                        {{ campanha.nome }}
                                                    </Link>
                                                </h6>
                                                <p v-if="campanha.descricao" class="mb-0 text-xs leading-tight text-slate-400">{{ campanha.descricao }}</p>
                                            </div>
                                        </td>
                                        <td class="p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell">
                                            <span class="text-xs font-semibold leading-tight text-slate-400">
                                                {{ campanha.status }}
                                            </span>
                                        </td>
                                        <td class="p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent hidden md:table-cell">
                                            <span class="text-xs font-semibold leading-tight text-slate-400">
                                                {{ campanha.dt_criacao }}
                                            </span>
                                        </td>
                                        <td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent">
                                            <div class="flex gap-3 items-baseline">
                                                <LinkTable :href="route('campanha.envios', campanha.id)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                                    </svg>
                                                </LinkTable>
                                                <LinkTable :href="route('campanha.show', campanha.id)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    </svg>
                                                </LinkTable>
                                                <ButtonTable @click="editarCampanha(campanha)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                    </svg>
                                                </ButtonTable>
                                                <ButtonTable @click="confirmeDuplicarCampanha(campanha.id)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                                                    </svg>
                                                </ButtonTable>
                                                <ButtonTable @click="confirmeDeleteCampanha(campanha.id)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>
                                                </ButtonTable>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="px-6 pt-3 pb-6 flex justify-between items-center">
                            <div class="flex items-baseline">
                                <PaginationLink :href="campanhas.prev_page_url" v-if="campanhas.prev_page_url !== null">
                                    <i class="fas fa-arrow-left"></i>
                                </PaginationLink>
                                <div v-for="link in campanhas.links">
                                    <PaginationLink :href="link.url" v-if="link.url !== null && link.label.length < 5" :active="link.active">
                                        {{ link.label }}
                                    </PaginationLink>
                                </div>
                                <PaginationLink :href="campanhas.next_page_url" v-if="campanhas.next_page_url !== null" >
                                    <i class="fas fa-arrow-right"></i>
                                </PaginationLink>
                            </div>
                            <div class="flex items-center text-xs gap-3">
                                <div>
                                    Exibindo {{ campanhas.from }}-{{ campanhas.to }} de {{ campanhas.total }} itens
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

            <Modal :show="editCampanha" @close="closeModal" max-width="xl">
                <div class="p-6">
                    <h6 class="font-bold">Campanha: {{ nomeCampanha }}</h6>

                    <div class="my-4" ></div>

                    <div class="mb-4">
                        <InputLabel for="nome" class="text-xs" value="Nome:" />
                        <InputSoftUi
                            id="nome"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.nome"
                            required
                            autofocus
                            autocomplete="nome"
                        />
                        <InputError class="mt-2" :message="form.errors.nome" />
                    </div>

                    <div class="mb-4">
                        <InputLabel for="descricao" class="text-xs" value="Descrição:" />
                        <InputSoftUi
                            id="descricao"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.descricao"
                            required
                            autocomplete="descricao"
                        />
                        <InputError class="mt-2" :message="form.errors.descricao" />
                    </div>

                    <div class="text-sm font-bold uppercase mb-2 mt-3">
                        Intervalo de Tempo entre envios:
                    </div>

                    <div class="grid grid-cols-4 gap-4">
                        <div class="mb-4">
                            <InputLabel for="t_inicial" class="text-xs" value="Inicio: (seg.)" />
                            <InputSoftUi
                                id="t_inicial"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.t_inicial"
                                required
                                autocomplete="t_inicial"
                            />
                            <InputError class="mt-2" :message="form.errors.t_inicial" />
                        </div>

                        <div class="mb-4">
                            <InputLabel for="t_final" class="text-xs" value="Fim: (seg.)" />
                            <InputSoftUi
                                id="t_final"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.t_final"
                                required
                                autocomplete="t_final"
                            />
                            <InputError class="mt-2" :message="form.errors.t_final" />
                        </div>

                        <div class="mb-4">
                            <InputLabel for="tempo_pausa" class="text-xs" value="Tempo Pausa: (min.)" />
                            <InputSoftUi
                                id="tempo_pausa"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.tempo_pausa"
                                required
                                autocomplete="tempo_pausa"
                            />
                            <InputError class="mt-2" :message="form.errors.tempo_pausa" />
                        </div>

                        <div class="mb-4">
                            <InputLabel for="quat_pausa" class="text-xs" value="Quant. Pausa:" />
                            <InputSoftUi
                                id="quat_pausa"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.quat_pausa"
                                required
                                autocomplete="quat_pausa"
                            />
                            <InputError class="mt-2" :message="form.errors.quat_pausa" />
                        </div>
                    </div>

                    <div class="mt-6 flex justify-end">
                        <ButtonPadrao @click="closeModal" cor="red">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            Cancel
                        </ButtonPadrao>
                        <ButtonSave
                            cor="green"
                            class="ms-3"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                            @click="salvar"
                        >Salvar</ButtonSave>
                    </div>
                </div>
            </Modal>

            <Modal :show="deleteCampanha" @close="closeModalDelete" max-width="sm">
                <div class="p-6">
                    <div class="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 text-orange-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <h6 class="font-bold text-lg text-center">Deseja excluir a campanha?</h6>
                    </div>
                    <div class="mt-6 flex gap-5 justify-center">
                        <ButtonPadrao @click="closeModalDelete" cor="red">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            Não
                        </ButtonPadrao>
                        <ButtonSim
                            cor="green"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                            @click="deletar"
                        >Sim</ButtonSim>
                    </div>
                </div>
            </Modal>

            <Modal :show="duplicarCampanha" @close="closeModalDuplicar" max-width="sm">
                <div class="p-6">
                    <div class="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 text-orange-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <h6 class="font-bold text-lg text-center">Deseja duplicar a campanha?</h6>
                    </div>
                    <div class="mt-6 flex gap-5 justify-center">
                        <ButtonPadrao @click="closeModalDuplicar" cor="red">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            Não
                        </ButtonPadrao>
                        <ButtonSim
                            cor="green"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                            @click="duplicar"
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
