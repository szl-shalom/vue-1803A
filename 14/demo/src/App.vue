<template>
    <div id="app">
        <!-- 一级路由出口 -->
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}
html,
body,
#app {
    width: 100%;
    height: 100%;
}

.router-link-exact-active,
.router-link-active {
    color: red !important;
}
</style>
