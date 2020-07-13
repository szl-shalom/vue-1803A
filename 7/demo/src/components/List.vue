<template>
    <div>
        姓名 ：{{ item.name }}  ||
        年龄 ：{{ item.age }} 
        <button @click="$emit('del',index)">删除</button>
    </div>
</template>

<script>
export default {
    props:["item","index"]
}
</script>