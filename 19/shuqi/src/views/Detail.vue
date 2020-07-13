<template>
    <div class="detail">
        <div class="main">
            <dl>
                <dt>
                    <img :src="item.url" alt />
                </dt>
                <dd>
                    <p>{{ item.title }}</p>
                    <p>{{ item.author }}</p>
                </dd>
            </dl>
            <p>描述：{{ item.desc }}</p>
        </div>
        <div class="footer">
            <b @click="add" v-if="isExit">加入书架</b>
            <b v-else style="color:#ccc">已加书架</b>
            <b @click="gotoRead">开始阅读</b>
        </div>
    </div>
</template>


<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";
export default {
    created() {
        this.$http
            .get("/api/getData", {
                params: {
                    id: this.$route.query.id
                }
            })
            .then(result => {
                this.item = result.data;
                this.IS_EXIT(this.item.id);
            });
    },
    data() {
        return {
            item: {}
        };
    },
    methods: {
        ...mapMutations(["ADD_BOOK_LIST", "IS_EXIT"]),
        gotoRead() {
            this.$router.push("/read");
        },
        add() {
            this.ADD_BOOK_LIST(this.item);
            this.IS_EXIT(this.item.id);
        }
    },
    computed: {
        ...mapState(["isExit"])
    }
};
</script>

<style lang="scss">
.detail {
    padding: 20px;
    dl {
        display: flex;
        dd {
            padding-left: 20px;
        }
    }
    .footer {
        display: flex;
        justify-content: space-around;
        height: 50px;
        align-items: center;
    }
}
</style>