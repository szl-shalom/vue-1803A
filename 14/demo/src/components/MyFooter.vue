<template>
    <div class="footer">
        <router-link to="/index" >首页</router-link>
        <router-link to="/car">购物车</router-link>
        <router-link to="/home">我的</router-link>
    </div>
</template>


<style lang="scss">
    .footer{
        display: flex;
        height:46px;
        justify-content: space-around;
        align-items: center;
        a{
            color:#000;
            text-decoration: none;
        }
    }
</style>