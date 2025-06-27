<script setup>
import { watch } from 'vue';
import {useForm} from '@inertiajs/vue3';
import ApplicationLayout from "@/Layouts/ApplicationLayout.vue";
import FooterApplicationLayout from "@/Layouts/Partials/FooterApplicationLayout.vue";
import ItemBreadcrumb from "@/Components/Softui/Breadcrumb/ItemBreadcrumb.vue";
import InputLabel from "@/Components/old/InputLabel.vue";
import InputSoftUi from "@/Components/Softui/Form/InputSoftUi.vue";
import InputError from "@/Components/old/InputError.vue";
import ButtonSave from "@/Components/Softui/Button/ButtonSave.vue";
import Checkbox from "@/Components/old/Checkbox.vue";
import ButtonLink from "@/Components/Softui/Link/ButtonLink.vue";

const props = defineProps({
    user: {},
    canal: {},
    funcao: {},
    canais: {},
    modulos: {},
    permissao: {},
});

const form = useForm({
    name: props.user.name,
    email: props.user.email,
    telefone: props.user.telefone,
    cpf: props.user.cpf,
    canal: props.canal,
    funcao: props.funcao,
    permissao: props.permissao
});

// Observe mudanças nas funções e marque ou desmarque o canal automaticamente
watch(
    () => form.funcao,
    (newFuncao) => {
        props.canais.forEach(canal => {
            const canalFuncoesMarcadas = canal.funcoes.some(funcao => newFuncao[funcao.id]);
            const todasFuncoesDesmarcadas = canal.funcoes.every(funcao => !newFuncao[funcao.id]);

            if (canalFuncoesMarcadas) {
                form.canal[canal.id] = true;  // Marca o canal se houver alguma função marcada
            } else if (todasFuncoesDesmarcadas) {
                form.canal[canal.id] = false; // Desmarca o canal se todas as funções forem desmarcadas
            }
        });
    },
    { deep: true }
);

const submit = () => {
    form.put(route('usuario.update', props.user.id));
};
</script>

<template>
    <ApplicationLayout :title="'Alterar: '+user.name">
        <template #breadcrumb>
            <!-- breadcrumb -->
            <ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                <ItemBreadcrumb :href="route('dashboard')">{{ __('sidebar.link.dashboard') }}</ItemBreadcrumb>
                <ItemBreadcrumb :href="route('usuario.index')">Usuários</ItemBreadcrumb>
                <ItemBreadcrumb href="" :active="true">Alterar: {{ user.name }}</ItemBreadcrumb>
            </ol>
            <h6 class="mb-0 font-bold capitalize">Alterar: {{ user.name }}</h6>
        </template>

        <div class="w-full px-6 py-6 mx-auto">
            <!-- table 1 -->

            <div class="flex flex-wrap -mx-3">
                <div class="flex gap-4 w-full max-w-full px-3">
                    <div class="w-1/3 p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="mb-4">
                            <InputLabel for="name" class="text-xs" value="Nome:" />
                            <InputSoftUi
                                id="name"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.name"
                                required
                                autofocus
                                autocomplete="name"
                            />
                            <InputError class="mt-2" :message="form.errors.name" />
                        </div>
                        <div class="mb-4">
                            <InputLabel for="email" class="text-xs" value="E-mail:" />
                            <InputSoftUi
                                id="email"
                                type="email"
                                class="mt-1 block w-full"
                                v-model="form.email"
                                required
                                autocomplete="email"
                            />
                            <InputError class="mt-2" :message="form.errors.email" />
                        </div>
                        <div class="mb-4">
                            <InputLabel for="cpf" class="text-xs" value="CPF:" />
                            <InputSoftUi
                                id="cpf"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.cpf"
                                v-mask="'###.###.###-##'"
                                required
                                autocomplete="cpf"
                            />
                            <InputError class="mt-2" :message="form.errors.cpf" />
                        </div>
                        <div class="mb-4">
                            <div>
                                <InputLabel for="telefone" class="text-xs" value="Celular:" />
                                <InputSoftUi
                                    id="telefone"
                                    type="text"
                                    class="mt-1 block w-full"
                                    v-model="form.telefone"
                                    v-mask="'(##) #####-####'"
                                    required
                                    autocomplete="telefone"
                                />
                                <InputError class="mt-2" :message="form.errors.telefone" />
                            </div>
                        </div>
                        <div>
                            <h6 class="font-bold bg-gray-100 text-gray-600 rounded mb-3 px-2 py-1">Canais de Atendimento:</h6>
                            <div v-for="canal in canais" class="pb-5">
                                <Checkbox class="hidden" v-model:checked="form.canal[canal.id]" />
                                <span class="font-extrabold text-sm">{{ canal.nome }}: </span> <br />
                                <span class="italic text-xs">{{ canal.descricao }}</span>
                                <div class="pt-1">
                                    <label v-for="funcao in canal.funcoes" class="flex items-center">
                                        <Checkbox v-model:checked="form.funcao[funcao.id]" />
                                        <span class="ms-2 text-sm text-gray-600">{{ funcao.nome }}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="my-4 border-t" ></div>
                        <div class="flex gap-4">
                            <ButtonSave @click="submit" >Salvar</ButtonSave>
                            <ButtonLink :href="route('usuario.index')" cor="gray">
                                Cancelar
                            </ButtonLink>
                        </div>
                    </div>
                    <div class="grow p-5 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                        <h6 class="font-bold">Acesso aos Módulos:</h6>
                        <div class="my-3 border-t" ></div>
                        <div v-for="modulo in modulos" class="pb-5">
                            <span class="font-extrabold">{{ modulo.section }}: </span>
                            <span class="italic">{{ modulo.name }}</span>
                            <div class="flex gap-4 pt-1">
                                <label class="flex items-center">
                                    <Checkbox v-model:checked="form.permissao[modulo.chave].index"  />
                                    <span class="ms-2 text-sm text-gray-600">Visualizar</span>
                                </label>
                                <label class="flex items-center">
                                    <Checkbox v-model:checked="form.permissao[modulo.chave].create"  />
                                    <span class="ms-2 text-sm text-gray-600">Cadastrar</span>
                                </label>
                                <label class="flex items-center">
                                    <Checkbox v-model:checked="form.permissao[modulo.chave].edit"  />
                                    <span class="ms-2 text-sm text-gray-600">Alterar</span>
                                </label>
                                <label class="flex items-center">
                                    <Checkbox v-model:checked="form.permissao[modulo.chave].delete"  />
                                    <span class="ms-2 text-sm text-gray-600">Excluir</span>
                                </label>
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
