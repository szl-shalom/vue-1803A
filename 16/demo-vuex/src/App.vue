<template>
    <div id="app">
        <!-- I 回车事件 -->
        <input type="text" @keydown.enter="add" v-model="val" />
        <h1>已经完成</h1>
        <ul>
            <li v-for="(item) in finish" :key="item.id">
                <input type="checkbox" v-model="item.done" />
                {{ item.title }}---{{ item.done }} ----
                <!-- 一 : 点击事件 -->
                <b @click="del(item.id)">删除</b>
            </li>
        </ul>
        <h1>正在进行</h1>
        <ul>
            <li v-for="(item) in process" :key="item.id">
                <input type="checkbox" v-model="item.done" />
                {{ item.title }}---{{ item.done }} ----
                <!-- 一 : 点击事件 -->
                <b @click="del(item.id)">删除</b>
            </li>
        </ul>
    </div>
</template>


<script>
import axios from "axios";
// 分别引入辅助函数 map
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
    created() {
        //  1 请求数据
        axios.get("/api/list").then(result => {
            // 初始化vuex state 数据
            // 2 因为是一个异步的操作 所以我们调用actions方法
            this.GET_INIT_DATA(result.data.list);
        });
    },
    methods: {
        ...mapActions(["GET_INIT_DATA"]),
        ...mapMutations(["ADD_DATA", "DEL_DATA"]),
        // II 调用
        add() {
            let obj = {
                title: this.val,
                done: false,
                id: Math.random()
                    .toString()
                    .slice(2)
            };
            // III 调用mutations
            this.ADD_DATA(obj);
        },
        // 二 ： 调用mutations
        del(id) {
            this.DEL_DATA(id);
        }
    },
    computed: {
        ...mapGetters(["finish", "process"])
    },
    data() {
        return {
            val: ""
        };
    }
};
</script>
<style>
</style>
