<template>
    <div class="appDiv">
        <AppHeader class="AppHeader"></AppHeader>
        <AppFooter class="AppFooter"></AppFooter>
        <RouterView></RouterView>
    </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
    name: "App",
    components: {
        AppHeader,
        AppFooter,
    },
};
</script>

<style scoped>
.appDiv {
    position: relative;
    height: 90%;
}
.AppFooter {
    position: absolute;
    width: 100%;
    height: 10%;
    top: 100%;
}
</style>
