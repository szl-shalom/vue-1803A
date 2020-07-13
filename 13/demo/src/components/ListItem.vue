<template>
        <dl @click="gotoDetail(item.id)">
            <dt>
                <img :src="item.url" alt="">
            </dt>
            <dd>
                <p>{{ item.title }}</p>
                <p>{{ item.price }}</p>
            </dd>
        </dl>
</template>


<script>
export default {
    props:{
        item:Object
    },
    methods: {
        gotoDetail(id){
            this.$router.push(`/detail?id=${id}`)
        }
    },
}
</script>

<style lang="scss">
    dl{
        width:50%;
        padding:20px;
        dt{
            width:100%;
            img{
                width:100%;
            }
        }
    }
</style>