<template>
    <div class="home">
        <main>
            <div class="banner">
                <Banner />
            </div>
        </main>
        <div class="footer">
            <MyFooter />
        </div>
    </div>
</template>


<script>
import Banner from "@/components/Banner";
export default {
    components: {
        Banner
    }
};
</script>


<style lang="css">
.home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
main {
    flex: 1;
    height: 100%;
    overflow: auto;
}
.footer {
    height: 46px;
}
</style>
