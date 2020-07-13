<template>
    <div class="footer">
        <router-link to="/index" tag="b">首页</router-link>
        <router-link to="/car" tag="b">购物车</router-link>
        <router-link to="/home" tag="b">我的</router-link>
    </div>
</template>



<style lang="scss">
    .footer{
        height: 46px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: springgreen;
    }
</style>