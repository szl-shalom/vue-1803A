<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item,index) in urls" :key="index">
            <img :src="item" alt="">
        </swiper-slide>
    </swiper>
</template>


<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
    created() {
        this.$http.get("/api/banner").then(result => {
            this.urls = result.data;
        });
    },
    components: {
        Swiper,
        SwiperSlide
    },

    data() {
        return {
            swiperOptions: {
                autoplay: {
                    delay: 2000
                },
                loop: true,
            },
            urls: []
        };
    },
};
</script>
<style lang="scss">
img {
    width: 100%;
}
</style>