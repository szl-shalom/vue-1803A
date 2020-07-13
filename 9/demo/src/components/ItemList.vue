<template>
    <div class="item">
        <label for>
            <span v-if="!item.state">{{ item.name}}</span>
            <input v-else type="text" v-model="item.name" />
        </label>
        <label for>
            <span v-if="!item.state">{{ item.age}}</span>
            <input v-else type="text" v-model="item.age" />
        </label>

        <label for>
            <b @click="item.state=true" v-if="!item.state">编辑</b>
            <b @click="item.state=false" v-else>保存</b>
        </label>
        <b @click="$emit('del',item.id)">删除</b>
    </div>
</template>


<script>
export default {
    props: ["item", "index"]
};
</script>

<style>
.item {
    width: 100%;
    display: flex;
    justify-content: space-around;
}
</style>