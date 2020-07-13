<template>
    <ul>
        <li v-for="(item,index) in list" :key="index">
            {{ item.name }}
            <List :list="item.children" />
        </li>
    </ul>
</template>


<script>
export default {
    props: {
        list: Array
    },
    name: "List"
};
</script>