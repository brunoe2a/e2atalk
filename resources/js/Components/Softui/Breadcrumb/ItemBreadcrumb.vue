<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
});
</script>

<template>
    <li v-if="active" class="text-sm pr-2 capitalize leading-normal text-slate-700" aria-current="page">
        <slot />
    </li>
    <li v-else class="leading-normal pr-2 text-sm">
        <Link class="opacity-50 text-slate-700" :href="href">
            <slot />
        </Link>
    </li>
    <li v-if="!active" class="leading-normal pr-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
    </li>
</template>
