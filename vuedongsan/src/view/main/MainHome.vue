<template>
    <div>
        <img class="backImg" :src="img" />
        <SearchHouse class="searchHouse" ></SearchHouse>
    </div>
</template>

<script>
import SearchHouse from "./SearchHouse.vue";

export default {
    name: "MainHome",
    data() {
        return {
            img: require("../../assets/img/zigbangWeb_heroImg.jpg"),
        };
    },
    components: {
        SearchHouse,
    },
    props: {
        title: {
            type: String,
        },
        contents: {
            type: String,
        },
    },
    setup() {
        return {};
    },
};
</script>

<style>
.backImg {
    width: 100%;
    height: 460px;
    margin-top: -9px;
}
.searchHouse {
    position: absolute;
    transform: translate(50%, -110%);
}
</style>
