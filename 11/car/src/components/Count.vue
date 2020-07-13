<template>
    <div>
        <button @click="red">-</button>
        <span>{{ item.count }}</span>
        <button @click="add">+</button>
        <span>小计 {{ item.count * item.price }}</span>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,
        index: Number
    },
    methods: {
        add() {
            // 触发事件中心的自定义事件
            this.$bus.$emit("add", this.index);
        },
        red() {
            // 触发事件中心的自定义事件
            this.$bus.$emit("red", this.index);
        }
    }
};
</script>