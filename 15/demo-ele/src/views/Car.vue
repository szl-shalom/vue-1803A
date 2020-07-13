<template>
    <div class="index-wraper">
        <el-container>
            <el-header>
                <i class="el-icon-back" @click="$router.go(-1)"></i>
                <span>购物车</span>
                <i class="el-icon-menu"></i>
            </el-header>
            <el-main>
                <dl v-for="(item,index) in car" :key="index" class="item">
                    <dt>
                        <img :src="item.littleImageUrl" alt />
                    </dt>
                    <dd>
                        <p>{{ item.spuName }}</p>
                        <!-- <p>{{ item.spuDesc }}</p> -->
                        <p>单价{{ item.currentPrice }}￥</p>
                        <el-input-number
                            v-model="item.count"
                            @change="handleChange"
                            :min="1"
                            :max="10"
                            label="描述文字"
                        ></el-input-number>
                    </dd>
                </dl>
            </el-main>
            <el-footer>
                <span>总价：{{ allPrice }}</span>
                <span>总数量：{{ allCount}}</span>
            </el-footer>
        </el-container>
    </div>
</template>


<script>
export default {
    data() {
        return {
            car: []
        };
    },
    created() {
        this.car = JSON.parse(localStorage.getItem("car")) || [];
    },
    methods: {
        handleChange(value) {
            localStorage.setItem("car", JSON.stringify(this.car));
        }
    },
    computed: {
        allPrice() {
            return this.car.reduce((p, n) => {
                return p + n.count * n.currentPrice;
            }, 0);
        },
        allCount() {
            return this.car.reduce((p, n) => {
                return p + +n.count;
            }, 0);
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
    }
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

.el-footer {
    justify-content: space-around;
    display: flex;
}
.el-header {
    justify-content: space-between;
    display: flex;
    align-items: center;
}
</style>