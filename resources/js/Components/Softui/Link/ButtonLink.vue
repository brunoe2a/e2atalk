<script setup>
import { Link } from '@inertiajs/vue3';
import {onMounted, ref} from "vue";

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    cor: {
        type: String,
    },
});

const classes = ref('')

onMounted(() => {
    if (props.cor === 'emerald'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-emerald-600 to-emerald-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'slate'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-slate-600 to-slate-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'gray'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-gray-600 to-gray-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'zinc'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-zinc-600 to-zinc-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'neutral'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-neutral-600 to-neutral-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'stone'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-stone-600 to-stone-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'red'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-red-600 to-red-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'orange'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-orange-600 to-orange-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'amber'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-amber-600 to-amber-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'yellow'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-yellow-600 to-yellow-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'lime'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-lime-600 to-lime-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'green'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-green-600 to-green-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'teal'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-teal-600 to-teal-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'cyan'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-cyan-600 to-cyan-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'sky'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-sky-600 to-sky-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'indigo'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-indigo-600 to-indigo-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'violet'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-violet-600 to-violet-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'purple'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-purple-600 to-purple-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'fuchsia'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-fuchsia-600 to-fuchsia-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'pink'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-pink-600 to-pink-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else if (props.cor === 'rose'){classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-rose-600 to-rose-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
    else {classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-blue-600 to-blue-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'}
})
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
