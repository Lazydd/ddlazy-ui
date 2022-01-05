export default {
    name: "columnbody",
    props: ["vnode"],
    render(h) {
        return h("div", this.vnode.componentOptions.children);
    },
};
