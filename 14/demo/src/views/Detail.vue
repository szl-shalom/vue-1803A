<template>
    <div>
        <p>详情页 ID : {{ $route.params.id}}</p>
        <img :src="item.url" alt />
        <p>{{item.title}}}</p>
        <p>{{ item.price }}</p>
        <p>{{ item.desc }}</p>
        <button>加入购物车</button>
    </div>
</template>


<script>
import Axios from "axios";
export default {
    created() {
        let id = this.$route.params.id;
        Axios.get(`/api/getData?id=${id}`).then(result => {
            console.log(result);
            this.item = result.data;
        });
    },
    data() {
        return {
            item: {}
        };
    }
};
</script>