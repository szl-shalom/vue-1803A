<template>
    <div class="index">
        <div class="main">
            <div class="menu">
                <router-link to="/index/list">列表</router-link>
                <router-link to="/index/commend">推荐</router-link>
            </div>
            <!--  二级路由 -->
            <router-view></router-view>
        </div>
        <MyFooter></MyFooter>
    </div>
</template>

// scroed 局部作用域 css 
<style lang="scss" scoped>
.index {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main {
        flex-grow: 1;
        overflow: auto;
        span {
            color: red;
        }
    }
}
</style>