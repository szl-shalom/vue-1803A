<template>
    <div class="home">
        <div class="main"></div>
        <div class="footer">
            <MyFooter />
        </div>
    </div>
</template>

<style lang="scss">
.home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header,
    .footer {
        height: 46px;
    }
    .main {
        flex: 1;
        height: 100%;
    }
}
</style>
