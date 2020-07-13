<template>
    <div>
        <input type="checkbox" v-model="item.checked" />
        <span>{{ item.title }}</span>
        <b @click="$emit('openDialog',item.id)">删除</b>
    </div>
</template>


<script>
export default {
    props: {
        // 类型检查
        item: Object
    }
};
</script>