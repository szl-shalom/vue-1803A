<template>
    <div class="mask">
        <div class="content">
            <h1>确认要删除吗？</h1>
            <div>
                <b @click="ok">确定</b>
                <b @click="$emit('closeDialog')">取消</b>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        ok() {
            // 关闭
            this.$emit("closeDialog");
            // 删除
            this.$emit("del")
        }
    }
};
</script>

<style lang="scss">
.mask {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    .content {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        padding: 20px;
        border-radius: 25px;
    }
}
</style>