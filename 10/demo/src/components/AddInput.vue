<template>
    <div>
        <input type="text" placeholder="请输入内容" @keyup.enter="add" v-model="mess" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            mess: "",
            id: 0
        };
    },
    methods: {
        add() {
            let obj = {
                title: this.mess,
                checked: false,
                id: ++this.id
            };
            this.$emit("add", obj);
        }
    }
};
</script>