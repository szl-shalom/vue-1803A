<template>
    <div class="my-footer">
        <router-link v-for="(item,index) in links" :key="index" :to="item.path" tag="b">{{ item.name }}</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    name: "书城",
                    path: "/index"
                },
                {
                    name: "书架",
                    path: "/carbook"
                },
                {
                    name: "我的",
                    path: "/home"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
    .my-footer{
        height: 46px;
        background: tomato;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>