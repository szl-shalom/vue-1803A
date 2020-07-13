<template>
    <div>
        <div>
             <!-- 输入事件     --> 
            <input type="text" placeholder="请搜索" @input="submit" v-model="val" />
        </div>
        <div class="list">
            <ListItem v-for="(item,index) in arr" :key="index" :item="item" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            val: "",
            arr: []
        };
    },
    created() {
        this.$http.get(`/api/filter?val=${this.val}`).then(result => {
            this.arr = result.data;
        });
    },
    methods: {
        submit() {
            // 模糊搜索
            this.$http.get(`/api/filter?val=${this.val}`).then(result => {
                this.arr = result.data;
            });
        }
    }
};
</script>