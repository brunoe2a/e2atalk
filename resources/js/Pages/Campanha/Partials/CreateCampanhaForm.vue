<script setup>
import { useForm } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';
import Modal from "@/Components/old/Modal.vue";
import InputLabel from "@/Components/old/InputLabel.vue";
import InputError from "@/Components/old/InputError.vue";
import ButtonPadrao from "@/Components/Softui/Button/ButtonPadrao.vue";
import ButtonSave from "@/Components/Softui/Button/ButtonSave.vue";
import InputSoftUi from "@/Components/Softui/Form/InputSoftUi.vue";
import SelectListaFilter from "@/Pages/Campanha/Partials/SelectListaFilter.vue";

const props = defineProps({
    listas: {
        type: Object,
        required: true,
    },
});

const novaCampanha = ref(false);
const nomeInput = ref(null);

const form = useForm({
    nome: '',
    descricao: '',
    t_inicial: 20,
    t_final: 30,
    tempo_pausa: 5,
    quat_pausa: 500,
    lista_contato_id: '',
});

const confirmNovaCampanha = () => {
    novaCampanha.value = true;
    nextTick(() => nomeInput.value.focus());
};

const salvar = () => {
    form.post(route('campanha.store'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => nextTick(() => nomeInput.value.focus()),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    novaCampanha.value = false;
    form.reset();
};
</script>

<template>
    <section class="space-y-6">
        <ButtonPadrao @click="confirmNovaCampanha" cor="green">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            Cadastrar
        </ButtonPadrao>

        <Modal :show="novaCampanha" @close="closeModal" max-width="xl">
            <div class="p-6">
                <h6 class="font-bold">Nova Campanha:</h6>

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

                <div class="mb-4">
                    <InputLabel for="lista_contato" value="Lista de Contatos:" />
                    <SelectListaFilter
                        id="lista_contato"
                        class="mt-1"
                        v-model="form.lista_contato_id"
                        :options="listas"
                        autocomplete="lista_contato"
                    />
                    <InputError class="mt-2" :message="form.errors.lista_contato_id" />
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
    </section>
</template>
