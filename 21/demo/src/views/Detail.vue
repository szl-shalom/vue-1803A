<template>
    <div>
        <dl>
            <dt>
                <img :src="item.url" alt />
            </dt>
            <dd>
                {{ item.title }}
                {{ item.price }}
                <button @click="add">加入购物车</button>
            </dd>
        </dl>
    </div>
</template>


<script>
import { mapMutations } from "vuex";
export default {
    created() {
        this.$http
            .get(`/api/getData?id=${this.$route.params.id}`)
            .then(result => {
                console.log(result);
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
        add(){
            // 加入购物车
            this.ADD_CAR_DATA(this.item)
        }
    },
};
</script>