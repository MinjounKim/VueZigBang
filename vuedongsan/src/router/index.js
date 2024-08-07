import { createRouter, createWebHashHistory } from "vue-router";
import OneRoom from "../view/OneRoom.vue";
import FirstPage from "../view/FirstPage.vue";
import ApartPage from "../view/ApartPage.vue";
import VillagePage from "../view/VillagePage.vue";

const routes = [
    {
        path: "/OneRoom",
        name: "OneRoom",
        component: OneRoom,
    },
    {
        path: "/FirstPage",
        name: "FirstPage",
        component: FirstPage,
    },
    {
        path: "/ApartPage",
        name: "ApartPage",
        component: ApartPage,
    },
    {
        path: "/VillagePage",
        name: "VillagePage",
        component: VillagePage,
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;
