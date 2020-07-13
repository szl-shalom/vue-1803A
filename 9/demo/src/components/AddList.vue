<template>
    <div>
        <input type="text" v-model="val.name" />
        <input type="text" v-model="val.age" />
        <b @click="submit">提交</b>
    </div>
</template>

<script>
export default {
    methods: {
        submit() {
            // 触发自定义事件
            this.$emit("add", {
                ...this.val,
                id: Math.random()
                    .toString()
                    .slice(2),
                state: false
            });
            //清空数据
            this.val.name = "";
            this.val.age = "";
        }
    },
    data() {
        return {
            val: {
                // 姓名
                name: "",
                // 年龄
                age: ""
            }
        };
    }
};
</script>