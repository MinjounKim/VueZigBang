<template>
    <div class="mainHome">
        <div class="mainImg">
            <img class="mainBackImg" :src="img" />
        </div>

        <SearchHouse class="searchHouse"></SearchHouse>
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
.mainHome {
    width: 100%;
    height: 100%;
}
.mainImg{
    display: flex;
    width: 100%;
    height: 500px;
    overflow:hidden;
    margin:-9px auto;
}
.mainBackImg {
    object-fit: cover;
    width: 100%;
}
.searchHouse {
    position: relative;
    margin: -320px auto;
}
</style>
