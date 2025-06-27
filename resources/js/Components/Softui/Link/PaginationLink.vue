<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
});

const classes = computed(() =>
    props.active
        ? 'py-2 px-3 mr-2 w-auto font-bold text-center text-white uppercase align-middle transition-all duration-300 border rounded-full cursor-default bg-sky-500 border-sky-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 active:opacity-85'
        : 'py-2 px-3 mr-2 w-auto font-bold text-center uppercase align-middle transition-all duration-300 bg-transparent border rounded-full cursor-pointer border-sky-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:bg-sky-500 hover:text-white text-sky-500'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
