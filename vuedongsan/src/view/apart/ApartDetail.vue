<template>
    <div>
        <div>{{ props.apartName }}</div>
        <textarea v-model="vo" @change="emits('update:apartName[0]', vo)" />
    </div>
</template>

<script setup>
import { defineProps, defineEmits, onMounted, ref } from "vue";

const props = defineProps(["apartName"]);
const emits = defineEmits(["update:apartName[0]"]);

const vo = ref("");
onMounted(() => {
    vo.value = props.apartName[0];
});
</script>

<style></style>
