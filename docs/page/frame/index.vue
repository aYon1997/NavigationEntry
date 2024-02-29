<template>
    <card-list :card-list="list" />
</template>

<script>
/**
 * @file: 主流框架介绍 - 卡片
 */

import { defineComponent } from "vue";
import CardList from "../componets/card/index.vue";
import { CARDLIST } from './const';

export default defineComponent({
    name: "Frame",

    components: {
        CardList,
    },

    setup() {
        let type = '';
        let list = [];

        if (typeof window === 'undefined') {
            return;
        }

        type = window.location.search.split('=')[1];
        list =  CARDLIST[type];

        return {
            list,
        };
    },
});
</script>