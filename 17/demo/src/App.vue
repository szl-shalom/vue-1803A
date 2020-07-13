<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>


<style lang="scss">
@import "./assets/css/common.css";
@import "./assets/fonts/iconfont.css";
html,
body,
#app {
    width: 100%;
    height: 100%;
    color: white;
}
body {
    background: url("./assets/image/bg.gif");
}

.router-link-exact-active,
.router-link-active {
    color: red;
}
</style>
