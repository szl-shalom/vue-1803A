<template>
    <div class="about">
      <ul>
        <li v-for="(item,index) in car" :key="index">
            标题{{ item.title }}
            价钱：{{ item.price }}
            数量{{ item.count }}<button @click="item.count++">+</button>
        </li>

      </ul>
      总价 {{ AllPrice }}
    </div>
</template>


<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapState(["car"]),
        ...mapGetters(["AllPrice"])
    },

};
</script>
