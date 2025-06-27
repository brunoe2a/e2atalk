<script setup>
import {useForm} from '@inertiajs/vue3';
import ApplicationLayout from "@/Layouts/ApplicationLayout.vue";
import FooterApplicationLayout from "@/Layouts/Partials/FooterApplicationLayout.vue";
import ItemBreadcrumb from "@/Components/Softui/Breadcrumb/ItemBreadcrumb.vue";
import ButtonSave from "@/Components/Softui/Button/ButtonSave.vue";
import ButtonLink from "@/Components/Softui/Link/ButtonLink.vue";
import InputError from "@/Components/old/InputError.vue";
import InputLabel from "@/Components/old/InputLabel.vue";
import InputSoftUi from "@/Components/Softui/Form/InputSoftUi.vue";
import ImportContatoForm from "@/Pages/Lista/Partials/ImportContatoForm.vue";
import PaginationLink from "@/Components/Softui/Link/PaginationLink.vue";
import AddContatoForm from "@/Pages/Lista/Partials/AddContatoForm.vue";

const props = defineProps({
    lista: {},
    leads: {},
    contatos: {},
});

const form = useForm({
    nome: props.lista.nome,
    descricao: props.lista.descricao ?? null,
});

const submit = () => {
    form.put(route('lista.update', props.lista.id));
};
</script>

<template>
    <ApplicationLayout :title="'Alterar Lista:' + lista.nome">
        <template #breadcrumb>
            <!-- breadcrumb -->
            <ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                <ItemBreadcrumb :href="route('dashboard')">{{ __('sidebar.link.dashboard') }}</ItemBreadcrumb>
                <ItemBreadcrumb :href="route('lista.index')">Listas</ItemBreadcrumb>
                <ItemBreadcrumb href="" :active="true">Alterar Lista: {{ lista.nome }}</ItemBreadcrumb>
            </ol>
            <h6 class="mb-0 font-bold capitalize">Alterar Lista: {{ lista.nome }}</h6>
        </template>

        <div class="w-full px-6 py-6 mx-auto">
            <!-- table 1 -->

            <div class="flex flex-wrap -mx-3">
                <div class="flex gap-4 w-full max-w-full px-3">
                    <div class="w-1/3 p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
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
                        <div class="my-4 border-t" ></div>
                        <div class="flex gap-4">
                            <ButtonSave
                                v-if="form.descricao !== lista.descricao || form.nome !== lista.nome"
                                cor="green"
                                :class="{ 'opacity-25': form.processing }"
                                :disabled="form.processing"
                                @click="submit"
                            >Salvar</ButtonSave>
                            <ImportContatoForm :lista_id="lista.id" />
                            <AddContatoForm :contatos="leads" :lista_id="lista.id" />
                            <ButtonLink :href="route('lista.index')" cor="gray">
                                Cancelar
                            </ButtonLink>
                        </div>
                    </div>
                    <div class="grow p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                        <h6 class="font-bold text-gray-600">Relação de Contatos:</h6>
                        <table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                            <thead class="align-bottom">
                            <tr>
                                <th class="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70">Contato</th>
                                <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent shadow-none text-xxs tracking-none whitespace-nowrap text-slate-400 opacity-70">Telefone</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="contato in contatos.data">
                                <td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent">
                                    <div class="flex flex-col justify-center px-3 py-1">
                                        <h6 class="mb-0 text-sm leading-normal">{{ contato.contato.name }}</h6>
                                        <p class="mb-0 text-xs leading-tight text-slate-400">{{ contato.contato.email }}</p>
                                    </div>
                                </td>
                                <td class="p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent">
                                    <span class="text-xs font-semibold leading-tight text-slate-400">
                                        {{ contato.contato.numero }}
                                    </span>
                                </td>
                                <!--<td class="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent">
                                    <div class="flex gap-3 items-baseline">
                                        <LinkTable href="route('lista.show', lista.id)">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        </LinkTable>
                                        <LinkTable href="route('lista.edit', lista.id)">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                        </LinkTable>
                                        <ButtonTable>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </ButtonTable>
                                    </div>
                                </td>-->
                            </tr>
                            </tbody>
                        </table>

                        <div class="mt-3 flex items-baseline">
                            <PaginationLink :href="contatos.prev_page_url" v-if="contatos.prev_page_url !== null">
                                <i class="fas fa-arrow-left"></i>
                            </PaginationLink>
                            <div v-for="link in contatos.links">
                                <PaginationLink :href="link.url" v-if="link.url !== null && link.label.length < 5" :active="link.active">
                                    {{ link.label }}
                                </PaginationLink>
                            </div>
                            <PaginationLink :href="contatos.next_page_url" v-if="contatos.next_page_url !== null" >
                                <i class="fas fa-arrow-right"></i>
                            </PaginationLink>
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
