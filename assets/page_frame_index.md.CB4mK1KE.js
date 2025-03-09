import{_ as o,d as m,c as r,o as s,j as e,F as h,B as g,t as c,C as w,G as u}from"./chunks/framework.Dmclb3Xc.js";const S=m({name:"CardList",props:{cardList:{type:Array,required:!0,default:()=>[]}},setup(){return{handleClick:i=>{sessionStorage.setItem("localPath",i),!(typeof window>"u")&&(window.location.href=i)}}}}),_={class:"card-list"},J=["onClick"],b={class:"card-image"},P=["src"],E={class:"card-content"};function G(t,i,p,n,d,l){return s(),r("div",_,[e("ul",null,[(s(!0),r(h,null,g(t.cardList,(a,f)=>(s(),r("li",{key:f},[e("div",{class:"card",onClick:x=>t.handleClick(a.url)},[e("div",b,[e("img",{src:a.imageSrc},null,8,P)]),e("div",E,[e("h2",null,c(a.title),1),e("p",null,c(a.description),1)])],8,J)]))),128))])])}const v=o(S,[["render",G],["__scopeId","data-v-70e9ebdc"]]),C=[[{title:"Vue",description:"一个轻量级的渐进式框架",imageSrc:"https://img2.baidu.com/it/u=4279481903,3012129232&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",url:"https://cn.vuejs.org/"},{title:"React",description:"一个单向数据流的Javascript库",imageSrc:"https://img2.baidu.com/it/u=144771867,3466031408&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",url:"https://react.zcopy.site/"},{title:"Angular",description:"一个优秀的现代 Web 开发平台",imageSrc:"https://img2.baidu.com/it/u=2135152564,3979366525&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",url:"https://angular.cn/"}],[{title:"Vite",description:"下一代前端开发与构建工具",imageSrc:"https://img1.baidu.com/it/u=3623333495,4073087500&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",url:"https://vitejs.cn/"},{title:"Webpack",description:"JavaScript 应用程序的 静态模块打包工具",imageSrc:"https://img2.baidu.com/it/u=1427325983,4019623757&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",url:"https://webpack.docschina.org/"},{title:"Glup",description:"自动化构建工具",imageSrc:"https://img0.baidu.com/it/u=487722494,1590516920&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",url:"https://www.gulpjs.com.cn/"},{title:"Rollup",description:"JavaScript模块打包器",imageSrc:"https://img2.baidu.com/it/u=602691996,1897370165&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",url:"https://rollupjs.org/"}],[{title:"减少HTTP请求",description:"一个轻量级的渐进式框架",imageSrc:"https://img1.baidu.com/it/u=3239819670,3339726551&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",url:"https://cn.vuejs.org/"},{title:"压缩代码",description:"压缩代码",imageSrc:"https://img2.baidu.com/it/u=3222526784,4148639898&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",url:""},{title:"CDN",description:"CDN",imageSrc:"https://img1.baidu.com/it/u=1253209675,3975667758&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",url:""}],[{title:"XSS",description:"XSS",imageSrc:"https://img0.baidu.com/it/u=2641392507,1597680677&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",url:""},{title:"CSRF",description:"CSRF",imageSrc:"https://img0.baidu.com/it/u=1161126237,1695229048&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",url:""}],[{title:"Cypress",description:"一个易用的测试框架",imageSrc:"https://img0.baidu.com/it/u=48487811,2386000662&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",url:"https://www.cypress.io/"},{title:"Just",description:"一款优雅、简洁的 JavaScript 测试框架",imageSrc:"https://img1.baidu.com/it/u=4109535435,78479205&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",url:"https://jestjs.io/zh-Hans/"}],[{title:"Jenkins",description:"开源的自动化服务器",imageSrc:"https://img1.baidu.com/it/u=2217129075,2183422488&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",url:"https://www.jenkinschina.com/"},{title:"Docker",description:"开源的自动化服务器",imageSrc:"https://img2.baidu.com/it/u=1882828960,2864421770&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",url:"http://docker.p2hp.com/"},{title:"Nginx",description:"Nginx",imageSrc:"https://img2.baidu.com/it/u=869663909,2641039337&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",url:"http://nginx.org/"}],[{title:"Uniapp",description:"开发一次，多端使用",imageSrc:"https://img2.baidu.com/it/u=2091225351,3634267556&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",url:"https://uniapp.dcloud.net.cn/"},{title:"Flutter",description:"Flutter",imageSrc:"https://img1.baidu.com/it/u=830385430,3540332919&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",url:"https://flutter.dev/"},{title:"React Native",description:"原生开发的最佳部分与 React 相结合",imageSrc:"https://img1.baidu.com/it/u=3404151044,3819640368&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",url:"https://reactnative.cn/"}],[{title:"D3.js",description:"D3",imageSrc:"https://img1.baidu.com/it/u=1793441554,438159742&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",url:"https://d3js.org/"},{title:"Echarts",description:"一个基于 JavaScript 的开源可视化图表库",imageSrc:"https://img1.baidu.com/it/u=3424098779,2677141077&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",url:"https://echarts.apache.org/zh/index.html"},{title:"Three.js",description:"Three",imageSrc:"https://img1.baidu.com/it/u=2289434724,3916664927&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",url:"https://threejs.org/"}],[{title:"无障碍设计",description:"无障碍设计",imageSrc:"https://img2.baidu.com/it/u=3731993000,2697542721&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",url:"https://cn.vuejs.org/"}]],j=m({name:"Frame",components:{CardList:v},setup(){let t="",i=[];if(!(typeof window>"u"))return t=window.location.search.split("=")[1],i=C[t],{list:i}}});function k(t,i,p,n,d,l){const a=w("card-list");return s(),r("div",null,[u(a,{"card-list":t.list},null,8,["card-list"])])}const $=o(j,[["render",k]]),F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"page/frame/index.md","filePath":"page/frame/index.md","lastUpdated":1709188668000}'),y={name:"page/frame/index.md"},N=Object.assign(y,{setup(t){return(i,p)=>(s(),r("div",null,[u($)]))}});export{F as __pageData,N as default};
