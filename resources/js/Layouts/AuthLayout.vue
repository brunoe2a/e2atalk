<script setup>
import FooterAuthLayout from "@/Layouts/Partials/FooterAuthLayout.vue";
</script>

<template>
    <body class="m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500">
        <main class="mt-0 transition-all duration-200 ease-soft-in-out">
            <slot />
        </main>

        <FooterAuthLayout />
    </body>
</template>
