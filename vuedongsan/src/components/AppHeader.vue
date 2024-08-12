<template>
    <div>
        <header class="menu">
            <div class="header-wrapper">
                <ul>
                    <li>
                        <RouterLink class="logoRoute" to="/">
                            <img class="logo" :src="logoImg" />
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink class="route" to="/ApartPage.vue">
                            <span class="title">
                                아파트
                                <span class="subTitle">
                                    <br />매매/전월세/신축분양
                                </span>
                            </span>
                        </RouterLink>
                        <div class="dropDown">
                            <div>매매/전·월세</div>
                            <div>신축분양</div>
                            <div>인구흐름</div>
                        </div>
                    </li>
                    <li>
                        <RouterLink class="route" to="/VillagePage.vue">
                            <span class="title">
                                빌라, 투룸+
                                <span class="subTitle">
                                    <br />신축분양/매매/전월세
                                </span>
                            </span>
                        </RouterLink>
                        <div class="dropDown">
                            <div>빌라, 투룸 찾기</div>
                            <div>찜한 매물</div>
                            <div>빌라 내놓기(매매,전월세)</div>
                        </div>
                    </li>
                    <li>
                        <RouterLink class="route" to="/OneRoom.vue">
                            <span class="title">
                                원룸
                                <span class="subTitle"> <br />전월세</span>
                            </span>
                        </RouterLink>
                        <div class="dropDown">
                            <div>방 찾기</div>
                            <div>찜한 매물</div>
                            <div>방 내놓기(전월세만)</div>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
        <hr />
    </div>
</template>

<script>
export default {
    name: "AppHeader",
    data() {
        return {
            logoImg: require("../assets/img/직방.png"),
        };
    },
};
</script>

<style>
.menu {
    width: 1250px;
    height: 20px;
    background: white;
    padding: 10px;
    display: flex;
    margin-top: 40px;
    align-items: center;
}
.header-wrapper {
    height: 100px;
}
ul {
    list-style: none;
}
li {
    display: block;
    float: left;
    position: relative;
    margin-right: 15px;
    padding: 2px;
}
li:has(.route) {
    width: 200px;
}
.logo {
    height: 32px;
    width: 160px;
}
.route {
    width: 160px;
    color: black;
    margin: -24px 25px;
    float: left;
    text-decoration-line: none;
    text-align: left;
    border: 16px solid white;
}
.title {
    display: block;
    font-size: 17px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: normal;
}
.subTitle {
    height: 17px;
    font-size: 12px;
    color: rgb(34, 34, 34);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.42;
    letter-spacing: normal;
    text-align: top;
}
li div {
    padding: 2px;
    margin-left: 30px;
    text-align: left;
}
.route:hover span {
    color: rgb(241, 82, 33);
}

.dropDown {
    z-index: 100;
    visibility: hidden;
    height: 0;
    width: 180px;
    background-color: white;
    border: 1px solid rgb(0, 0, 0, 0.25);
    color: black;
    margin-top: 60px;
    margin-right: 50px;
}
.dropDown > div {
    text-align: left;
    line-height: 16px;
    font-size: 13px;
    white-space: nowrap;
    padding: 9px 15px;
    margin-left: 0px;
    cursor: pointer;
}
li:hover .dropDown {
    visibility: visible;
    height: auto;
}
.dropDown > div:hover {
    background-color: #fafafa;
}
</style>
