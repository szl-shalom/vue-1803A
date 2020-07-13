<template>
    <div class="index">
        <el-container>
            <el-main>
                <!-- 轮播组件 -->
                <div class="banner">
                    <Banner />
                </div>
                <!-- 列表组件 -->
                <div class="list">
                    <ListItem v-for="(item,index) in initList" :key="index" :item="item"/>
                </div>
            </el-main>

            <el-footer>
                <router-link to="/index" tag="b">首页</router-link>
                <router-link to="/car" tag="b">购物车</router-link>
            </el-footer>
        </el-container>
    </div>
</template>


<script>
import Banner from "@/components/Banner";
import ListItem from "@/components/ListItem";
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
    components: {
        Banner,
        ListItem
    },
    created() {
        this.$http.get("/api/list").then(result => {
            this.GET_INIT_LIST(result.data);
        });
    },
    methods: {
        ...mapActions(["GET_INIT_LIST"])
    },
    computed: {
        ...mapState(["initList"])
    }
};
</script>

<style lang="scss" scoped>
.index {
    width: 100%;
    height: 100%;
    .el-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .el-footer {
            height: 46px;
            background: tomato;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .el-main {
            height: 100%;
            flex-grow: 1;
            padding: 0;
        }
    }
}
</style>
