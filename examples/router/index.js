import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/Home.vue");
const Index = () => import("../views/Index.vue");
const Guides = () => import("../views/Guides.vue");
import components from "./components";

Vue.use(VueRouter);

const routes = [
    {
        path: "",
        component: Index,
        children: [
            {
                path: "",
                name: "Home",
                component: Home,
                children: [
                    ...components
                ],
            },
            {
                path: "/guide/design",
                name: "Guides",
                component: Guides,
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});
router.afterEach((to, from, next) => {
    if (document.querySelector(".main-box")) {
        document
            .querySelector(".main-box")
            .scrollTo({ behavior: "smooth", top: 0 });
    }
});
export default router;
