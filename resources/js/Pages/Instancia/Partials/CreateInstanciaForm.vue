<script setup>
import { useForm } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';
import Modal from "@/Components/old/Modal.vue";
import InputLabel from "@/Components/old/InputLabel.vue";
import InputError from "@/Components/old/InputError.vue";
import ButtonPadrao from "@/Components/Softui/Button/ButtonPadrao.vue";
import ButtonSave from "@/Components/Softui/Button/ButtonSave.vue";
import InputSoftUi from "@/Components/Softui/Form/InputSoftUi.vue";
import SelectEmpresaFilter from "@/Pages/Instancia/Partials/SelectEmpresaFilter.vue";
import Checkbox from "@/Components/old/Checkbox.vue";

const props = defineProps({
    empresas: {
        type: Object,
        required: true,
    },
    checkAtendimento: {
        type: Boolean,
        required: true,
    },
});

const novaInstancia = ref(false);
const nomeInput = ref(null);

const form = useForm({
    instancia: '',
    campanha: true,
    atendimento: false,
    empresa_id: '',
});

const confirmNovaInstancia = () => {
    novaInstancia.value = true;
    nextTick(() => nomeInput.value.focus());
};

const salvar = () => {
    form.post(route('instancia.store'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => nextTick(() => nomeInput.value.focus()),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    novaInstancia.value = false;
    form.reset();
};
</script>

<template>
    <section class="space-y-6">
        <ButtonPadrao @click="confirmNovaInstancia" cor="green">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            Cadastrar
        </ButtonPadrao>

        <Modal :show="novaInstancia" @close="closeModal" max-width="xl">
            <div class="p-6">
                <h6 class="font-bold">Nova Instância:</h6>

                <div class="my-4" ></div>

                <div class="mb-4">
                    <InputLabel for="instancia" class="text-xs" value="Inatância:" />
                    <InputSoftUi
                        id="instancia"
                        type="text"
                        class="mt-1 block w-full"
                        v-model="form.instancia"
                        required
                        autofocus
                        autocomplete="instancia"
                    />
                    <InputError class="mt-2" :message="form.errors.instancia" />
                </div>

                <div class="mb-4">
                    <InputLabel for="empresa_id" value="Empresa:" />
                    <SelectEmpresaFilter
                        id="empresa_id"
                        class="mt-1"
                        v-model="form.empresa_id"
                        :options="empresas"
                        autocomplete="empresa_id"
                    />
                    <InputError class="mt-2" :message="form.errors.empresa_id" />
                </div>

                <InputLabel for="campanha" value="Onde pretente usar?" />
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.campanha"  />
                    <span class="ms-2 text-sm text-gray-600">Campanha</span>
                </label>
                <label class="flex items-center" v-if="!checkAtendimento">
                    <Checkbox v-model:checked="form.atendimento" :disabled="checkAtendimento" />
                    <span class="ms-2 text-sm text-gray-600">Atendimento</span>
                </label>

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
