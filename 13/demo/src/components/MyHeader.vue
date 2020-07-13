<template>
    <div class="header">
        <!-- 插槽 -->
        <slot></slot>
    </div>
</template>


<style lang="scss">
    .header{
        height: 46px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: skyblue;
    }
</style>