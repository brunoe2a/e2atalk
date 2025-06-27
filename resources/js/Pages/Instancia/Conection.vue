<template>
    <Head title="Conectar Whatsapp" />

    <div class="min-h-screen flex items-center justify-center bg-slate-100 p-6">
        <div class="bg-white rounded-xl shadow-md p-8 w-full max-w-4xl flex flex-col md:flex-row gap-6">
            <!-- Instruções -->
            <div class="flex-1 space-y-4">
                <ApplicationLogo class="w-64 -ml-3" />
                <h2 class="text-2xl font-semibold">Conectar WhatsApp</h2>
                <p class="text-gray-700">
                    Siga as instruções abaixo:
                </p>
                <ol class="list-decimal list-inside text-gray-800 space-y-2">
                    <li>Abra o WhatsApp no seu celular.</li>
                    <li>
                        Toque em <strong>Mais opções</strong>
                        <span class="inline-block w-5 h-5 bg-gray-200 rounded-full text-center align-middle ml-1">⋮</span>
                        no Android ou em <strong>Configurações</strong>
                        <span class="inline-block w-5 h-5 bg-gray-200 rounded-full text-center align-middle ml-1">⚙️</span>
                        no iPhone
                    </li>
                    <li>
                        Toque em <strong>Dispositivos conectados</strong> e, em seguida, em <strong>Conectar dispositivo</strong>.
                    </li>
                    <li>
                        Aponte seu celular para esta tela para escanear o QR code.
                    </li>
                </ol>
            </div>

            <!-- QR Code ou Spinner -->
            <div class="flex flex-col items-center justify-center min-h-[256px] min-w-[256px]">
                <template v-if="loading">
                    <!-- Spinner -->
                    <svg
                        class="animate-spin h-12 w-12 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                        ></circle>
                        <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                    </svg>
                </template>
                <template v-else>
                    <img :src="qrcodeview" alt="QR Code" class="w-64 h-64" />
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import {Head, Link} from "@inertiajs/vue3";
import ApplicationLogo from "@/Components/old/ApplicationLogo.vue";

const props = defineProps({
    instancia: {},
    qrcode: ''
});

const qrcodeview = ref(props.qrcode);
const countdown = ref(60);
const loading = ref(false);
let timer = null;

const startCountdown = () => {
    countdown.value = 60;

    if (timer) clearInterval(timer);

    timer = setInterval(() => {
        countdown.value--;
        if (countdown.value <= 0) {
            clearInterval(timer);
            connect(props.instancia.id);
        }
    }, 1000);
};

const connect = (id) => {
    loading.value = true;

    axios.get(route('instancia.connect', id))
        .then((res) => {
            setTimeout(() => {
                qrcodeview.value = res.data.qrcode;
                loading.value = false;
                startCountdown();
            }, 2000); // tempo mínimo do spinner (2s)
        })
        .catch((error) => {
            console.log(error);
            loading.value = false;
        });
};

startCountdown();
</script>
