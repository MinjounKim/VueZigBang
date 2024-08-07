<template>
    <div>
        <div class="black-bg" v-if="modal == true">
            <div class="white-bg" @click="modal = false">
                <h4>{{ data[index].modalTitle }}</h4>
                <p>{{ data[index].modatContents }}</p>
            </div>
        </div>


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
    name: "OneRoom",
    data() {
        return {
            index: 0,
            modal: false,
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

.room-img {
    width: 70%;
    margin: 10px 50px;
    margin-top: 50px;
}
</style>
