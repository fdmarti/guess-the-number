<template>
    <section class="hint-title">
        <h3>Chosen numbers:</h3>
        <span v-if="message">{{ message }}</span>
    </section>
</template>

<script setup lang="ts">
interface Props {
    message: string;
}

defineProps<Props>()
</script>