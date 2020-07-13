<template>
    <!-- 一级路由出口 -->
    <router-view></router-view>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}
html,
body {
    width: 100%;
    height: 100%;
}
#app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main {
        flex: 1;
        overflow: auto;
    }
}

.router-link-exact-active,
.router-link-active {
    color: red;
}
</style>
