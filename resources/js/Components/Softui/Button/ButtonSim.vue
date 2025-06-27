<script setup>
import {ref, watch} from "vue";
import {usePage} from "@inertiajs/vue3";

const page = usePage()

const props = defineProps({
    icon: {
        type: Boolean,
        default: true,
    },
});

const loadSave = ref(false)
const classes = ref('')
classes.value = 'h-8 px-3 rounded-lg bg-gradient-to-tl from-green-600 to-green-300 hover:scale-105 text-white font-semibold text-sm flex justify-center items-center transition ease-in-out duration-300'
const buttomSave = document.getElementById("buttomSave");

watch(
    () => page.props.errors,
    () => {
        if (page.props.errors) {
            notSave()
        } else {
            save()
        }
    }
);
const save = () => {
    console.log(page.props.errors)
    loadSave.value = true
}
const notSave = () => {
    loadSave.value = false
}

</script>

<template>
    <button type="submit" :class="classes" @click="save" :disabled="loadSave">
        <span v-if="icon">
            <svg v-if="loadSave"  class="animate-spin ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" v-else class="w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
            </svg>
        </span>
        <span v-if="loadSave">Processando...</span>
        <slot v-else />
    </button>
</template>
