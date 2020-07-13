<template>
    <div>
        <dl v-for="(item,index) in list" :key="index" @click="gotoDetail(item.id)">
            <dt>
                <img :src="item.url" alt />
            </dt>
            <dd>
                <p>{{ item.title }}</p>
                <p>{{ item.desc }}</p>
                <p>{{ item.price }}</p>
            </dd>
        </dl>
    </div>
</template>

<script>
import Axios from "axios";
export default {
    created() {
        Axios.get("/api/list").then(result => {
            this.list = result.data.list;
            console.log(this.list);
        });
    },
    data() {
        return {
            list: []
        };
    },
    methods: {
        gotoDetail(id) {
            // 去详情页
            this.$router.push(`/detail?id=${id}&name=八维`);
        }
    }
};
</script>

<style lang="scss">
dl {
    display: flex;
}
</style>