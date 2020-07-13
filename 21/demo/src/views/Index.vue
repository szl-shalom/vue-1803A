<template>
    <div class="index">
        <div class="header">
            <!--  模糊搜索 聚焦跳转路由 -->
            <input type="text" placeholder="请输入搜索的内容" @focus="gotoSearch" />
        </div>
        <div class="main">
            <div class="banner">
                <Banner />
            </div>
            <div class="list">
                <template  v-for="(item,index) in initData">
                    <ListItem :item="item" :key="index"/>
                    <button @click="ADD_CAR_DATA(item)" :key="item.id">加入购物车</button>
                </template>
            </div>
        </div>
        <div class="footer">
            <MyFooter />
        </div>
    </div>
</template>




<script>
import Banner from "@/components/Banner";
import { mapActions } from "vuex";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
    methods: {
        ...mapActions(["GET_INIT_DATA"]),
        ...mapMutations(["ADD_CAR_DATA"]),
        gotoSearch() {
            // 跳转搜索页面
            this.$router.push("/search");
        }
    },
    components: {
        Banner
    },
    created() {
        this.$http.get("/api/list").then(result => {
            this.GET_INIT_DATA(result.data);
        });
    },
    computed: {
        ...mapState(["initData"]),
    }
};
</script>


<style lang="scss">
.index {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header,
    .footer {
        height: 46px;
    }
    .main {
        flex: 1;
        height: 100%;
        overflow: auto;
    }
}
</style>
