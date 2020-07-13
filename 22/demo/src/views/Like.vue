<template>
    <div class="home">
        <main>
            <div class="banner">
                <Banner />
            </div>
            <div class="list">
                <dl v-for="(item,index) in carData" :key="index">
                    <input type="checkbox" v-model="item.flag" />
                    <dt>
                        <img :src="item.url" alt />
                    </dt>
                    <dd>
                        <p>{{ item.title }}</p>
                        <p>{{ item.price }}</p>
                        <button @click="DEL_CAR_DATA(item.id)">-</button>
                        <span>{{ item.count }}</span>
                        <button @click="item.count++">+</button>
                    </dd>
                </dl>
                <input type="checkbox" v-model="allCheck" />
                {{ allPrice }}
            </div>
        </main>
        <div class="footer">
            <MyFooter />
        </div>
    </div>
</template>


<script>
import Banner from "@/components/Banner";
import { mapGetters } from "vuex";
import ListItem from "@/components/ListItem";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
    components: {
        Banner,
        ListItem
    },
    computed: {
        ...mapGetters(["likeArr", "allPrice"]),
        ...mapState(["carData"]),
        allCheck: {
            get() {
                return this.carData.every(item => item.flag);
            },
            set(val) {
                this.carData.forEach(item => (item.flag = val));
            }
        }
    },
    methods: {
        ...mapMutations(["DEL_CAR_DATA"])
    },
};
</script>


<style lang="css">
.home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
main {
    flex: 1;
    height: 100%;
    overflow: auto;
}
.footer {
    height: 46px;
}
</style>
