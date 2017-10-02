## 用法
安装  
```node
npm i top-toast -S
```

引入  
```javascript
import TopToast from 'top-toast'
Vue.use(TopToast)
```

配置项  
```javascript
Vue.use(TopToast[,options])
{
  position: 'top',// 默认值top,可选center bottom
  durition: 1500 // 默认值1500毫秒
}
```

## 使用
```html
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

## 开源协议
MIT  


