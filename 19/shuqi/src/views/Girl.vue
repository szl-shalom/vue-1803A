<template>
    <div class="girl-list">
        <div class="item" v-for="(item,index) in girlData" :key="index">
            <ListItem :item="item" />
        </div>
    </div>
</template>


<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
import ListItem from "@/components/ListItem";
export default {
    created() {
        this.$http.get("/api/girl").then(result => {
            this.GET_GIRL_DATA(result.data);
        });
    },
    methods: {
        ...mapActions(["GET_GIRL_DATA"])
    },
    computed: {
        ...mapState(["girlData"])
    },
    components: {
        ListItem
    }
};
</script>

<style lang="scss">
.girl-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .item {
        width: 33%;
    }
}
</style>