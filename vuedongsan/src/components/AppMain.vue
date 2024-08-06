<template>
    <div>
        <div class="black-bg" v-if="modal == true">
            <div class="white-bg" @click="modal = false">
                <h4>{{ data[index].modalTitle }}</h4>
                <p>{{ data[index].modatContents }}</p>
            </div>
        </div>

        <div class="menu">
            <a v-for="i in menu" :key="i">{{ i }}</a>
        </div>
        <br />
        <hr />
        <br />

        <div v-for="(d, i) in data" :key="d">
            <img
                @click="
                    index = i;
                    modal = true;
                "
                class="room-img"
                :src="d.imgs"
            />
            <h4>{{ d.products }}</h4>
            <p>{{ d.price }}</p>
        </div>
    </div>
</template>

<script>
import datas from "../assets/data";

export default {
    name: "AppMaiN",
    data() {
        return {
            index: 0,
            modal: false,
            menu: ["HOME", "SHOP", "ABOUT"],
            data: datas,
        };
    },
    method: {},
    components: {},
};
</script>

<style>
body {
    margin: 0;
}
div {
    box-sizing: border-box;
    text-align: center;
}
.black-bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
}
.white-bg {
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 20px;
}

.menu {
    background: darkslateblue;
    padding: 15px;
    border-radius: 5px;
}
.menu a {
    color: white;
    padding: 10px;
    margin: 0 100px;
}

.room-img {
    width: 70%;
    margin: 10px 50px;
    margin-top: 50px;
}
</style>
