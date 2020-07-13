<template>
    <div>
        <dl>
            <dt>
                <img :src="item.url" alt />
            </dt>
            <dd>
                <p>{{ item.title }}</p>
                <b v-if="item.flag" @click="CHANGE_FLAG(item.id)">不喜欢</b>
                <b v-else @click="CHANGE_FLAG(item.id)">加入喜欢</b>
            </dd>
        </dl>
    </div>
</template>


<script>
import axios from "axios";
import { mapMutations } from "vuex";
import { mapState } from "vuex";
export default {
    created() {
        this.item = this.initData.find(item=>{
            return item.id === this.$route.params.id
        })
    },
    data() {
        return {
            item: {}
        };
    },
    methods:{
        ...mapMutations(["CHANGE_FLAG"])
    },
    computed: {
        ...mapState(["initData"])
    },
};
</script>