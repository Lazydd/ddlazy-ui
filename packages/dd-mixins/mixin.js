const mixin = {
    methods: {
        move(e, node, width, height) {
            let left = e.clientX - node.getBoundingClientRect().left;
            let top = e.clientY - node.getBoundingClientRect().top;
            if (left > width) left = width;
            if (left < 0) left = 0;
            if (top > height) top = height;
            if (top < 0) top = 0;
            let radiox = (parseFloat(left) / parseFloat(width)).toFixed(6);
            let radioy = (parseFloat(top) / parseFloat(height)).toFixed(6);
            return {
                left,
                top,
                radiox,
                radioy,
            };
        },
    },
};
export default mixin;
