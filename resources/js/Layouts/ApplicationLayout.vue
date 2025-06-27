<script setup>
import SidebarApplicationLayout from "@/Layouts/Partials/SidebarApplicationLayout.vue";
import NavbarApplicationLayout from "@/Layouts/Partials/NavbarApplicationLayout.vue";
import {Head} from "@inertiajs/vue3";

defineProps({
    title: String,
});

</script>

<template>
    <body class="m-0 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500">

        <Head :title="title" />

        <!-- Sidebar -->
        <SidebarApplicationLayout />

        <!-- Main -->
        <main class="flex flex-col justify-between ease-soft-in-out xl:ml-68.5 relative min-h-screen rounded-xl transition-all duration-200">
            <!-- Navbar -->
            <nav class="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start">
                <div class="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                    <nav v-if="$slots.breadcrumb">
                        <slot name="breadcrumb" />
                    </nav>
                    <NavbarApplicationLayout />
                </div>
            </nav>

            <!-- Content -->
            <transition class="grow" name="route" mode="in-out" appear>
                <slot />
            </transition>

            <slot v-if="$slots.footer" name="footer" />
        </main>
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
