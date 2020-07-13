<template>
    <div id="app">
        <AddInput @add="add" />
        <h1>已经完成 ---- {{ done.length }}</h1>
        <ListItem v-for="(item) in done" :key="item.id" :item="item" @openDialog="openDialog" />
        <h1>未完成 ------ {{ process.length }}</h1>
        <ListItem v-for="(item) in process" :key="item.id" :item="item" @openDialog="openDialog" />
        <Dialog v-show="isShowDialog" @closeDialog="closeDialog" @del="del" />
    </div>
</template>

<script>
import AddInput from "./components/AddInput";
import Dialog from "./components/Dialog";
import ListItem from "./components/ListItem";
import Axios from "axios";
export default {
    components: {
        ListItem,
        Dialog,
        AddInput
    },
    data() {
        return {
            list: [],
            isShowDialog: false,
            id: 0
        };
    },
    created() {
        // 发送请求
        Axios.get("/api/list").then(result => {
            // 修改数据
            this.list = result.data.list;
        });
    },
    computed: {
        done() {
            return this.list.filter(item => item.checked);
        },
        process() {
            return this.list.filter(item => !item.checked);
        }
    },
    methods: {
        add(obj) {
            this.list.push(obj);
        },
        openDialog(id) {
            this.isShowDialog = true;
            this.id = id;
        },
        closeDialog() {
            this.isShowDialog = false;
        },
        del() {
            this.list = this.list.filter(item => item.id !== this.id);
        }
    }
};
</script>

<style>
</style>
