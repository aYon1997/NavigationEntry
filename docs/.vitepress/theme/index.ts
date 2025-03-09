import { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
// @ts-ignore
import Home from "../../index.vue"; // 替换为你的组件路径

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Home", Home); // 注册组件，名称为 Home
    console.log("Home 组件已注册");
  },
} satisfies Theme;
