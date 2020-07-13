<template>
    <div class="car">
        <el-container>
            <el-main>
                <div class="buy" v-if="carData.length === 0">
                    <button v-if="!isLogin">现在登录</button>
                    <button>现在去买</button>
                </div>
                <div class="list" v-else>
                    <button @click="flag=!flag">{{ flag ?"编辑":"完成" }}</button>
                    <dl v-for="(item,index) in carData" :key="index">
                        <input type="checkbox" v-model="item.checked" />
                        <dt>
                            <img :src="item.url" alt />
                        </dt>
                        <dd>
                            <p>{{ item.title }}</p>
                            <p>{{ item.price }}</p>
                            <p>{{ item.count }}</p>
                        </dd>
                    </dl>

                    <div>
                        全选：
                        <input type="checkbox" v-model="allCheck" />
                        <AllPrice />
                        <button v-if="flag">现在结算</button>
                        <button v-else @click="del">删除所选</button>
                    </div>
                </div>
            </el-main>
            <el-footer>
                <router-link to="/index" tag="b">首页</router-link>
                <router-link to="/car" tag="b">购物车</router-link>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import AllPrice from "@/components/AllPrice";
export default {
    computed: {
        ...mapState(["carData"]),
        allCheck: {
            get() {
                return this.carData.every(item => item.checked);
            },
            set(val) {
                this.carData.forEach(item => (item.checked = val));
            }
        }
    },
    data() {
        return {
            isLogin: localStorage.getItem("token"),
            flag: true
        };
    },
    components: {
        AllPrice
    },
    methods: {
        ...mapMutations(["DEL_CAR_DATA"]),
        del() {
            this.DEL_CAR_DATA();
        }
    }
};
</script>
<style lang="scss" scoped>
.car {
    width: 100%;
    height: 100%;
    .el-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .el-footer {
            height: 46px;
            background: tomato;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .el-main {
            height: 100%;
            flex-grow: 1;
            .list {
                dl {
                    display: flex;
                }
            }
        }
    }
}
</style>
