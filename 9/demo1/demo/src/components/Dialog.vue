<template>
    <div class="mask">
        <div class="content">
            姓名
            <input type="text" v-model="val.name" />
            工号
            <input type="text" v-model="val.code" />
            电话
            <input type="text" v-model="val.tel" />
            名称
            <input type="text" v-model="val.productionName" />
            等级
            <input type="text" v-model="val.level" />
            类型
            <input type="text" v-model="val.type" />
            <div>
                <b @click="submit">确定</b>
                <b @click="$emit('closeDialog')">取消</b>
                {{ ind }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        // 编辑
        if (!this.flag) {
            this.list;
        }
    },

    props: ["flag", "ind", "list"],
    data() {
        return {
            val: {
                name: "",
                code: "",
                tel: "",
                productionName: "",
                level: "",
                type: ""
            }
        };
    },
    methods: {
        submit() {
            // 关闭弹框
            this.$emit("closeDialog");
            if (this.flag) {
                // 新增
                // 触发自定义事件
                this.$emit("add", this.val);
            } else {
                // 修改
            }
        }
    }
};
</script>

<style>
.mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
}
.content {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 20px;
    width: 658px;
}
input {
    border: 1px solid #ccc;
}
</style>