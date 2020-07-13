# vueX 什么是： Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。（存储数据，监听数据的改变，事件穿梭等等)


## state  
- 一般情况下  初始化的数据放在state身上  
- 使用2中方法
- - 方式一
```javascript
    export default {
        created(){
            this.$store.state.数据名称   //方式一  (不能这么用)
        }
    }

```
- - 方式二
```javascript
import { mapState } from "vuex";
export default {
    computed(){
        ...mapState(["数据名称"])
    }
}
```

# mutations
- 通过 mutations 控制数据的改变  store.state
- 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
```javascript
    import { mapMutations } from "vuex";
    export default {
        methods:{
            ...mapMutations(["方法名称"])
        }
    }
```

# getters
- 相当于组价中的计算属性