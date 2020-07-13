<template>
    <dl @click="go(item.id)">
        <dt>
            <img :src="item.url" alt />
        </dt>
        <dd>
            <p>{{ item.title }}</p>
            <p>{{ item.author }}</p>
        </dd>
    </dl>
</template>


<script>
export default {
    props: {
        item: Object
    },
    methods: {
        go(id){
            this.$router.push(`/detail?id=${id}`)
        }
    },
};
</script>
<style lang="scss">
dl {
    padding:10px;
    width: 100%;
    img {
        width: 100%;
    }
}
</style>