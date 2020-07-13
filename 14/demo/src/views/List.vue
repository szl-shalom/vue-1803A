<template>
    <div>
        <ListItem v-for="(item,index) in list" :key="index" :item="item"></ListItem>
    </div>
</template>


<script>
import Axios from "axios";
import ListItem from "@/components/ListItem";
export default {
    created() {
        Axios.get("/api/list").then(result => {
            this.list = result.data.list;
        });
    },
    data() {
        return {
            list: []
        };
    },
    components: {
        ListItem
    }
};
</script>