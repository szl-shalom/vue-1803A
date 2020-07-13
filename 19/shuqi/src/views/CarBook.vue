<template>
    <div class="carBook">
        <div class="main">
            <div class="item" v-for="(item,index) in bookList" :key="index">
                <ListItem :item="item" />
            </div>
        </div>
        <div class="footer">
            <!-- 引入全局组件 -->
            <MyFooter></MyFooter>
        </div>
    </div>
</template>
<script>
import ListItem from "@/components/ListItem";
import { mapState } from "vuex";
export default {
    components: {
        ListItem
    },
    computed: {
        ...mapState(["bookList"])
    }
};
</script>
<style lang="scss">
.carBook {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main {
        flex: 1;
        .item{
            width:50%;
            float: left;
        }
    }
    .footer {
        height: 46px;
    }
}
</style>