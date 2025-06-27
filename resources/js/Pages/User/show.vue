<script setup>
import ApplicationLayout from "@/Layouts/ApplicationLayout.vue";
import FooterApplicationLayout from "@/Layouts/Partials/FooterApplicationLayout.vue";
import ItemBreadcrumb from "@/Components/Softui/Breadcrumb/ItemBreadcrumb.vue";

const props = defineProps({
    user: {},
    integrante: {},
});
</script>

<template>
    <ApplicationLayout :title="user.name">
        <template #breadcrumb>
            <!-- breadcrumb -->
            <ol class="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                <ItemBreadcrumb :href="route('dashboard')">{{ __('sidebar.link.dashboard') }}</ItemBreadcrumb>
                <ItemBreadcrumb :href="route('usuario.index')">Usuários</ItemBreadcrumb>
                <ItemBreadcrumb href="" :active="true">{{ user.name }}</ItemBreadcrumb>
            </ol>
            <h6 class="mb-0 font-bold capitalize">{{ user.name }}</h6>
        </template>

        <div>
            <div class="w-full px-6 mx-auto">
                <div class="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-52 rounded-2xl" style="background-image: url('/assets/imagens/bg-atendimento.png'); background-position-y: 25%">
                    <span class="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-blue-700 to-cyan-300 opacity-60"></span>
                </div>
                <div class="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
                    <div class="flex flex-wrap -mx-3">
                        <div class="flex-none w-auto max-w-full px-3">
                            <div class="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                                <img :src="user.profile_photo_url" alt="profile_image" class="w-full shadow-soft-sm rounded-xl" />
                            </div>
                        </div>
                        <div class="flex-none w-auto max-w-full px-3 my-auto">
                            <div class="h-full">
                                <h5 class="mb-1">{{ user.name }}</h5>
                                <p class="mb-0 font-semibold leading-normal text-sm">{{ user.integrante.canal.nome }} / {{ user.integrante.funcao.nome }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full p-6 mx-auto">
                <div class="flex flex-wrap -mx-3">
                    <div class="w-full max-w-full px-3 lg-max:mt-6 xl:w-8/12">
                        <div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                            <div class="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                                <div class="flex flex-wrap -mx-3">
                                    <div class="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                                        <h6 class="mb-0">Informações do Perfil</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-auto p-4">
                                <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                                    <li class="relative block px-4 py-1 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
                                        <strong class="text-slate-700">Nome:</strong>
                                        {{ user.name }}
                                    </li>
                                    <li class="relative block px-4 py-1 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
                                        <strong class="text-slate-700">CPF:</strong>
                                        {{ user.cpf }}
                                    </li>
                                    <li class="relative block px-4 py-1 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                                        <strong class="text-slate-700">Telefone:</strong>
                                        {{ user.telefone }}
                                    </li>
                                    <li class="relative block px-4 py-1 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                                        <strong class="text-slate-700">E-mail:</strong>
                                        {{ user.email }}
                                    </li>
                                    <li class="relative block px-4 py-1 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                                        <strong class="text-slate-700">Canal:</strong>
                                        {{ user.integrante.canal.nome }}
                                    </li>
                                    <li class="relative block px-4 py-1 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                                        <strong class="text-slate-700">Função:</strong>
                                        {{ user.integrante.funcao.nome }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12">
                        <div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                            <div class="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                                <h6 class="mb-0">Canais de Atendimento</h6>
                            </div>
                            <div class="flex-auto p-4">
                                <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                                    <li v-for="canal in integrante" class="relative block px-4 py-1 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
                                        <strong class="text-slate-700">{{ canal.canal.nome }}:</strong>
                                        {{ canal.funcao.nome }}
                                    </li>
                                </ul>
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
