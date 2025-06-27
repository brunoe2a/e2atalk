<template>
    <div class="relative">
        <input
            type="text"
            v-model="searchQuery"
            @focus="isOpen = true"
            @input="filterOptions"
            placeholder="Selecione uma opção"
            class="w-full border-gray-300 focus:border-blue-400 focus:ring-blue-400 rounded-md shadow-sm"
        />

        <div
            v-if="isOpen && filteredOptions.length > 0"
            class="w-full bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-y-auto"
        >
            <ul>
                <li
                    v-for="option in filteredOptions"
                    :key="option.id"
                    @click="selectOption(option)"
                    class="p-2 hover:bg-gray-200 cursor-pointer"
                >
                    {{ option.nome }}
                </li>
            </ul>
        </div>

        <div
            v-if="isOpen && filteredOptions.length === 0"
            class="w-full bg-white border border-gray-300 rounded-md mt-1 p-2 text-gray-500"
        >
            Nenhuma opção encontrada
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue';

const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    selecao: {
        type: Object,
    },
});

const model = defineModel({
    type: String,
    required: true,
});

const searchQuery = ref('');
const isOpen = ref(false);
const filteredOptions = ref([...props.options]);

const filterOptions = () => {
    filteredOptions.value = props.options.filter(option =>
        option.nome.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
};

// Atualizar as opções filtradas caso as props.options mudem
watch(() => props.options, (newOptions) => {
    filteredOptions.value = newOptions;
});

const selectOption = (option) => {
    model.value = option.id;
    searchQuery.value = option.nome;
    isOpen.value = false;
};

onMounted(() => {
    if(props.selecao){
        model.value = props.selecao.id;
        searchQuery.value = props.selecao.nome;
    }
})
</script>
