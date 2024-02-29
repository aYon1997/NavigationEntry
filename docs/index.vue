<template>
    <div>
        <div class="theme-container">
            <div v-if="isDarkTheme">
                晚安，玛卡玛卡！
            </div>
            <img v-else
                 src="./public/images/sun.gif">
        </div>
        <div class="theme-mask"
             @click="onMaskClick">
        </div>
    </div>
</template>

<script>
/**
  * @file: 首页文件
  */

import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { TOKENS } from './const';

export default defineComponent({
    name: "Home",

    setup() {
        const isDarkTheme = ref(false);

        const validateInput = () => {
            let userInput = prompt("请输入密码");
       
            if (userInput && userInput.includes('token') && TOKENS[userInput.slice(-1)] && window) {
                window.location.href = atob(TOKENS[userInput.slice(-1)]);
            } else {
                alert("密码错误！");
            }
        }

        const onMaskClick = () => {
            validateInput();
        };

        onMounted(() => {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'class') {
                        const target = mutation.target;
                        isDarkTheme.value = target.classList.contains('dark');
                    }
                });
            });

            const elementToObserve = document.documentElement; // 或者是其他包含 .dark 类的元素
            observer.observe(elementToObserve, {
                attributes: true
            });

            // 确保只有在组件挂载后添加的事件监听器或者执行的某些操作才会在组件卸载时被清理
            onUnmounted(() => {
                observer.disconnect();
            });
        });

        return {
            isDarkTheme,
            onMaskClick
        };
    },
});
</script>

<style scoped>
.theme-container {
    z-index: -1;
    position: fixed;
    top: 100px;
    right: 10px;
    width: 200px;
    height: 200px;
}

.theme-mask {
    z-index: 10;
    position: fixed;
    top: 100px;
    right: 10px;
    width: 200px;
    height: 200px;
}
</style>