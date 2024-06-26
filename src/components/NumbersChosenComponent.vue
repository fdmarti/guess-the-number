<template>
    <p class="results">
        <span v-for="(numbers, index) in numberSelected" :key="index">{{ numbers }}</span>
    </p>
</template>

<script setup lang="ts">

interface Props {
    numberSelected: Number[]
}

defineProps<Props>()
</script>