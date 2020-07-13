<template>
    <div class="my-footer">
        <router-link
            tag="b"
            v-for="(item,index) in arr"
            :key="index"
            :to="item.path"
        >{{ item.name }}</router-link>
    </div>
</template>


<script>
export default {
    data() {
        return {
            arr: [
                {
                    name: "首页",
                    path: "/index"
                },
                {
                    name: "购物车",
                    path: "/car"
                }
            ]
        };
    }
};
</script>

<style lang="scss">
.my-footer {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: skyblue;
}
</style>