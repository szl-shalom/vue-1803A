<template>
    <div class="footer">
        <router-link tag="b" to="/home">首页</router-link>
        <router-link tag="b" to="/list">列表</router-link>
        <router-link tag="b" to="/like">喜欢{{allCount ? allCount :""}}</router-link>
        <router-link tag="b" to="/my">我的</router-link>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["allCount"])
    }
};
</script>
<style lang="css" scoped>
.footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 46px;
}
</style>