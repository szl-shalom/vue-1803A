<template>
    <div class="my-footer">
        <router-link
            tag="b"
            v-for="(item,index) in links"
            :key="index"
            :to="item.path"
        >{{ item.name }}{{ index===1 ? count :"" }}</router-link>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            links: [
                {
                    path: "/index",
                    name: "首页"
                },
                {
                    path: "/car",
                    name: "购物车"
                },
                {
                    path: "/home",
                    name: "我的"
                }
            ]
        };
    },
    computed: {
        ...mapGetters(["count"])
    },
};
</script>

<style lang="scss" scoped>
.my-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    background: tomato;
}
</style>