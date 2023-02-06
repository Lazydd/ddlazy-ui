import axios from "axios";
import qs from "qs";
const instance = axios.create({
    // baseUrl: "http://",
    // timeout: 30000,
});
let appkey = '' //chatGPT开发者申请的appkey
instance.interceptors.request.use((request) => {
    if (
        request.data &&
        request.headers["Content-Type"] !== "multiple/form-data" &&
        request.headers["Content-Type"] !== "application/json" &&
        (request.headers["Content-Type"] ===
            "application/x-www-form-urlencoded" ||
            request.method === "post")
    ) {
        request.data = qs.stringify(request.data, {
            allowDots: true,
        });
    }
    if (request.method === "get")
        request.params = { ...request.params, time: new Date().getTime() };
    return request;
});

instance.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        throw new Error("网络错误");
    }
);

export { instance };
