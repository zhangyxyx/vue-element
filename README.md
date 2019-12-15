

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 初始化项目
前提安装node（8以上）
创建一个文件夹
打开git->npm install vue安装完成之后-》创建在git中输入npm create 项目名称安装完成-》在创建文件夹上面打开git输入npm run serve
完成

### 
1. 引入插件，并且在全局都可以引入 
在main.js中输入
```
import echarts from 'echarts'
Vue.prototype.$echarts = echarts//将插件挂载到Vue原型上面
```
2. 引入文件和样式
import Main from 'main.js'
<style scoped></style>

3. 调试vue
下载vue devtool

4. vuex
(1) 在main.js中引入store文件夹，将store引入到main.js中
```
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
```
(2) 创建store文件夹，并且在里面新建一个index.js文件 还有创建一个module文件夹里面放设置组件的状态js文件
(3) 在组件状态js文件中，基本结构是
state 基础数据
getters 可以获取状态
actions 提交mutations,用commit
mutations  更改状态
export default 输出函数
(4) store文件夹中index.js文件
引入vue vuex还有组件的状态文件，将vuex挂载到vue中
```
new Vuex.Store({
    modules:{
        组件状态js文件
    }
})
```
(5) 组件文件
获取store中的状态
```
{{now}}
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters('组件状态js文件',{
            now:'nowstate'//nowstate就是组件状态js文件中的getters的json中的函数名字
        })
    }
}
```
设置store中的状态
```
假如现在是点击事件触发
<div @click="clickState('11')"></div>
export default {
    methods:{
        clickState(mark){
            this.$store.dispatch('组件状态js文件名字/组件状态js文件中actions中的设置状态函数名字',mark)
        }
    }
}
```

5. 动态组件
 <component :is="nowLeftState"></component>
 在组件中引入需要显示的组件，并且在components中引入，然后改变变量nowLeftState就可以渲染出来对应的组件






