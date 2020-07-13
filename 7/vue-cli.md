# 下载脚手架工具
- cnpm install @vue/cli -g  安装脚手架工具
- vue --version   4.4.4 看到版本号说明脚手架下载成功  
- vue create 包名(小写英文字母)  



# 组件怎么使用
- import 组件名称 from 组件路径
- 挂载组件
```javascript
    export default {
        components:{
            组价名称,
        }
    }
```
- 使用
````html
    <template>
        <div>
            <组价名称></组件名称>
        </div>
    </template>
```