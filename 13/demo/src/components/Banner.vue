<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item,index) in urls" :key="index">
            <img :src="item" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>


<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
    props: {
        urls: Array
    },
    components: {
        Swiper,
        SwiperSlide
    },
    name: "carrousel",
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: ".swiper-pagination"
                },
                autoplay: {
                    delay: 2000
                },
                loop: true
            }
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        }
    }
};
</script> 

<style lang="scss">
.swiper-container {
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>