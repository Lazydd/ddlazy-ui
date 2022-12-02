/*
 * @Author: Lazydd ddlazy@qq.com
 * @Date: 2022-11-15 12:13:22
 * @LastEditors: Lazydd ddlazy@qq.com
 * @LastEditTime: 2022-12-02 10:58:02
 * @FilePath: \ddlazy-ui\examples\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

import ddlazyui from '../packages/index'
import '../packages/css/global.less'


Vue.use(VueHighlightJS)
Vue.use(ddlazyui)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
