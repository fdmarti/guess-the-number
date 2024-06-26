<template>
    <button>{{ text }}</button>
</template>

<script setup lang="ts">
interface Props {
    text: string;
}

defineProps<Props>()
</script>
<style scoped>
button {
    padding: 10px 25px;
    border: none;
    border-radius: 5px;
    font-weight: bolder;
    background-color: #4a67b8;
    color: white;
    font-size: 15px;
}

button:hover {
    cursor: pointer;
    opacity: 0.8;
}
</style>
