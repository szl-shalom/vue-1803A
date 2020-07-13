<template>
    <div>
        <div class="header">
            <MyHeader>详情页</MyHeader>
        </div>

        <dl>
            <dt>
                <img :src="item.url" alt />
            </dt>
            <dd>
                <p>标题：{{ item.title }}</p>
                <p>单价：{{ item.price }}</p>
                <p>描述：{{ item.desc }}</p>
                <p>
                    <button @click="add">加入购物车</button>
                </p>
            </dd>
        </dl>
    </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
    created() {
        axios.get(`/api/getData?id=${this.$route.query.id}`).then(result => {
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
        ...mapMutations(["ADD_CARDATA"]),
        add() {
            this.ADD_CARDATA(this.item);
        }
    }
};
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}
.header {
    height: 46px;
}
button {
    width: 90%;
    margin: 50px 5%;
    height: 46px;
    background: tomato;
}
</style>