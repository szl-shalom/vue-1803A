<template>
    <div>总价钱：{{ allPrice }}</div>
</template>

<script>
export default {
    props: {
        list: Array
    },
    computed: {
        allPrice() {
            return this.list.reduce(
                (p, n) => (n.checked ? p + n.count * n.price : p),
                0
            );
        }
    }
};
</script>