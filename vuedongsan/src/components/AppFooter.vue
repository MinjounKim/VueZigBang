<template>
    <div class="footerDiv">
        <div v-for="i in 6" :key="i"><br /></div>
        <hr />
        <br />
        <span
            >회사소개 |채용정보 |이용약관 |개인정보 처리방침 |위치기반 서비스
            이용약관 |중개사 사이트 바로가기</span
        >
        <br />
        <br />
        <span
            >상호 : (주)직방 | 대표 : 안성우 | 사업자등록번호:
            120-87-61559</span
        >
        <br />
        <span
            >주소 : 서울특별시 강남구 영동대로 731, 지하 2층 (청담동,
            신영빌딩)(우 : 06072)</span
        >
        <br />
        <span>통신판매업 신고번호 : 제2021-서울강남-06358호</span>
        <br />
        <span
            >서비스 이용문의: 1661-8734 | 이메일 : cs@zigbang.com | 팩스
            :02-568-4908</span
        >
        <br />
        <span
            >서비스제휴문의 : partnership@zigbang.com | 분양광고 문의
            :ad@zigbang.com</span
        >
        <br />
    </div>
</template>

<script>
export default {
    name: "AppFooter",
};
</script>

<style>
.footerDiv > span {
    font-size: 13px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -15px;
}
</style>
