<template>
    <div class="searchHouse">
        <div class="searchTitle">어떤 집을 찾고 계세요?</div>
        <br /><br /><br />
        <div class="box">
            <div class="subBox">
                <span
                    v-for="(item, i) in items"
                    :key="item"
                    @click="clickItem(i, items[i][1])"
                    :class="{ active: i == itemIndex }"
                    >{{ items[i][0] }}
                </span>
            </div>
            <div>
                <input type="text" :placeholder="itemContents" />
                <div><img class="searchIc" src="searchIc" /></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchHouse",
    data() {
        return {
            itemIndex: 0,
            itemContents:
                "원하시는 지역명, 지하철역, 단지명(아파트명)을 입력해주세요",
            items: [
                [
                    "아파트",
                    "원하시는 지역명, 지하철역, 단지명(아파트명)을 입력해주세요",
                ],
                ["빌라,투룸+", "원하시는 지역명, 지하철역을 입력해주세요"],
                ["원룸", "원하시는 지역명, 지하철역을 입력해주세요"],
                [
                    "오피스텔",
                    "원하시는 지역명, 지하철역, 오피스텔명을 입력해주세요",
                ],
                ["상가", "원하시는 지역명, 지하철역을 입력해주세요"],
            ],
            searchIc: require("../../assets/img/ic_search.png"),
        };
    },
    methods: {
        clickItem(itemIndex, itemContents) {
            this.itemIndex = itemIndex;
            this.itemContents = itemContents;
        },
    },
};
</script>

<style scoped>
.searchTitle {
    width: 684px;
    height: 46px;
    font-size: 40px;
    font-weight: bold;
    color: white;
    margin: 0 auto;
    text-shadow: 0 0 1in black;
}
.box {
    /* flex-direction: column; */
    width: 574px;
    height: 196px;
    margin: 0 auto;
}
.subBox {
    display: flex;
    background-color: rgba(3, 20, 45, 0.85);
    border-radius: 8px;
    margin-bottom: 26px;
    width: 100%;
    height: 45px;
}
.subBox > span {
    flex: 1;
    position: relative;
    padding: 0 8px 0 8px;
    margin: auto;
    color: white;
    cursor: pointer;
}
.subBox > span.active {
    height: 35px;
    padding-top: 10px;
    border-radius: 8px;
    background-color: white;
    color: rgba(3, 20, 45, 0.85);

    opacity: 1;
    visibility: none;
    transition: all 0.3s ease-in;
}
input {
    width: 100%;
    height: 60px;
    border-radius: 8px;
    background-color: rgba(242, 242, 242, 1);
}
</style>
