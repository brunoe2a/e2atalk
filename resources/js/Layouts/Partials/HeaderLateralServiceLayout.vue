<script setup>
import ApplicationLogo from "@/Components/old/ApplicationLogo.vue";

defineProps(['aside'])
</script>

<template>
    <div class="h-20 px-4 pt-3 flex items-center justify-between">
        <ApplicationLogo class="pr-9 h-12" />
        <button @click="$emit('showSidebar')" class="p-2 bg-gray-100 rounded-full">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                    :class="{
                                            hidden: aside,
                                            'inline-flex': !aside,
                                        }"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                    :class="{
                                            hidden: !aside,
                                            'inline-flex': aside,
                                        }"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>
    </div>
</template>

<style scoped>

</style>
