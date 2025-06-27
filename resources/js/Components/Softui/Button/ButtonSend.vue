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
classes.value = 'ml-4 p-2 bg-green-500 text-white rounded-lg transition ease-in-out duration-300 hover:scale-110'

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
            <svg v-if="loadSave"  class="animate-spin ml-1 mr-2 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <svg v-else class="w-6 h-6 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z" clip-rule="evenodd"/>
            </svg>
        </span>
        <slot />
    </button>
</template>
