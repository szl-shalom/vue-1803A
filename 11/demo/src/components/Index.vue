<template>
    <div>
        首页
    </div>
</template>


<script>
export default {
    created() {
        console.log("数据准备就绪")
    },
    activated() {
        console.log("我被使用了")
    },
    deactivated() {
        console.log("我不被使用了")
    },
}
</script>