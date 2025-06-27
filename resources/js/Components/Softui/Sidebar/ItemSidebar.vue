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
    },
});

const classesLink = computed(() =>
    props.active
        ? 'shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700'
        : ''
);

const classesIcon = computed(() =>
    props.active
        ? 'bg-gradient-to-tl from-sky-600 to-cyan-400 text-white'
        : 'bg-white'
);
</script>

<template>
    <li class="mt-0.5 w-full">
        <Link :href="href" :class="classesLink" class="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 hover:scale-105 transition ease-in-out duration-300">
            <div v-if="$slots.icon" :class="classesIcon" class="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <slot name="icon" />
            </div>
            <span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                <slot />
            </span>
        </Link>
    </li>
</template>
