const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    // 修改 src 为 examples
    pages: {
        // lintOnSave: false,
        index: {
            entry: "examples/main.js",
            template: "public/index.html",
            filename: "index.html",
        },
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: (config) => {
        config.resolve.alias
            .set("@", resolve("examples"))
            .set("~", resolve("packages"));
        // 把packages和examples加入编译，因为新增的文件默认是不被webpack处理的
        config.module
            .rule("js")
            .include.add(/packages/)
            .end()
            .include.add(/examples/)
            .end()
            .use("babel")
            .loader("babel-loader")
            .tap((options) => {
                // 修改它的选项...
                return options;
            });
    },
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: 'dist/ddlazy-ui/'
};
