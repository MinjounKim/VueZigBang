<template>
    <div class="searchHouse">
        <div class="searchTitle">어떤 집을 찾고 계세요?</div>
        <br /><br /><br />
        <div class="box">
            <div class="subBox">
                <span>아파트</span>
                <span>빌라,투룸+</span>
                <span>원룸</span>
                <span>오피스텔</span>
                <span>상가</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchHouse",
};
</script>

<style>
.searchTitle {
    width: 684px;
    height: 46px;
    font-size: 38px;
    font-weight: bold;
    color: white;
}
.box {
    flex-direction: column;
    width: 574px;
    height: 196px;
}
.subBox {
    display: flex;
    background-color: rgba(3, 20, 45, 0.85);
    border-radius: 8px;
    margin-bottom: 26px;
    height: 40px;
}
.subBox > span {
    flex: 1;
    position: relative;
    height: 40px;
    padding: 8px 8px;
    color: white;
    text-align: center;
    align-items: center;
}
</style>
