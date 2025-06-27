<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String,
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <div class="flex md:mr-4 w-full items-center">
        <input
            ref="input"
            class="border-gray-300 h-8 w-full pr-9 text-sm focus:border-sky-500 focus:ring-sky-500 rounded-lg shadow-sm"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >
        <svg fill="none" class="w-4 font-black text-gray-300 -ml-8" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
        </svg>
    </div>
</template>
