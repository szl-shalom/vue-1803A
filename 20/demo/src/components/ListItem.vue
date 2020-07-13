<template>
    <dl @click="gotoDetail(item.id)">
        <dt>
            <img :src="item.url" alt />
        </dt>
        <dd>
            <p>标题：{{ item.title }}</p>
            <p>单价：{{ item.price }}</p>
        </dd>
    </dl>
</template>


<script>
export default {
    props: {
        item: Object
    },
    methods: {
        gotoDetail(id) {
            this.$router.push(`/detail/${id}`);
        }
    }
};
</script>
<style lang="scss" scoped>
dl {
    display: flex;
    padding: 10px;
}
</style>