<template>
    <div>
        详情页
        标题：{{ obj.title }}
        <button @click="ADD_CAR(obj)">加入购物车</button>
    </div>
</template>



<script>
import { mapMutations } from "vuex";
export default {
    created() {
        this.$http
            .get(`/api/getData?id=${this.$route.query.id}`)
            .then(result => {
                this.obj = result.data;
            });
    },
    data() {
        return {
            obj: {}
        };
    },
    methods: {
        ...mapMutations(["ADD_CAR"])
    }
};
</script>