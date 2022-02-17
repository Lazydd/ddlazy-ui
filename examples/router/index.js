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
const InputNumber = () => import("@/components/InputNumber.vue");
const Select = () => import("@/components/Select.vue");
const Switch = () => import("@/components/Switch.vue");
const Slider = () => import("@/components/Slider.vue");
const Progress = () => import("@/components/Progress.vue");
const Upload = () => import("@/components/Upload.vue");
const Message = () => import("@/components/Message.vue");
const ColorPicker = () => import("@/components/ColorPicker.vue");
const Tooltip = () => import("@/components/Tooltip.vue");
const Pagination = () => import("@/components/Pagination.vue");
const Badge = () => import("@/components/Badge.vue");
const Avatar = () => import("@/components/Avatar.vue");
const Loading = () => import("@/components/Loading.vue");
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
            {
                path: "/component/input-number",
                name: "InputNumber",
                component: InputNumber,
            },
            {
                path: "/component/select",
                name: "Select",
                component: Select,
            },
            {
                path: "/component/switch",
                name: "Switch",
                component: Switch,
            },
            {
                path: "/component/slider",
                name: "Slider",
                component: Slider,
            },
            {
                path: "/component/progress",
                name: "Progress",
                component: Progress,
            },
            {
                path: "/component/upload",
                name: "Upload",
                component: Upload,
            },
            {
                path: "/component/message",
                name: "Message",
                component: Message,
            },
            {
                path: "/component/color-picker",
                name: "ColorPicker",
                component: ColorPicker,
            },
            {
                path: "/component/tooltip",
                name: "Tooltip",
                component: Tooltip,
            },
            {
                path: "/component/pagination",
                name: "Pagination",
                component: Pagination,
            },
            {
                path: "/component/badge",
                name: "Badge",
                component: Badge,
            },
            {
                path: "/component/avatar",
                name: "Avatar",
                component: Avatar,
            },
            {
                path: "/component/loading",
                name: "Loading",
                component: Loading,
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});

export default router;
