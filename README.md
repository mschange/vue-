## 组件通信方式
 常用： props event vuex
    pros: 父给子传值


 边界情况：$parent $children $root $refs provide/inject

 非prop特性：$attrs $listeners

### 事件总线
  class Bus {
    constructor(){
      this.callbacks = {}
    }
    $on(name, fn){
      this.callbacks[name] = this.callbacks[name] || []
      this.callbacks[name].push(fn)
    }
    $emit(name, args){
      if(this.callbacks[name]){
        this.callbacks[name].forEach(cb => cb(args))
      }
    }
  }
  // main.js
  Vue.prototype.$bus = new Bus()
  // child1
  this.$bus.$on('foo', handle)
  // child2
  this.$bus.$emit('foo')

  实践中通常⽤Vue代替Bus，因为Vue已经实现了相应接口：Vue.prototype.$bus = new Vue()