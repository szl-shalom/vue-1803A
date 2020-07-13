<template>
    <div id="app">
        {{ num }}
        <button @click="ADD({num:1,num2:2})">点我+1</button>
        <button @click="setData">点我+1</button>
        <ul>
            <li v-for="(item,index) in todos" :key="index">{{ item.title }}-----{{ item.done }}</li>
        </ul>

        <ul>
            <li v-for="(item,index) in finish" :key="index">{{ item.title }}-----{{ item.done }}</li>
        </ul>


        <div v-for="(item,index) in list" :key="index">{{ item }}</div>
    </div> 
</template>


<script>
// 映射辅助函数 mapState
import { mapState } from "vuex";
// 映射辅助函数mapMutations
import { mapMutations } from "vuex";
// 映射辅助函数mapGetters
import { mapGetters } from "vuex";
// 映射辅助函数mapActions
import { mapActions } from "vuex";
import axios from "axios";
export default {
    computed: {
        ...mapState(["num", "todos","list"]),
        ...mapGetters(["finish"])
    },
    methods: {
        ...mapMutations(["ADD"]),
        ...mapActions(["setData", "setList"])
    },
    created() {
        axios.get("/api/list").then(result => {
           
            this.setList( result.data)
        });
    }
};
</script>
<style>
</style>
