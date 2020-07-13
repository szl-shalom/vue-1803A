<template>
    <div>总数量：{{ allCount }}</div>
</template>

<script>
export default {
    props: {
        list: Array
    },
    computed: {
        allCount() {
            return this.list.reduce((p, n) => {
                console.log(typeof n.count);
                return n.checked ? p + +n.count : p;
            }, 0);
        }
    }
};
</script>