<template>
    <div>
        <p>id :{{ $route.params.id }}</p>
        <img :src="item.url" alt />
        <p>标题：{{ item.title }}</p>
        <p>单价：{{ item.price }}</p>
        <button @click="add">加入购物车</button>
    </div>
</template>


<script>
import { mapMutations } from "vuex";
export default {
    created() {
        this.$http
            .get(`/api/getData?id=${this.$route.params.id}`)
            .then(result => {
                this.item = result.data;
            });
    },
    data() {
        return {
            item: {}
        };
    },
    methods: {
        ...mapMutations(["ADD_CAR_DATA"]),
        add() {
            this.ADD_CAR_DATA(this.item);
        }
    }
};
</script>