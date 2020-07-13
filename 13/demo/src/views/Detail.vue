<template>
    <div>
        <img :src="obj.url" alt />
        <p>标题：{{ obj.title }}</p>
        <p>单价：{{ obj.price }}</p>
        <p>描述：{{ obj.desc }}</p>
    </div>
</template>


<script>
import Axios from "axios";
export default {
    created() {
        Axios.get(`/api/getData?id=${this.$route.query.id}`).then(result => {
            console.log(result);
            this.obj = result.data;
        });
    },
    data() {
        return {
            obj: {}
        };
    }
};
</script>