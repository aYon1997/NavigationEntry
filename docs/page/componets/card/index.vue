<template>
    <div class="card-list">
        <ul>
            <li v-for="(item, index) in cardList" :key="index">
                <div class="card" @click="handleClick(item.url)">
                    <div class="card-image">
                        <img :src="item.imageSrc" />
                    </div>
                    <div class="card-content">
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script>
/**
  * @file: 介绍卡片组件
  */

import { defineComponent } from "vue";

export default defineComponent({
    name: "CardList",

    props: {
        cardList: {
            type: Array,
            required: true,
            default: () => [],
        },
    },

    setup() {
        const handleClick = (url) => {
            sessionStorage.setItem("localPath", url);
            if (typeof window === 'undefined') {
                return;
            }

            window.location.href = url;
        };

        return {
            handleClick,
        };
    },
});
</script>
  
<style scoped>
.card-list {
    display: flex;
    justify-content: center;
}

ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    list-style: none;
}

li {
    margin: 10px;
}

.card {
    cursor: pointer;
    position: relative;
    width: 320px;
    height: 420px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

    background-color: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transform: perspective(1000px) rotateX(5deg);
    transition: all 0.3s ease-out;
}

.card:hover {
    transform: perspective(1000px) rotateY(5deg);
}

.card-image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background-color: white;
}

.card-content h2 {
    margin: 0;
    font-size: 1.5rem;
}

.card-content p {
    margin: 10px 0 0;
    font-size: 1rem;
    color: #999;
}
</style>