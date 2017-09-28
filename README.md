## 用法
安装  
```node
npm i top-toast -S
```

引入  
```javascript
import TopToast from 'top-toast'
import 'top-toast/lib/toast.css'
Vue.use(TopToast, {
  position: 'top',
  durition: 1500
})
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


