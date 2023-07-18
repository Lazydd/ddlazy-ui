import Vue from "vue";
import VueRouter from "vue-router";

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const Home = () => import("../views/Home.vue");
const Index = () => import("../views/Index.vue");
const Guides = () => import("../views/Guides.vue");
const NotFound = () => import("../views/NotFound.vue");
import components from "./components";

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500 })

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
    {
        path: '*',
        component: NotFound,
    }
];

const router = new VueRouter({
    routes,
});
router.afterEach((to, from, next) => {
    NProgress.start()
    if (document.querySelector(".main-box")) {
        document
            .querySelector(".main-box")
            .scrollTo({ behavior: "smooth", top: 0 });
    }
});
router.afterEach(() => {
    NProgress.done()
})
export default router;
