<template>
    <div id="app">
        <header></header>
        <main>
            <!-- 持久化 -->
            <keep-alive>
                <!-- 动态组件 -->
                <!-- is 跟组件名称 -->
                <component :is="arr[ind]"></component>
                
            </keep-alive>
        </main>
        <footer>
            <b @click="ind=1" :class="{active:ind===1}">首页</b>
            <b @click="ind=0" :class="{active:ind===0}">列表</b>
        </footer>
    </div>
</template>

<script>
import List from "./components/List";
import Index from "./components/Index";
export default {
    data() {
        return {
            arr: [List, Index],
            ind: 1
        };
    },
    methods: {
        change() {
            this.ind = this.ind === 1 ? 0 : 1;
        }
    }
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}
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
    header,
    footer {
        height: 46px;
        background: skyblue;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .active {
            color: red;
        }
    }
    main {
        flex-grow: 1;
    }
}
</style>
