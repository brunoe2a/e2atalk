<script setup>
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import ButtonPadrao from "@/Components/Softui/Button/ButtonPadrao.vue";
import Modal from "@/Components/old/Modal.vue";
import InputError from "@/Components/old/InputError.vue";
import ButtonSave from "@/Components/Softui/Button/ButtonSave.vue";
import InputLabel from "@/Components/old/InputLabel.vue";
import InputSoftUi from "@/Components/Softui/Form/InputSoftUi.vue";

const props = defineProps({
    sessao_id: {
        type: Number,
        required: true,
    },
    contato_id: {
        type: Number,
        required: true,
    },
});

const anexarVideo = ref(false);
const isDragging = ref(false);  // Controle de estado de arrastar
const fileInput = ref(null);    // Referência para o input de arquivo
const emit = defineEmits(['closeAnexo']);

const form = useForm({
    sessao_id: props.sessao_id,
    contato_id: props.contato_id,
    caption: '',
    arquivo: null,
});

const confirmAnexoVideo = () => {
    anexarVideo.value = true;
};

// Função chamada ao soltar o arquivo na área de drag-and-drop
const onDrop = (event) => {
    isDragging.value = false;
    if (event.dataTransfer.files.length) {
        form.arquivo = event.dataTransfer.files[0];
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
    form.post(route('service.messages.sendFile'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    anexarVideo.value = false;
    emit('closeAnexo');
    form.reset();
};
</script>

<template>
    <section class="space-y-6">
        <li @click="confirmAnexoVideo" class="flex py-2 items-center transition duration-300 hover:text-sky-500 hover:cursor-pointer">
            <svg class="w-6 h-6 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M19.003 3A2 2 0 0 1 21 5v2h-2V5.414L17.414 7h-2.828l2-2h-2.172l-2 2H9.586l2-2H9.414l-2 2H3V5a2 2 0 0 1 2-2h14.003ZM3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Zm2-2.414L6.586 5H5v1.586Zm4.553 4.52a1 1 0 0 1 1.047.094l4 3a1 1 0 0 1 0 1.6l-4 3A1 1 0 0 1 9 18v-6a1 1 0 0 1 .553-.894Z" clip-rule="evenodd"/>
            </svg>
            <span class="ml-3">Vídeo</span>
        </li>

        <Modal :show="anexarVideo" @close="closeModal">
            <div class="p-6">
                <h2 class="text-xl font-medium text-gray-900">
                    Anexar Vídeo
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
                        <p class="text-gray-500" v-if="!form.arquivo">Arraste e solte um arquivo aqui ou clique para selecionar</p>
                        <p class="text-green-600" v-else>{{ form.arquivo.name }}</p>
                    </div>
                    <!-- Input padrão para upload -->
                    <input
                        v-show="false"
                        ref="fileInput"
                        @input="form.arquivo = $event.target.files[0]"
                        id="file_input"
                        type="file"
                    >
                    <progress v-if="form.progress" :value="form.progress.percentage" class="w-full bg-green-600 rounded-full h-2.5 my-3" max="100">
                        {{ form.progress.percentage }}%
                    </progress>
                    <InputError class="mt-2" :message="form.errors.arquivo" />
                </div>

                <div class="mb-4">
                    <input
                        placeholder="Digite uma legenda..."
                        v-model="form.caption"
                        class="w-full h-12 px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-500 focus:border-sky-500 focus:ring-sky-500"
                    />
                    <InputError class="mt-2" :message="form.errors.caption" />
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
                    >Enviar</ButtonSave>
                </div>
            </div>
        </Modal>
    </section>
</template>

