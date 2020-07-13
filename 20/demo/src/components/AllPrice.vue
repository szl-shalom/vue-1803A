<template>
    <span>{{ AllPrice }}</span>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["AllPrice"])
    },
};
</script>