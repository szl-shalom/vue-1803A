<template>
    <div id="app">
        <my-header>首页</my-header>
        <div class="main">
            <!-- 二级路由 -->
            <div class="menu">
                <router-link to="/index/commend" tag="b">推荐</router-link>
                <router-link to="/index/tel" tag="b">手机</router-link>
            </div>
            <!-- 二级路由出口 -->
            <router-view></router-view>
        </div>
        <my-footer></my-footer>
    </div>
</template>


<script>
export default {};
</script>

<style lang="scss">
.menu{
    height: 30px;;
    display: flex;
    align-items: center;
    b{
        padding:0 10px;
    }
}

</style>


