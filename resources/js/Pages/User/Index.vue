<script setup>
import {useForm} from '@inertiajs/vue3';
import {ref} from "vue";
import ApplicationLayout from "@/Layouts/ApplicationLayout.vue";
import FooterApplicationLayout from "@/Layouts/Partials/FooterApplicationLayout.vue";
import ItemBreadcrumb from "@/Components/Softui/Breadcrumb/ItemBreadcrumb.vue";
import Dropdown from "@/Components/old/Dropdown.vue";
import DropdownLink from "@/Components/old/DropdownLink.vue";
import ButtonLink from "@/Components/Softui/Link/ButtonLink.vue";
import PaginationLink from "@/Components/Softui/Link/PaginationLink.vue";
import ButtonTable from "@/Components/Softui/Button/ButtonTable.vue";
import LinkTable from "@/Components/Softui/Link/LinkTable.vue";
import SenhaUserForm from "@/Pages/User/Partials/SenhaUserForm.vue";

const props = defineProps({
    usuarios: {},
    ordem: String,
    pesquisar: String
});

const quantidade = ref(props.usuarios.per_page)
const pesquisar = ref(props.pesquisar)

const form = useForm({})

const deletar = (id) => {
    form.delete(route('usuario.destroy', id))
};

const handlePesquisar = () => {
    form.get(route('usuario.filtrar', [props.ordem, quantidade.value, pesquisar.value]))
};
</script>

<template>
    <ApplicationLayout title="Usuários">
        <template #breadcrumb>
            <!-- breadcrumb -->
            <ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                <ItemBreadcrumb href="">{{ __('sidebar.link.dashboard') }}</ItemBreadcrumb>
                <ItemBreadcrumb href="" :active="true">Usuários</ItemBreadcrumb>
            </ol>
            <h6 class="mb-0 font-bold capitalize">Usuários</h6>
        </template>

        <div class="w-full px-6 py-6 mx-auto">
            <!-- table 1 -->

            <div class="flex flex-wrap -mx-3">
                <div class="flex-none w-full max-w-full px-3">
                    <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="p-6 pb-0 mb-0 bg-white border-t-0 rounded-t-2xl border-t-transparent">
                            <div class="flex justify-between items-center">
                                <h6>Relação de Usuários</h6>
                                <div class="flex">
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
                                            <DropdownLink :href="route('usuario.filtrar', ['id', usuarios.per_page])"> ID </DropdownLink>
                                            <DropdownLink :href="route('usuario.filtrar', ['name', usuarios.per_page])"> Nome </DropdownLink>
                                            <DropdownLink :href="route('usuario.filtrar', ['updated_at', usuarios.per_page])"> Data </DropdownLink>
                                        </template>
                                    </Dropdown>
                                    <ButtonLink :href="route('usuario.create')" cor="green">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 mr-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>
                                        Cadastrar
                                    </ButtonLink>
                                </div>
                            </div>
                        </div>
                        <div class="flex-auto px-0 py-2">
                            <div class="p-0 overflow-x-auto">
                                <table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                    <thead class="align-bottom">
                                    <tr>
                                        <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70">Usuário</th>
                                        <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70">Canal</th>
                                        <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                                        <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70">Cadastro</th>
                                        <th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="usuario in usuarios.data">
                                        <td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent">
                                            <div class="flex px-2 py-1">
                                                <div>
                                                    <img :src="usuario.profile_photo_url" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user1" />
                                                </div>
                                                <div class="flex flex-col justify-center">
                                                    <h6 class="mb-0 text-sm leading-normal">{{ usuario.name }}</h6>
                                                    <p class="mb-0 text-xs leading-tight text-slate-400">{{ usuario.email }}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent">
                                            <p class="mb-0 text-xs font-semibold leading-tight">
                                                {{ usuario.integrante ? usuario.integrante.canal.nome : '' }}
                                            </p>
                                            <p class="mb-0 text-xs leading-tight text-slate-400">
                                                {{ usuario.integrante ? usuario.integrante.funcao.nome : '' }}
                                            </p>
                                        </td>
                                        <td class="p-2 text-sm leading-normal text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent">
                                            <span v-if="usuario.logado" class="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                                            <span v-else class="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Offline</span>
                                        </td>
                                        <td class="p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent">
                                            <span class="text-xs font-semibold leading-tight text-slate-400">
                                                {{ usuario.dt_criacao }}
                                            </span>
                                        </td>
                                        <td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent">
                                            <div class="flex gap-3 items-baseline">
                                                <LinkTable :href="route('usuario.show', usuario.id)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    </svg>
                                                </LinkTable>
                                                <LinkTable :href="route('usuario.edit', usuario.id)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                    </svg>
                                                </LinkTable>
                                                <SenhaUserForm :user="usuario" />
                                                <ButtonTable @click="deletar(usuario.id)">
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
                                <PaginationLink :href="usuarios.prev_page_url" v-if="usuarios.prev_page_url !== null">
                                    <i class="fas fa-arrow-left"></i>
                                </PaginationLink>
                                <div v-for="link in usuarios.links">
                                    <PaginationLink :href="link.url" v-if="link.url !== null && link.label.length < 5" :active="link.active">
                                        {{ link.label }}
                                    </PaginationLink>
                                </div>
                                <PaginationLink :href="usuarios.next_page_url" v-if="usuarios.next_page_url !== null" >
                                    <i class="fas fa-arrow-right"></i>
                                </PaginationLink>
                            </div>
                            <div class="flex items-center text-xs gap-3">
                                <div>
                                    Exibindo {{ usuarios.from }}-{{ usuarios.to }} de {{ usuarios.total }} itens
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
