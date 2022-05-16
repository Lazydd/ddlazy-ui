import Vue from "vue";

const ddMessageBox = Vue.extend(require("./src/index.vue").default);

let nId = 1;
const MessageBoxShow = (container, title, options) => {
    let { dd_resolve, dd_reject } = options;
    let id = "notice-" + nId++;
    title = title || null;
    container = container || null;
    const instance = new ddMessageBox({
        data: {
            title,
            container,
            ...options,
        },
        methods: {
            confirm(tips) {
                dd_resolve ? dd_resolve(tips) : null;
            },
            cancel(tips) {
                dd_reject ? dd_reject(tips) : null;
            },
        },
    });

    instance.id = id;
    instance.vm = instance.$mount();
    close = instance.vm.close;
    instance.vm.visible = true; //这里修改MessageBox.vue数据中的visible,这样MessageBox组件就显示出来
    instance.dom = instance.vm.$el; //获取到本实例的dom元素
    document.body.appendChild(instance.dom); // 将dom插入body
    instance.dom.style.zIndex = nId + 1001; // 后插入的Notice组件z-index加一，保证能盖在之前的上面
    // instance.dom.style.top = -500 + "px";

    return instance.vm;
};

const MessageBox = (container, title, options) => {
    let obj = {}
    return new Promise((dd_resolve, dd_reject) => {
        if (!options.callback) obj = { dd_resolve, dd_reject }
        MessageBoxShow(container, title, { ...options, ...obj });
    });
};

export default {
    text: MessageBox,
    install(Vue) {
        Vue.prototype.$alert = MessageBoxShow;
        Vue.prototype.$confirm = MessageBox;
        Vue.MessageBox = MessageBox;
    },
};
