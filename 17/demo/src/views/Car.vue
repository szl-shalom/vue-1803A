<template>
    <div class="car">
        <div class="header">
            <MyHeader>购物车</MyHeader>
        </div>
        <div class="main">
            <dl v-for="(item,index) in carData" :key="index">
                <dt>
                    <img :src="item.url" alt />
                </dt>
                <dd>
                    <p>名称:{{ item.title }}</p>
                    <p>单价：{{ item.price }}￥</p>

                    <p>
                        <button @click="REDUCE_COUNT(index)">-</button>
                        数量:{{ item.count }}
                        <button @click="ADD_COUNT(index)">+</button>
                    </p>
                </dd>
            </dl>
          
        </div>
          <div class="footer">
                <span>总价：{{ allPrice }}</span>
                <span>总量：{{ allCount }}</span>
                <span>去付款</span>
            </div>
    </div>
</template>


<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
    computed: {
        ...mapState(["carData"]),
        ...mapGetters(["allPrice", "allCount"])
    },
    methods: {
        ...mapMutations(["ADD_COUNT","REDUCE_COUNT"])
    },
};
</script>
<style lang="scss" >
.car{
    display: flex;
    flex-direction: column;
    width:100%;
    height: 100%;
    .header{
        height: 46px;
    }
    .footer{
        height: 46px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: tomato;
        padding:0 20px;
    }
    .main{
        flex:1;
        overflow:auto;
        dl{
            padding:20px;
            img{
                width:100%;
            }
            button{
                width:120px;
                height: 46px;
                background: springgreen;
                color:white;
                font-size: 26px;
            }
        }
    }
}
</style>