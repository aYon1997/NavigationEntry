import { defineConfig } from "vitepress";

let itemsList = Array.from({ length: 100 }, (_, index) => ({
  text: `Example ${index}`,
  link: "https://www.4399.com/flash/225668_4.htm",
}));

export default defineConfig({
  base: "/NavigationEntry/",
  title: "苏格拉底",
  description: "人最大的痛苦在于无法跨越知道和做到的鸿沟",

  // 页面显示最后修改时间
  lastUpdated: true,

  // 忽略md外链
  ignoreDeadLinks: true,
  head: [
    [
      "link",
      { rel: "icon", href: "/images/logo.webp" },
      //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    ],
  ],
  themeConfig: {
    logo: "/images/logo.webp",
    siteTitle: "HOME",
    nav: [
      { text: "gitee", link: "https://gitee.com/" },
      {
        text: "Games Menu",
        items: [
          {
            items: itemsList,
          },
          {
            items: itemsList,
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://docs.github.com/zh/enterprise-cloud@latest/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints",
      },
      {
        icon: "facebook",
        link: "https://signinsupport.net/www-facebook-com-login-signin/",
      },
    ],

    footer: {
      copyright: "Copyright © 2024",
      message: "",
    },
  },
});
