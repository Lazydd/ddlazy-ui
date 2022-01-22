import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/Home.vue");
const Quickstart = () => import("@/components/Quickstart.vue");
const Layout = () => import("@/components/Layout.vue");
const Icon = () => import("@/components/Icon.vue");
const Button = () => import("@/components/Button.vue");
const Link = () => import("@/components/Link.vue");
const Table = () => import("@/components/Table.vue");
const Tag = () => import("@/components/Tag.vue");
const Radio = () => import("@/components/Radio.vue");
const Checkbox = () => import("@/components/Checkbox.vue");
const Input = () => import("@/components/Input.vue");
Vue.use(VueRouter);

const routes = [
    {
        path: "",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/component/quickstart",
                name: "Quickstart",
                component: Quickstart,
            },
            {
                path: "/component/layout",
                name: "Layout",
                component: Layout,
            },
            {
                path: "/component/icon",
                name: "Icon",
                component: Icon,
            },
            {
                path: "/component/button",
                name: "Button",
                component: Button,
            },
            {
                path: "/component/link",
                name: "Link",
                component: Link,
            },
            {
                path: "/component/table",
                name: "Table",
                component: Table,
            },
            {
                path: "/component/tag",
                name: "Tag",
                component: Tag,
            },
            {
                path: "/component/radio",
                name: "Radio",
                component: Radio,
            },
            {
                path: "/component/checkbox",
                name: "Checkbox",
                component: Checkbox,
            },
            {
                path: "/component/input",
                name: "Input",
                component: Input,
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});

export default router;
