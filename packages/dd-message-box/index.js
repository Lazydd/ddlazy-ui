import Vue from "vue";

const ddMessageBox = Vue.extend(require("./src/index.vue").default);

let nId = 1;
let close = null;
const Loading = (container, title, options) => {
    let id = "notice-" + nId++;
    title = title || null;
    container = container || null;
    let { confirmButtonText, callback } = options;

    const instance = new ddMessageBox({
        data: { title, container, confirmButtonText, callback },
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
    Loading[type] = (options, container) => {
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
        Vue.prototype.$alert = Loading;
        Vue.prototype.$loading.close = () => close();
        Vue.loading = Loading;
    },
};
