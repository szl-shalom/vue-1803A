<template>
    <div>
        <div class="banner">
            <Banner :urls="urls"></Banner>
        </div>
        <!-- 列表 -->
        <div class="list">
            <ListItem v-for="(item,index) in list" :key="index" :item="item"></ListItem>
        </div>
    </div>
</template>


<script>
import Banner from "@/components/Banner";
import ListItem from "@/components/ListItem";
import Axios from "axios";
export default {
    created() {
        Axios.get("/api/list").then(result=>{
            console.log(result)
            this.list = result.data.list;
        })
    },
    data() {
        return {
            urls: [
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f6bf6ffec5d75d5194bedeb0cf356c21.jpg?thumb=1&w=720&h=360",
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1ec5cc9da925143fd836dbf70db11e29.jpg?thumb=1&w=720&h=360",
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9c38e65ab342e58438c9248921539567.jpg?thumb=1&w=720&h=360"
            ],
            list:[],
        };
    },
    components: {
        Banner,
        ListItem
    }
};
</script>


<style lang="scss">
    .list{
        flex-wrap: wrap;
        display: flex;
    }
</style>