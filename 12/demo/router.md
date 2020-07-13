- 使用vue-router 直接是脚手架工具进行下载
- 路由注册表  ***
```javascript
    const route = [
        {
            path:"路径", //浏览器的地址
            component:()=>import("组件的路径"),
            name:"组件名称"
        }
    ]
```

- 展示路由
```javascript
    // 路由出口
    <router-view></router-view>
```

- 切换路由
```javascript
    // 注意此路径个路由注册表的路径保持一致
    <router-link to="路径"></router-link>
```

- 高亮
```css
.router-link-exact-active,.router-link-active{
    color:red;
}

```
- 二级路由
```javascript
 {
  path: "/home",
  component: () => import("@/views/home.vue"),
  children: [{
      path: "/home",
      redirect: "/home/list"
    }, {
      path: "/home/list",
      component: () => import("@/views/List.vue")
    },
    {
      path: "/home/item",
      component: () => import("@/views/Item.vue")
    }
  ]
}

```

- 跳转页面  this.$router.push("地址?id=123&name=八维")
- 或许路由信息  this.$route
  



