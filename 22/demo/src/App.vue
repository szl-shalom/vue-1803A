<template>
    <div id="app">
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>

<style>
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
    color: RED;
}
</style>
