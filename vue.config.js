const path = require("path");

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production';

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    configureWebpack: config => {
        const plugins = [];
        if (isProduction) {
            plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        output: {
                            comments: false, // 去掉注释
                        },
                        warnings: false,
                        compress: {
                            drop_console: true,
                            drop_debugger: false,
                            pure_funcs: ['console.log']//移除console
                        }
                    }
                })
            )
        }
    },

    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // 修改 src 为 examples
    pages: {
        // lintOnSave: false,
        index: {
            entry: "examples/main.js",
            template: "public/index.html",
            filename: "index.html",
        },
    },
    devServer: {
		proxy: {
			'/fastboot': {
				target: 'http://127.0.0.1:8888',
				secure: false
			}
		},
		// 跨域
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
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
