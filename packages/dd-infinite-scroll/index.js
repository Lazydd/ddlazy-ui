import Vue from "vue";

const ddInfiniteScroll = Vue.extend(require("./src/index.vue").default);

let nId = 1;
const InfiniteScroll = (options) => {
    let id = "notice-" + nId++;

    options = options || {};
    if (typeof options === "string") {
        //如果只传入字符串，将其设置为显示的信息
        options = {
            text: options, //这里的InfiniteScroll就是InfiniteScroll.vue中data中的message
        };
    }

    const instance = new ddInfiniteScroll({
        data: options,
    });
    instance.id = id;
    instance.vm = instance.$mount();
    instance.vm.visible = true; //这里修改InfiniteScroll.vue数据中的visible,这样InfiniteScroll组件就显示出来

    instance.dom = instance.vm.$el; //获取到本实例的dom元素
    // instance.dom.style.top = -500 + "px";
    return instance.vm;
};

Vue.directive("infinite-scroll", {
    inserted: (el, binding) => {
        binding.value &&
            InfiniteScroll({
                background: "",
                spinner: "",
                text: "InfiniteScroll",
                type: "service",
                visible: "true",
            });
    },
    update: (el, bingding) => {

    },
});

export default {
    text: InfiniteScroll,

    install(Vue) {
        Vue.InfiniteScroll = InfiniteScroll;
    },
};
