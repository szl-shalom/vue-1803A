<template>
    <dl @click="gotoDetail(item.id)">
        <dt>
            <img :src="item.url" alt />
        </dt>
        <dd>
            <p>{{ item.title }}</p>
            <p>{{ item.price }}</p>
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
            // 跳转详情页  动态路由
            this.$router.push(`/detail/${id}`);
        }
    }
};
</script>