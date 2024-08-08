import { createRouter, createWebHashHistory } from "vue-router";
import OneRoom from "../view/oneRoom/OneRoom.vue";
import MainLogo from "../view/main/MainLogo.vue";
import ApartPage from "../view/apart/ApartPage.vue";
import VillagePage from "../view/village/VillagePage.vue";

const routes = [
    {
        path: "/",
        name: "MainLogo",
        component: MainLogo,
    },
    {
        path: "/OneRoom.vue",
        name: "OneRoom",
        component: OneRoom,
    },
    {
        path: "/ApartPage.vue",
        name: "ApartPage",
        component: ApartPage,
    },
    {
        path: "/VillagePage.vue",
        name: "VillagePage",
        component: VillagePage,
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: routes,
});

export default router;
