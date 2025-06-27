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
            <svg xmlns="http://www.w3.org/2000/svg" v-else class="w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
        </span>
        <span v-if="loadSave">Excluindo...</span>
        <slot v-else />
    </button>
</template>
