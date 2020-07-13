<template>
    <div id="app">
        <AddList @add="add"></AddList>
        <div>
            <input type="text" placeholder="请输入内容" v-model="search" />
        </div>
        <ItemList
            v-for="(item,index) in searchList"
            :key="index"
            :item="item"
            @del="del"
            :index="index"
        ></ItemList>
    </div>
</template>

<script>
import AddList from "./components/AddList";
import Axios from "axios";
import ItemList from "./components/ItemList";
export default {
    components: {
        AddList,
        ItemList
    },
    data() {
        return {
            // 列表数据
            list: [],
            // 搜岁数据
            search: ""
        };
    },
    // 数据准备就绪
    created() {
        Axios.get("/api/list").then(result => {
            this.list = result.data.list;
            console.log(this.list);
        });
    },
    methods: {
        add(obj) {
            this.list.push(obj);
        },
        del(id) {
            // 使用filter 筛选 id
            // this.list = this.list.filter(item => item.id !== id);
            // 通过下标删除
            let index = this.list.findIndex(item => item.id == id);
            this.list.splice(index,1)
        }
    },
    computed: {
        searchList() {
            return this.list.filter(item => item.name.includes(this.search));
        }
    }
};

let arr = ["a", "b", "c"];
let arr1 = arr.filter(item => item != "b");
console.log(arr1);
</script>

<style>
#app {
    width: 500px;
    margin: auto;
}
</style>
