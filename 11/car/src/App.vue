<template>
    <div id="app">
        <main>
            <!-- 因为我是全局组件，所以可以直接使用 -->
            <ListItem v-for="(item,index) in list" :key="index" :item="item" :index="index" />
        </main>
        <footer>
            <div>
                全选
                <input type="checkbox" v-model="allCheck" />
            </div>
            <AllPrice :list="list" />

            <AllCount :list="list" />
        </footer>
    </div>
</template>

<script>
import Axios from "axios";
import "@/assets/scss/common.scss";
import AllPrice from "@/components/AllPrice";
import AllCount from "@/components/AllCount";
export default {
    created() {
        // 判断本地存储是否存在
        if (localStorage.getItem("car")) {
            this.list = JSON.parse(localStorage.getItem("car"));
        } else {
            // 发起请求
            Axios.get("/api/list").then(result => {
                this.list = result.data.list;
                localStorage.setItem("car", JSON.stringify(this.list));
                console.log(this.list);
            });
        }

        // 注册事件
        this.$bus.$on("add", index => {
            this.list[index].count++;
            localStorage.setItem("car", JSON.stringify(this.list));
        });

        this.$bus.$on("red", index => {
            this.list[index].count--;
            localStorage.setItem("car", JSON.stringify(this.list));
        });
    },
    data() {
        return {
            list: []
        };
    },
    computed: {
        allCheck: {
            get() {
                return this.list.every(item => item.checked);
            },
            set(val) {
                this.list.forEach(item => (item.checked = val));
            }
        }
    },
    components: {
        AllPrice,
        AllCount
    }
};
</script>

<style lang="scss">
html,
body {
    width: 100%;
    height: 100%;
}
#app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    main {
        flex: 1;
    }
    footer {
        height: 46px;
        background-color: tomato;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}
</style>
