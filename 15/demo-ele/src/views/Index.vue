<template>
    <div class="index-wraper">
        <el-container>
            <el-header>首页</el-header>
            <el-main>
                <div class="banner">
                    <el-carousel :interval="4000" type="card" height="200px">
                        <el-carousel-item v-for="(item,index) in urls" :key="index">
                            <img :src="item" alt />
                        </el-carousel-item>
                    </el-carousel>
                </div>

                <el-container>
                    <el-aside width="100px">
                        <div class="list">
                            <span
                                v-for="(item,index) in list"
                                :key="index"
                                :class="{active:ind===index}"
                                @click="ind=index"
                            >{{ item.categoryName }}</span>
                        </div>
                    </el-aside>
                    <el-main>
                        <template v-if="list[ind]">
                            <dl v-for="(item,index) in list[ind].spuList" :key="index" class="item">
                                <dt>
                                    <img :src="item.littleImageUrl" alt />
                                </dt>
                                <dd>
                                    <p>{{ item.spuName }}</p>
                                    <!-- <p>{{ item.spuDesc }}</p> -->
                                    <p>单价{{ item.currentPrice }}￥</p>
                                    <el-button @click="addCar(item)">加入购物车</el-button>
                                </dd>
                            </dl>
                        </template>
                    </el-main>
                </el-container>
            </el-main>
            <el-footer>
                <router-link to="/index" tag="b">首页</router-link>
                <router-link to="/car" tag="b">购物车</router-link>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            urls: [
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1074615169,3892956088&fm=26&gp=0.jpg",
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2848120264,2778704476&fm=26&gp=0.jpg",
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1652123795,1945063222&fm=26&gp=0.jpg",
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1805478546,1895925572&fm=26&gp=0.jpg"
            ],
            list: [], //数据
            ind: 0 //高亮下表
        };
    },
    created() {
        axios.get("/api/list").then(result => {
            console.log(result);
            this.list = result.data;
        });
    },
    methods: {
        addCar(obj) {
            // 获取本地储存数据
            let car = JSON.parse(localStorage.getItem("car")) || [];
            // 去重   spuId
            let foods = car.find(item => item.spuId === obj.spuId);
            console.log(foods);
            if (foods) {
                // 数据存在
                foods.count++; //原数量+1
            } else {
                // 数据不存在
                // 数量为1
                obj.count = 1;
                // 推入数据
                car.push(obj);
            }
            // 更新本地储存
            localStorage.setItem("car", JSON.stringify(car));
        }
    }
};
</script>

<style lang="scss">
.index-wraper {
    width: 100%;
    height: 100%;
    .el-container {
        width: 100%;
        height: 100%;
        .el-footer {
            justify-content: space-around;
            display: flex;
        }
        .el-header {
            justify-content: space-around;
            display: flex;
            align-items: center;
        }
        .el-main {
            padding: 0;
            .banner {
                padding: 10px;
            }
            .item {
                height: 200px;
                display: flex;
                padding: 20px;
                dt {
                    width: 150px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                // dd{}
            }
        }
        .el-aside {
            .list {
                display: flex;
                flex-direction: column;
                padding-left: 20px;

                span {
                    text-align: left;
                    height: 36px;
                    line-height: 36px;
                    &.active {
                        color: red;
                    }
                }
            }
        }
    }
}

.el-carousel__item:nth-child(2n) {
    background-color: hotpink;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: tomato;
}
</style>