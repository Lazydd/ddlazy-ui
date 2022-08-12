import Vue from "vue";
let time = null
let timer = null

const getPositionSize = (el, prop) => {
    return el === window || el === document
        ? document.documentElement[prop]
        : el[prop];
};

const getValue = (el, key) => {
    return el.getAttribute(`infinite-scroll-${key}`)
}

const attributes = {
    distance: {
        type: Number,
        default: 0
    },
    delay: {
        type: Number,
        default: 200
    },
    disabled: {
        type: Boolean,
        default: false
    }
}
Vue.directive("infinite-scroll", {
    bind: (el, binding) => {
        let { distance, delay } = attributes;
        Object.keys(attributes).map(item => {
            attributes[item].value =
                getValue(el, item)
        })
        time = el.addEventListener("scroll", () => {
            if (!!Boolean(attributes.disabled.value)) return

            if (timer) clearTimeout(timer);
            timer = setTimeout(async () => {
                const scrollBottom = el.scrollTop + getPositionSize(el, 'clientHeight')

                if (el.scrollHeight - scrollBottom <= distance.value) {
                    binding.value && binding.value()
                }

            }, delay.value ? delay.value : delay.default)
        })
    },
    update: (el, bingding) => {
        Object.keys(attributes).map(item => {
            attributes[item].value =
                getValue(el, item)
        })
    },
    unbind: (el, bingding) => {
        el.removeEventListener(time)
        document.removeEventListener(timer)
    }
});
