<template>
    <div class="alert">
        <span>{{ message }}</span>
    </div>
</template>

<script setup lang="ts">

interface Props {
    message: string
}

defineProps<Props>()

</script>
<style scoped>
.alert {
    width: 400px;
    background-color: rgb(223, 68, 68);
    height: 20px;
    position: absolute;
    bottom: 20px;
    right: 15px;
    border-radius: 5px;
    padding: 25px 20px;
    display: flex;
    align-items: center;
    justify-content: center
}

.alert span {
    color: white;
    font-size: 18px;
}
</style>