<template>
    <div class="index">
        <div class="main">
            <div class="banner">
                <Banner />
            </div>
            <div class="menu">
                <!-- 切换二级路由 -->
                <router-link to="/index/girl" tag="b">女生</router-link>
                <router-link to="/index/boy" tag="b">男生</router-link>
            </div>
            <!-- 二级路由出口 -->
            <router-view></router-view>
        </div>
        <div class="footer">
            <!-- 引入全局组件 -->
            <MyFooter></MyFooter>
        </div>
    </div>
</template>


<script>
import Banner from "@/components/Banner";
export default {
    components: {
        Banner
    }
};
</script>



<style lang="scss">
.index {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main {
        flex: 1;
        overflow: auto;
        .menu {
            height: 46px;
            line-height: 46px;
            b {
                padding: 0 20px;
            }
            .router-link-exact-active,
            .router-link-active {
                color: red;
            }
        }
    }
    .footer {
        height: 46px;
    }
}
</style>