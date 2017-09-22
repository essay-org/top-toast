### 用法
安装  
`$ npm i vue-vb-toast -S`

引入  
```javascript
import VueToast from 'vue-vb-toast'
import 'vue-vb-toast/lib/vue-vb-toast.css'
Vue.use(VueToast, {
  position: 'top',
  durition: 1500
})
```

配置说明  
`Vue.use(VueToast [,options])`  
position表示显示位置，默认为`center`，可选`top,center,bottom`  
durition表示显示时长，默认2000毫秒  

### 使用
```javascript
<template>
  <div id="app">
    <button @click="top()">top</button>
    <button @click="center()">center</button>
    <button @click="bottom()">bottom</button>
    <button @click="base()">base</button>
    <button @click="loading()">loading</button>
  </div>
</template>
<script>
export default {
  methods: {
    top () {
      this.$toast.top('top');
    },
    center () {
      this.$toast.center('center');
    },
    bottom () {
      this.$toast.bottom('bottom');
    },
    base () {
      this.$toast('hello world','center') // 参数二可省略 
    },
    loading () {
      this.$loading.start('加载中...');
      setTimeout(function() {
        this.$loading.end();
      }.bind(this), 1000)
    }
  }
}
</script>
```


