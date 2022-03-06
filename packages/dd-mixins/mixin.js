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
        multipleChoice(arr, name) {
            let newArr = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr.indexOf(name) == -1) {
                    newArr = [...arr, name];
                    break;
                } else {
                    newArr = arr.filter((item) => item !== name);
                    break;
                }
            }
            return newArr;
        },
    },
};
export default mixin;
