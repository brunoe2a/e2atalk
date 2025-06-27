<script setup>
import {Head} from "@inertiajs/vue3";
import {ref} from "vue";
import SidebarServiceLayout from "@/Layouts/Partials/SidebarServiceLayout.vue";
import HeaderLateralServiceLayout from "@/Layouts/Partials/HeaderLateralServiceLayout.vue";

const aside = ref(true);
</script>

<template>
    <body>

        <Head :title="__('sidebar.link.service')" />

        <!-- Container principal -->
        <div class="h-screen flex">
            <!-- Menu da lateral -->
            <SidebarServiceLayout :aside="aside" />

            <!-- Barra lateral de contatos -->
            <div class="w-1/4 bg-white border-r flex flex-col">
                <!-- Header da barra lateral -->
                <HeaderLateralServiceLayout v-on:showSidebar="aside = !aside" :aside="aside" />

                <!-- Campo de pesquisa de contato -->
                <div class="p-4 relative">
                    <input type="text" placeholder="Pesquisar..." class="w-full p-2 pl-10 border-none rounded-lg bg-slate-100 text-slate-500 focus:border-sky-500 focus:ring-sky-500">
                    <button class="absolute inset-y-0 left-30 flex items-center pl-3">
                        <!-- Ícone de pesquisa -->
                        <svg class="w-5 h-5 text-slate-500" stroke-width="2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
                <!-- Lista de contatos -->
                <div class="flex-grow overflow-y-auto" v-if="$slots.contatos">
                    <slot name="contatos" />
                </div>
            </div>

            <transition name="route" mode="in-out" appear>
                <!-- Área de mensagens -->
                <div class="flex-grow flex flex-col bg-white relative">
                    <!-- Header da área de mensagens -->
                    <div class="p-4 bg-sky-800 flex items-center justify-between" v-if="$slots.header_mensagens">
                        <slot name="header_mensagens" />
                    </div>

                    <!-- Área de mensagens -->
                    <slot />
                </div>
            </transition>
        </div>
    </body>
</template>

<style>
.route-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}
.route-enter-active,
.route-leave-active {
    transition: all .6s ease-in-out;
}
.route-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>
