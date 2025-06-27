<script setup>
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import ButtonPadrao from "@/Components/Softui/Button/ButtonPadrao.vue";
import Modal from "@/Components/old/Modal.vue";
import InputError from "@/Components/old/InputError.vue";
import ButtonSave from "@/Components/Softui/Button/ButtonSave.vue";

const props = defineProps({
    lista_id: Number,
});

const novoContato = ref(false);
const isDragging = ref(false);  // Controle de estado de arrastar
const fileInput = ref(null);    // Referência para o input de arquivo

const form = useForm({
    lista_contato_id: props.lista_id,
    file: null,
});

const confirmNovoContato = () => {
    novoContato.value = true;
};

// Função chamada ao soltar o arquivo na área de drag-and-drop
const onDrop = (event) => {
    isDragging.value = false;
    if (event.dataTransfer.files.length) {
        form.file = event.dataTransfer.files[0];
    }
};

// Função chamada quando o arquivo é arrastado sobre a área
const onDragOver = () => {
    isDragging.value = true;
};

// Função chamada quando o arquivo sai da área sem ser solto
const onDragLeave = () => {
    isDragging.value = false;
};

// Função para abrir o seletor de arquivos ao clicar na área
const triggerFileSelect = () => {
    if (fileInput.value) {
        fileInput.value.click();
    }
};

const salvar = () => {
    form.post(route('contato.import'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    novoContato.value = false;
    form.reset();
};
</script>

<template>
    <section class="space-y-6">
        <ButtonPadrao @click="confirmNovoContato" cor="cyan">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
            </svg>
            Importar
        </ButtonPadrao>

        <Modal :show="novoContato" @close="closeModal">
            <div class="p-6">
                <h2 class="text-xl font-medium text-gray-900">
                    Importar Contato
                </h2>

                <hr class="my-4" />

                <div class="mb-5">
                    <!-- Área de arrastar e soltar -->
                    <div
                        class="w-full h-48 border-4 cursor-pointer border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50"
                        @dragover.prevent="onDragOver"
                        @dragleave.prevent="onDragLeave"
                        @drop.prevent="onDrop"
                        @click="triggerFileSelect"
                        :class="{
                          'border-blue-500 bg-blue-50': isDragging,
                          'border-gray-300': !isDragging
                        }"
                    >
                        <p class="text-gray-500" v-if="!form.file">Arraste e solte um arquivo aqui ou clique para selecionar</p>
                        <p class="text-green-600" v-else>{{ form.file.name }}</p>
                    </div>
                    <!-- Input padrão para upload -->
                    <input
                        v-show="false"
                        ref="fileInput"
                        @input="form.file = $event.target.files[0]"
                        id="file_input"
                        type="file"
                    >
                    <progress v-if="form.progress" :value="form.progress.percentage" class="w-full bg-green-600 rounded-full h-2.5 my-3" max="100">
                        {{ form.progress.percentage }}%
                    </progress>
                    <InputError class="mt-2" :message="form.errors.file" />
                </div>

                <div class="mt-6 flex justify-end">
                    <ButtonPadrao @click="closeModal" cor="light">
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

