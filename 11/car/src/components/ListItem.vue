<template>
    <div class="item">
        <input type="checkbox" v-model="item.checked"/>
        <span class="title">{{ item.title }}</span>
        <span>{{ item.price }}</span>
        <Count :item="item" :index="index"/>
    </div>
</template>

<script>
import Count from "@/components/Count";
export default {
    props: {
        // 接受的item进行数据类型检查
        item: Object,
        index:Number
    },
    components: {
        Count
    }
};
</script>

<style lang="scss">
.item {
    display: flex;
    justify-content: space-around;
    .title {
        width: 150px;
    }
    button {
        padding: 0 12px;
    }
}
</style>