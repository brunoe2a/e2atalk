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
            <svg v-else class="w-5 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"/>
            </svg>
        </span>
        <span v-if="loadSave">Iniciando...</span>
        <slot v-else />
    </button>
</template>
