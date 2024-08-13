<template>
    <div>
        <p>ApartPage</p>
        <ApartDetail
            :apartName="apartName"
            @update:apartName[0]="receive($event)"
        />
    </div>
</template>

<script setup>
import ApartDetail from "./ApartDetail.vue";

const apartName = ["aaa"];

const receive = (newValue) => {
    apartName[0] = newValue;
};
</script>

<style></style>
