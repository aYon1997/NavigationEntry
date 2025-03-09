<template>
    <div></div>
</template>

<script>
/**
  * @file: md链接跳转中转站
  */

import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "CardList",

    setup() {
        onMounted(() => {

            // TODO
            // let isGo = new URL(location.search).searchParams.get('source');
            // let url = sessionStorage.getItem("localPath") || "/NavigationEntry/page/frame/?type=0";;

            // if (!isGo) {
            //     url = "/NavigationEntry/";
            // }
            let url = sessionStorage.getItem("localPath") || "/NavigationEntry/page/frame/?type=0";

            if (typeof window === 'undefined') {
                return;
            }

            window.location.href = url;
        });

        return {};
    },
});
</script>