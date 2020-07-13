<template>
    <div>
        <dl>
            <dt>
                <img :src="item.url" alt @click="todoDetail(item.id)" />
            </dt>
            <dd>
                <p>{{ item.title }}</p>
                <b @click="ADD_CAR_DATA(item)">喜欢</b>
            </dd>
        </dl>
    </div>
</template>


<script>
import { mapMutations } from "vuex";
export default {
    props: {
        item: Object
    },
    methods: {
        ...mapMutations(["ADD_CAR_DATA"]),
        todoDetail(id) {
            this.$router.push(`/detail/${id}`);
        }
    }
};
</script>

<style lang="css">
dl {
    display: flex;
}
</style>