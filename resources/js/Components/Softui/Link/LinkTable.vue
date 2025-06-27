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
        ? 'text-xs font-semibold leading-tight text-sky-500'
        : 'text-xs font-semibold leading-tight text-slate-400'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
