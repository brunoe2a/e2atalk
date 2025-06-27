<script setup>
import { useForm } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';
import ButtonTable from "@/Components/Softui/Button/ButtonTable.vue";
import Modal from "@/Components/old/Modal.vue";
import InputLabel from "@/Components/old/InputLabel.vue";
import InputError from "@/Components/old/InputError.vue";
import ButtonPadrao from "@/Components/Softui/Button/ButtonPadrao.vue";
import ButtonSave from "@/Components/Softui/Button/ButtonSave.vue";
import InputSoftUi from "@/Components/Softui/Form/InputSoftUi.vue";

const props = defineProps({
    campanha: {
        type: Object,
        required: true,
    },
});

const novoUsuario = ref(false);

const form = useForm({
    id: props.campanha.id,
    nome: props.campanha.nome,
    descricao: props.campanha.descricao,
    t_inicial: props.campanha.t_inicial,
    t_final: props.campanha.t_final,
    tempo_pausa: props.campanha.tempo_pausa,
    quat_pausa: props.campanha.quat_pausa,
    lista_contato_id: props.campanha,
});

const confirmNovoUsuario = () => {
    novoUsuario.value = true;
};

const salvar = () => {
    form.post(route('usuario.edit.password'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    novoUsuario.value = false;
    form.reset();
};
</script>

<template>
    <section class="space-y-6">
        <ButtonTable @click="confirmNovoUsuario">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 transition ease-in-out duration-300 hover:scale-125">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
        </ButtonTable>

        <Modal :show="novoUsuario" @close="closeModal" max-width="sm">
            <div class="p-6">
                <h6 class="font-bold">Alterar a Senha: {{ campanha.nome }}</h6>

                <div class="my-4" ></div>

                <div>
                    <InputLabel for="password" class="text-xs" value="Senha:" />
                    <InputSoftUi
                        id="password"
                        type="password"
                        class="mt-1 block w-full"
                        v-model="form.password"
                        required
                        autofocus
                        autocomplete="password"
                    />
                    <InputError class="mt-2" :message="form.errors.password" />
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
