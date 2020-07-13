<template>
    <div class="home">
        <main>
            <div class="banner">
                <Banner />
            </div>
            <div class="list">
                <ListItem v-for="(item,index) in initData" :key="index" :item="item"/>
            </div>
        </main>
        <div class="footer">
            <MyFooter />
        </div>
    </div>
</template>


<script>
import Banner from "@/components/Banner";
import axios from "axios";
import { mapActions } from "vuex";
import { mapState } from "vuex";
import ListItem from "@/components/ListItem";
export default {
    components: {
        Banner,
        ListItem
    },

    created() {
        axios.get("/api/list").then(result => {
            this.SET_INIT_DATA(result.data);
        });
    },
    methods: {
        ...mapActions(["SET_INIT_DATA"])
    },
    computed: {
        ...mapState(["initData"])
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
