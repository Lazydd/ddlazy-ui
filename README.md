# ddlazy-ui

<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="MIT"></a>
<a href="https://github.com/Lazydd"><img src="https://img.shields.io/badge/github-Lazydd-brightgreen.svg" alt="github"></a>
<a href="https://github.com/facebook/react"><img src="https://img.shields.io/badge/npm-%5E2.7.14-blue" alt="react"></a>

[预览地址](https://ddlazy.cn/)

## Description

```
该分支将vue升级为V2.7.14，使用yarn install来安装依赖，请勿使用npm来安装依赖，新的组件将会使用setup来写，不知道为啥ts用不了，装了也没用，暂时删了
```

## Project setup

```
npm install ddLazy-ui
```

### Quick Start

```
import Vue from 'vue'
import ddlazyui from 'ddlazy-ui'
import 'ddlazy-ui/lib/ddlazy-ui.css'

Vue.use(ddlazyui)

// or
import {
  Select,
  Button
  // ...
} from 'ddlazy-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```

## Browser Support

Modern browsers and Internet Explorer 10+.

### NPM

[NPM](https://www.npmjs.com/package/ddlazy-ui)

### LICENSE

[MIT](https://github.com/ElemeFE/element/blob/dev/LICENSE)
