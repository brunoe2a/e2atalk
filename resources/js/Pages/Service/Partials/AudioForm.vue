<script setup>
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import ButtonPadrao from "@/Components/Softui/Button/ButtonPadrao.vue";
import Modal from "@/Components/old/Modal.vue";
import InputError from "@/Components/old/InputError.vue";
import ButtonSave from "@/Components/Softui/Button/ButtonSave.vue";
import InputLabel from "@/Components/old/InputLabel.vue";
import InputSoftUi from "@/Components/Softui/Form/InputSoftUi.vue";
import AudioGravador from "@/Pages/Service/Partials/AudioGravador.vue";

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

const anexarAudio = ref(false);
const isDragging = ref(false);  // Controle de estado de arrastar
const fileInput = ref(null);    // Referência para o input de arquivo
const emit = defineEmits(['closeAnexo']);

const form = useForm({
    sessao_id: props.sessao_id,
    contato_id: props.contato_id,
    arquivo: null,
    audio: null,
});

const handleAudioCaptured = (audio) => {
    form.audio = audio;
};

const confirmAnexoAudio = () => {
    anexarAudio.value = true;
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
    form.post(route('service.messages.sendAudio'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    anexarAudio.value = false;
    emit('closeAnexo');
    form.reset();
};
</script>

<template>
    <section class="space-y-6">
        <li @click="confirmAnexoAudio" class="flex py-2 items-center transition duration-300 hover:text-sky-500 hover:cursor-pointer">
            <svg class="w-6 h-6 text-emerald-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z"/>
                <path fill-rule="evenodd" d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z" clip-rule="evenodd"/>
            </svg>
            <span class="ml-3">Audio</span>
        </li>

        <Modal :show="anexarAudio" @close="closeModal">
            <div class="p-6">
                <h2 class="text-xl font-medium text-gray-900">
                    Anexar ou Gravar Audio
                </h2>

                <hr class="my-4" />

                <div class="mb-5">
                    <!-- Área de arrastar e soltar -->
                    <div
                        class="w-full h-20 border-4 cursor-pointer border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50"
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

                <AudioGravador @audioCaptured="handleAudioCaptured" />

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

