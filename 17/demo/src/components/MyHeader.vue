<template>
    <div class="my-header">
        <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
        <span>
            <slot></slot>
        </span>
        <i class="iconfont icon-caidan" @click="TOGGLE_ISACTIVE()"></i>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    methods: {
        ...mapMutations(["TOGGLE_ISACTIVE"])
    }
};
</script>


<style lang="scss">
.my-header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    background: skyblue;
}
</style>