<template>
    <div>
        详情页
        id:{{$route.query.id}}
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.$route);
    }
};
</script>