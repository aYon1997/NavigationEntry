import{_ as o,d as p,c as r,o as c,j as s,F as h,B as w,t as n,C as S,G as l}from"./chunks/framework.Dmclb3Xc.js";const v=p({name:"CardList",props:{cardList:{type:Array,required:!0,default:()=>[]}},setup(){return{handleClick:e=>{sessionStorage.setItem("localPath",e),!(typeof window>"u")&&(window.location.href=e)}}}}),f={class:"card-list"},_=["onClick"],j={class:"card-image"},k=["src"],C={class:"card-content"};function y(t,e,a,d,g,u){return c(),r("div",f,[s("ul",null,[(c(!0),r(h,null,w(t.cardList,(i,m)=>(c(),r("li",{key:m},[s("div",{class:"card",onClick:F=>t.handleClick(i.url)},[s("div",j,[s("img",{src:i.imageSrc,alt:"cdn-error"},null,8,k)]),s("div",C,[s("h2",null,n(i.title),1),s("p",null,n(i.description),1)])],8,_)]))),128))])])}const x=o(v,[["render",y],["__scopeId","data-v-cf3c7d54"]]),$=[[{title:"Vue",description:"一个轻量级的渐进式框架",imageSrc:"https://vuejs.org/images/logo.png",url:"https://cn.vuejs.org/"},{title:"React",description:"一个单向数据流的Javascript库",imageSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",url:"https://react.zcopy.site/"},{title:"Angular",description:"一个优秀的现代 Web 开发平台",imageSrc:"https://angular.io/assets/images/logos/angular/angular.svg",url:"https://angular.cn/"}],[{title:"Vite",description:"下一代前端开发与构建工具",imageSrc:"https://vitejs.dev/logo.svg",url:"https://vitejs.cn/"},{title:"Webpack",description:"JavaScript 应用程序的 静态模块打包工具",imageSrc:"https://webpack.js.org/assets/icon-square-big.svg",url:"https://webpack.docschina.org/"},{title:"Glup",description:"自动化构建工具",imageSrc:"https://gulpjs.com/img/gulp.svg",url:"https://www.gulpjs.com.cn/"},{title:"Rollup",description:"JavaScript模块打包器",imageSrc:"https://rollupjs.org/assets/logo.svg",url:"https://rollupjs.org/"}],[{title:"减少HTTP请求",description:"通过合并文件、使用雪碧图（CSS Sprites）、内联资源等技术，减少浏览器与服务器的交互次数，显著提升页面加载速度。常见工具包括 Webpack、Rollup 等打包工具。",imageSrc:"https://cdn.optimizely.com/static/129843/docs/1562772537281/HTTP_Request_Model.png",url:"https://webpack.js.org/guides/performance/"},{title:"压缩代码",description:"通过代码压缩工具（如 Terser、UglifyJS）去除冗余字符、缩短变量名，在不影响功能的前提下减小文件体积，降低带宽消耗并提升加载效率。",imageSrc:"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Wz9kF7ZkQ8zKz6qQl7uQ7A.png",url:"https://github.com/mishoo/UglifyJS2"},{title:"CDN（内容分发网络）",description:"通过分布式服务器节点缓存静态资源（如 JS、CSS、图片），使用户就近获取资源，减少延迟，提升网站全球访问速度。主流 CDN 服务商包括 Cloudflare、Akamai 等。",imageSrc:"https://www.cloudflare.com/img/learning/cdn/what-is-a-cdn/cdn-diagram-1.png",url:"https://www.cloudflare.com/products/cdn/"}],[{title:"XSS",description:"XSS",imageSrc:"https://www.imperva.com/learn/wp-content/uploads/sites/13/2019/09/cross-site-scripting-xss.png",url:""},{title:"CSRF",description:"CSRF",imageSrc:"https://www.imperva.com/learn/wp-content/uploads/sites/13/2019/12/csrf-cross-site-request-forgery.png",url:""}],[{title:"Cypress",description:"一个易用的测试框架",imageSrc:"https://www.cypress.io/static/5a5715d01c6876619c3c897a1972d337/8f985/icon.svg",url:"https://www.cypress.io/"},{title:"Just",description:"一款优雅、简洁的 JavaScript 测试框架",imageSrc:"https://jestjs.io/img/jest.svg",url:"https://jestjs.io/zh-Hans/"}],[{title:"Jenkins",description:"开源的自动化服务器",imageSrc:"https://www.jenkins.io/images/logos/jenkins/jenkins.svg",url:"https://www.jenkinschina.com/"},{title:"Docker",description:"开源的自动化服务器",imageSrc:"https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",url:"http://docker.p2hp.com/"},{title:"Nginx",description:"Nginx",imageSrc:"https://nginx.org/nginx.png",url:"http://nginx.org/"}],[{title:"Uniapp",description:"开发一次，多端使用",imageSrc:"https://uniapp.dcloud.net.cn/img/logo.png",url:"https://uniapp.dcloud.net.cn/"},{title:"Flutter",description:"Flutter",imageSrc:"https://flutter.dev/images/flutter-logo-sharing.png",url:"https://flutter.dev/"},{title:"React Native",description:"原生开发的最佳部分与 React 相结合",imageSrc:"https://reactnative.dev/img/header_logo.svg",url:"https://reactnative.cn/"}],[{title:"D3.js",description:"D3",imageSrc:"https://d3js.org/d3.v7.min.js",url:"https://d3js.org/"},{title:"Echarts",description:"一个基于 JavaScript 的开源可视化图表库",imageSrc:"https://echarts.apache.org/zh/images/echarts-logo.png",url:"https://echarts.apache.org/zh/index.html"},{title:"Three.js",description:"Three",imageSrc:"https://threejs.org/files/favicon.png",url:"https://threejs.org/"}],[{title:"无障碍设计",description:"无障碍设计",imageSrc:"https://www.w3.org/WAI/wai-intro.jpg",url:"https://cn.vuejs.org/"}]],b=p({name:"Frame",components:{CardList:x},setup(){let t="",e=[];if(!(typeof window>"u"))return t=window.location.search.split("=")[1],e=$[t],{list:e}}});function J(t,e,a,d,g,u){const i=S("card-list");return c(),r("div",null,[l(i,{"card-list":t.list},null,8,["card-list"])])}const R=o(b,[["render",J]]),N=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"page/frame/index.md","filePath":"page/frame/index.md","lastUpdated":1709188668000}'),z={name:"page/frame/index.md"},T=Object.assign(z,{setup(t){return(e,a)=>(c(),r("div",null,[l(R)]))}});export{N as __pageData,T as default};
