<template>
    <div id="app">
        <header>标题</header>
        <main>
            <!-- 路由出口 -->
            <router-view></router-view>
        </main>
        <footer>
            <router-link to="/index" tag="b">首页</router-link>
            <router-link to="/banner" tag="b">轮播</router-link>
            <router-link to="/home" tag="b">我的</router-link>
        </footer>
    </div>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}
html,body{
    width:100%;
    height:100%;
}
#app{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    header,footer{
        display: flex;
        justify-content: space-around;
        height: 46px;
        align-items: center;
        background: skyblue;
    }
    main{
        flex:1
    }

}





.router-link-exact-active,
.router-link-active {
    color: red;
}
</style>
