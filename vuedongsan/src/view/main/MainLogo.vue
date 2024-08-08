<template>
    <div>
        <MainHome :title="title" :contents="contents"></MainHome>
    </div>
</template>

<script>
import MainHome from "./MainHome.vue";
import { ref } from "vue";

const title = ref("main page used props");
const contents = ref("main page contents");

export default {
    name: "MainLogo",

    components: {
        MainHome,
    },
    setup() {
        return { title, contents };
    },
};
</script>

<style></style>
