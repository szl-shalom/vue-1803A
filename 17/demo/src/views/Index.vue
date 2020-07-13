<template>
    <div class="index">
        <div class="header">
           
            <MyHeader>首页</MyHeader>
         
        </div>
        <div class="main">
            <dl v-for="(item,index) in initData" :key="index" :class="{active:isActive}" @click="gotoDetail(item.id)">
                <dt>
                    <img v-lazy="item.url" alt />
                </dt>
                <dd>
                    <p>名称:{{ item.title }}</p>
                    <p>单价：{{ item.price }}￥</p>
                </dd>
            </dl>
        </div>
        <div class="footer">
            <MyFooter />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
    created() {
        axios.get("/api/list").then(result => {
            // 调用vue actions 方法
            this.GET_INIT_DATA(result.data.list);
        });
    },
    methods: {
        ...mapActions(["GET_INIT_DATA"]),
        gotoDetail(id){
            this.$router.push(`/detail?id=${id}`)
        }
    },
    computed: {
        ...mapState(["initData","isActive"])
    }
};
</script>


<style lang="scss">
@mixin center {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.index {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
        height: 46px;
    }
    .footer {
        height: 46px;
    }
    .main {
        flex: 1;
        overflow: auto;
        dl {
            width: 100%;
            padding: 20px;
            font-size: 14px;;
            dt {
                width: 100%;
                img {
                    width: 100%;
                }
            }
            dd {
            }
            &.active{
                width:50%;
                float: left;
            }
        }
    }
}
</style>