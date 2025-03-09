import { defineConfig } from "vitepress";

const gamesList = [
  {
    text: "1. 魂斗罗（水下八关）",
    link: "https://www.4399.com/flash/225668_4.htm",
  },
  {
    text: "2. 超级玛丽（无限生命）",
    link: "https://www.4399.com/flash/107396.htm",
  },
  {
    text: "3. 坦克大战（经典原版）",
    link: "https://www.4399.com/flash/107397.htm",
  },
  {
    text: "4. 冒险岛（彩虹版）",
    link: "https://www.4399.com/flash/107398.htm",
  },
  {
    text: "5. 双截龙（兄弟之战）",
    link: "https://www.4399.com/flash/107399.htm",
  },
  {
    text: "6. 赤色要塞（苏军突围）",
    link: "https://www.4399.com/flash/107400.htm",
  },
  {
    text: "7. 忍者龙剑传（黑之章）",
    link: "https://www.4399.com/flash/107401.htm",
  },
  {
    text: "8. 马戏团（空中飞人）",
    link: "https://www.4399.com/flash/107402.htm",
  },
  {
    text: "9. 热血足球（世界杯版）",
    link: "https://www.4399.com/flash/107403.htm",
  },
  {
    text: "10. 松鼠大作战（双鼠冒险）",
    link: "https://www.4399.com/flash/107404.htm",
  },
  {
    text: "11. 绿色兵团（孤胆英雄）",
    link: "https://www.4399.com/flash/107405.htm",
  },
  {
    text: "12. 沙罗曼蛇（太空战机）",
    link: "https://www.4399.com/flash/107406.htm",
  },
  {
    text: "13. 洛克人（金属英雄）",
    link: "https://www.4399.com/flash/107407.htm",
  },
  {
    text: "14. 三国志（霸王的大陆）",
    link: "https://www.4399.com/flash/107408.htm",
  },
  {
    text: "15. 淘金者（挖金大作战）",
    link: "https://www.4399.com/flash/107409.htm",
  },
  {
    text: "16. 俄罗斯方块（经典999）",
    link: "https://www.4399.com/flash/107410.htm",
  },
  {
    text: "17. 雪人兄弟（冰雪大冒险）",
    link: "https://www.4399.com/flash/107411.htm",
  },
  {
    text: "18. 街头霸王（16人街霸）",
    link: "https://www.4399.com/flash/107412.htm",
  },
  {
    text: "19. 魂斗罗2（超级弹头）",
    link: "https://www.4399.com/flash/107413.htm",
  },
  {
    text: "20. 影子传说（忍者复仇）",
    link: "https://www.4399.com/flash/107414.htm",
  },
];

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
        text: "游戏菜单",
        items: [
          {
            items: gamesList,
          },
        ],
      },
      {
        text: "更多学习地址",
        items: [
          {
            items: [
              {
                text: "1. 青柠导航，整合了教程学习、开发工具、开源框架、在线手册等资源，适合各阶段程序员。",
                link: "https://www.qnnav.com/chengxuyuan",
              },
              {
                text: "2. 菜鸟教程，提供 HTML、CSS、JavaScript、Python 等语言的入门教程和在线实例，适合零基础学习。",
                link: "https://www.runoob.com",
              },
              {
                text: "3. W3Cschool，覆盖多语言教程、编程实战、离线阅读，支持手机端编码练习。",
                link: "https://www.w3cschool.cn",
              },
              {
                text: "4. 慕课网，提供 Java、前端、Python 等主流技术课程，适合系统化学习。",
                link: "https://www.imooc.com",
              },
              {
                text: "5. Codecademy，互动式编程学习平台，支持 HTML、CSS、Python 等语言，以游戏化方式教学。",
                link: "https://www.codecademy.com",
              },
              {
                text: "6. CSDN，国内最大技术社区，提供博客、论坛、资源下载，覆盖编程语言、开发工具等。",
                link: "https://www.csdn.net",
              },
              {
                text: "7. Stack Overflow，全球程序员问答平台，解决技术难题的权威来源。",
                link: "https://stackoverflow.com",
              },
              {
                text: "8. 掘金，中文技术社区，分享行业动态、开发经验和工具推荐。",
                link: "https://juejin.cn",
              },
              {
                text: "9. LeetCode（力扣），算法与数据结构题库，支持多语言编程，适合面试刷题。",
                link: "https://leetcode-cn.com",
              },
              {
                text: "10. GitHub，全球最大开源社区，托管代码、参与项目开发，学习优质开源项目。",
                link: "https://github.com",
              },
              {
                text: "11. MDN Web Docs，权威前端开发文档，涵盖 HTML、CSS、JavaScript 及现代 Web 技术。",
                link: "https://developer.mozilla.org",
              },
              {
                text: "12. GitBook，技术书籍与文档托管平台，支持在线阅读和协作编辑。",
                link: "https://www.gitbook.com",
              },
              {
                text: "13. 查看更多...",
                link: "https://www.baidu.com",
              },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/aYon1997/NavigationEntry",
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
