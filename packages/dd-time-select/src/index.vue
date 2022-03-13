<script>
import ddIcon from "../../dd-icon";
export default {
    name: "ddTimeSelect",
    props: {
        placeholder: {
            type: String,
        },
        pickerOptions: {
            type: Object,
        },
    },
    data() {
        return {
            aa: "",
        };
    },
    render: function (h) {
        let _this = this;
        return h(
            "div",
            {
                class: ["dd-time-select"],
            },
            [
                h("dd-icon", {
                    class: ["dd-input_prefix"],
                    props: {
                        icon: "icon-ontimeshipment",
                    },
                }),
                h("input", {
                    class: ["dd-time-select_inner"],
                    domProps: {
                        placeholder: _this.placeholder,
                        value: _this.aa,
                    },
                    on: {
                        input(e) {
                            _this.aa = e.target.value;
                        },
                    },
                }),
            ]
        );
    },
    components: {
        ddIcon,
    },
};
</script>

<style lang="less" scoped>
.dd-time-select {
    position: relative;
    display: inline-block;
    .dd-input_prefix {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 5px;
        font-size: 20px;
        color: #c0c4cc;
    }
    .dd-time-select_inner {
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        width: 100%;
        // min-width: 240px;
        height: 40px;
        outline: none;
        padding: 0 15px;
        padding-left: 30px;
        padding-right: 30px;
        cursor: pointer;
        transition: all 0.3s;
        box-sizing: border-box;
        &:focus {
            border-color: #409eff !important;
        }
        &:hover {
            border-color: #c0c4cc;
        }
    }
}
</style>
