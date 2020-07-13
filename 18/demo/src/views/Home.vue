<template>
    <div class="home">
        <ul>
            <li v-for="(item,index) in list" :key="index" @click="gogogo(item.id)">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
    created() {
        // 请求数据
        this.$http.get("/api/list").then(result => {
            // 设置vuex的数据
            this.SET_LIST(result.data.list);
        });
    },
    methods: {
        ...mapActions(["SET_LIST"]),
        gogogo(id) {
            console.log(id)
            // 跳转路由 /detail
            this.$router.push(`/detail?id=${id}`);
        }
    },
    computed: {
        ...mapState(["list"])
    }
};
</script>
