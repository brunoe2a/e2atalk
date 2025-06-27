<script setup>
import { ref } from 'vue';
import ButtonPadrao from "@/Components/Softui/Button/ButtonPadrao.vue";

const audioChunks = ref([]);
const mediaRecorder = ref(null);
const audioUrl = ref(null);
const isRecording = ref(false);

// Emitir evento para o pai
const emit = defineEmits(['audioCaptured']);

const startRecording = async () => {
    try {
        // Verificar se o navegador suporta getUserMedia
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            throw new Error('getUserMedia não é suportado neste navegador.');
        }

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

        mediaRecorder.value = new MediaRecorder(stream);

        mediaRecorder.value.ondataavailable = (event) => {
            audioChunks.value.push(event.data);
        };

        mediaRecorder.value.onstop = () => {
            const blob = new Blob(audioChunks.value, { type: 'audio/webm' });
            audioUrl.value = URL.createObjectURL(blob);
            audioChunks.value = []; // Limpa os chunks para a próxima gravação

            // Emitir o áudio para o componente pai
            emit('audioCaptured', blob);
        };

        mediaRecorder.value.start();
        isRecording.value = true;
    } catch (error) {
        console.error('Erro ao acessar o microfone:', error);
        alert(error.message);  // Exibe o erro em uma mensagem para o usuário
    }
};

const stopRecording = () => {
    if (mediaRecorder.value) {
        mediaRecorder.value.stop();
        isRecording.value = false;
    }
};
</script>

<template>
    <div>
        <h1>Gravador de Áudio:</h1>

        <div class="flex gap-4 mt-3">
            <ButtonPadrao @click="startRecording" cor="green" :disabled="isRecording" v-if="!isRecording">Iniciar Gravação</ButtonPadrao>
            <ButtonPadrao @click="stopRecording" cor="red" :disabled="!isRecording" v-if="isRecording">Parar Gravação</ButtonPadrao>
            <div class="flex items-center" v-if="isRecording">
                <svg class="w-6 h-6 mr-2 text-red-700 animate-pulse" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M5 8a1 1 0 0 1 1 1v3a4.006 4.006 0 0 0 4 4h4a4.006 4.006 0 0 0 4-4V9a1 1 0 1 1 2 0v3.001A6.006 6.006 0 0 1 14.001 18H13v2h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2H9.999A6.006 6.006 0 0 1 4 12.001V9a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>
                    <path d="M7 6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6Z"/>
                </svg>
                Gravando
            </div>
        </div>

        <div v-if="audioUrl">
            <h3 class="my-4">Áudio Gravado:</h3>
            <audio :src="audioUrl" controls></audio>
        </div>
    </div>
</template>
