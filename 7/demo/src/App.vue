<template>
    <div>
        <ul>
            <!-- 3、使用 -->
            <List v-for="(item,index) in list" :key="index" :item="item"
              @del="del"
              :index="index"
            ></List>
        </ul>
    </div>
</template>


<script>
// 1、引入组件
import List from "./components/List.vue";
export default {
    data() {
        return {
            list: [
                {
                    name: "张三",
                    age: 18
                },
                {
                    name: "李四",
                    age: 18
                },
                {
                    name: "王五",
                    age: 18
                },
                {
                    name: "赵柳",
                    age: 18
                }
            ]
        };
    },
    components: {
        // 2、挂载组件（注册）
        List
    },
    methods: {
        del(index) {
            this.list.splice(index, 1);
        }
    }
};
</script>

<style>
html,
body {
    width: 100%;
    height: 100%;
    /* background: red; */
}
</style>