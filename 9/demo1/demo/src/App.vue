<template>
    <div id="app">
        <b @click="addDialog">添加</b>
        <table>
            <thead>
                <tr>
                    <th v-for="(item,index) in listHeader" :key="index">{{ item }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in listContent" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.tel }}</td>
                    <td>{{ item.productionName }}</td>
                    <td>{{ item.level }}</td>
                    <td>{{ item.type }}</td>
                    <td>
                        <b @click="modifyDialog(index)">编辑</b>
                    </td>
                </tr>
            </tbody>
        </table>
        <Dialog v-if="isShowDialog" @closeDialog="closeDialog" @add="add" :flag="flag" :ind="ind" :listContent="listContent"></Dialog>
    </div>
</template>

<script>
import Dialog from "./components/Dialog";
export default {
    components: {
        Dialog
    },
    data() {
        return {
            listHeader: [
                "姓名",
                "工号",
                "手机号",
                "产品名称",
                "技能等级",
                "用户类型",
                "操作"
            ],
            listContent: [
                {
                    name: "张三",
                    code: "001",
                    tel: "12345678910",
                    productionName: "----",
                    level: "一级",
                    type: "高级"
                },
                {
                    name: "李四",
                    code: "002",
                    tel: "0987654321",
                    productionName: "----",
                    level: "二级",
                    type: "中级"
                }
            ],
            // 是否显示弹框
            isShowDialog: false,
            // 是否新增  true 是新增  false 是编辑
            flag: true,
            // 当前操作下表
            ind: 0
        };
    },
    methods: {
        openDialog() {
            this.isShowDialog = true;
        },
        closeDialog() {
            this.isShowDialog = false;
        },
        add(obj) {
            this.listContent.push(obj);
        },
        addDialog() {
            // 打开弹框
            this.openDialog();
            // 设置开关变量
            this.flag = true;
        },
        modifyDialog(index) {
            // 打开弹框
            this.openDialog();
            // 设置开关变量
            this.flag = false;
            // 保存下标
            this.ind = index
        }
    }
};
</script>

<style>
</style>
