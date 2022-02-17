import Vue from "vue";

const ddLoading = Vue.extend(require("./src/index.vue").default);

let nId = 1;
let close = null;
const Loading = (options) => {
    let id = "notice-" + nId++;

    options = options || {};
    if (typeof options === "string") {
        //如果只传入字符串，将其设置为显示的信息
        options = {
            text: options, //这里的loading就是loading.vue中data中的message
        };
    }

    const instance = new ddLoading({
        data: options,
    });
    instance.id = id;
    instance.vm = instance.$mount();
    close = instance.vm.close;
    instance.vm.visible = true; //这里修改loading.vue数据中的visible,这样loading组件就显示出来
    instance.dom = instance.vm.$el; //获取到本实例的dom元素
    document.body.appendChild(instance.dom); // 将dom插入body
    instance.dom.style.zIndex = nId + 1001; // 后插入的Notice组件z-index加一，保证能盖在之前的上面
    // instance.dom.style.top = -500 + "px";

    return instance.vm;
};
["service"].forEach((type) => {
    //同element-ui一样，在给Loading绑定四个方法，直接调用
    Loading[type] = (options) => {
        if (typeof options === "string") {
            options = {
                text: options,
            };
        }
        options.type = type;
        return Loading(options);
    };
});

export default {
    text: Loading,
    install(Vue) {
        Vue.prototype.$loading = Loading;
        Vue.prototype.$loading.close = () => close();
        Vue.loading = Loading;
    },
};
