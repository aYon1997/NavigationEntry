import{_ as m,d as u,h as k,l as b,A as f,o as s,c as i,m as r,J as _}from"./chunks/framework.BUSNcBrn.js";const d=["aHR0cHM6Ly92Z2JpeGE3bnI5LmZlaXNodS5jbi9kb2N4L0pVbVBkQXdZVW93MXREeENaeFNjZkc4cm5sZg==","aHR0cHM6Ly9jYXRlcnBpbGxhcmZseXMuZ2l0aHViLmlvL2hhbmR3cml0aW5nLWJhc2Uv","aHR0cHM6Ly9naXRodWIuY29tL0NhdGVycGlsbGFyZmx5cw==","aHR0cHM6Ly9zaWduaW5zdXBwb3J0Lm5ldC93d3ctZmFjZWJvb2stY29tLWxvZ2luLXNpZ25pbi8=","aHR0cHM6Ly9naXRtaW5kLmNuL2FwcC9kb2NzL21mdXB3eHZj"],h="/notes/assets/sun.DprODvKm.gif",L=u({name:"Home",setup(){const t=k(!1),a=()=>{let e=prompt("请输入密码");e&&e.includes("token")&&d[e.slice(-1)]&&window?window.location.href=atob(d[e.slice(-1)]):alert("密码错误！")},o=()=>{a()};return b(()=>{const e=new MutationObserver(c=>{c.forEach(n=>{if(n.attributeName==="class"){const p=n.target;t.value=p.classList.contains("dark")}})}),l=document.documentElement;e.observe(l,{attributes:!0}),f(()=>{e.disconnect()})}),{isDarkTheme:t,onMaskClick:o}}}),g={class:"theme-container"},y={key:0},v={key:1,src:h};function N(t,a,o,e,l,c){return s(),i("div",null,[r("div",g,[t.isDarkTheme?(s(),i("div",y," 晚安，玛卡玛卡！ ")):(s(),i("img",v))]),r("div",{class:"theme-mask",onClick:a[0]||(a[0]=(...n)=>t.onMaskClick&&t.onMaskClick(...n))})])}const H=m(L,[["render",N],["__scopeId","data-v-ea10cae8"]]),T=JSON.parse('{"title":"BASIC","titleTemplate":"NETBOOK","description":"","frontmatter":{"layout":"home","title":"BASIC","titleTemplate":"NETBOOK","hero":{"name":"LET","text":"IDEAS FLY","tagline":"WORKDTYLE","actions":[{"theme":"brand","text":"回到上次阅读位置","link":"/page/location/?source=1"}]},"features":[{"icon":"🌠","title":"主流框架","details":"Vue 、 React 、Angular <br> ...","link":"/page/frame/?type=0"},{"icon":"📦","title":"打包工具","details":"Vite、Webpack、Glup、Rollup <br> ...","link":"/page/frame/?type=1"},{"icon":"✨","title":"性能优化","details":"减少HTTP请求、压缩代码、CDN <br> ...","link":"/page/frame/?type=2"},{"icon":"🔐","title":"前端安全","details":"XSS、CSRF <br> ...","link":"/page/frame/?type=3"},{"icon":"🤖","title":"前端测试","details":"Cypress、Just <br> ...","link":"/page/frame/?type=4"},{"icon":"🛠️","title":"前端运维","details":"Jenkins、Docker、Nginx <br> ...","link":"/page/frame/?type=5"},{"icon":"📲","title":"跨平台开发","details":"Uniapp、Flutter、React Native <br> ...","link":"/page/frame/?type=6"},{"icon":"📊","title":"数据可视化","details":"D3.js、Echarts、Three.js <br> ...","link":"/page/frame/?type=7"},{"icon":"🔍","title":"可访问性","details":"无障碍设计 <br> ...","link":"/page/frame/?type=8"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1709222776000}'),R={name:"index.md"},Z=Object.assign(R,{setup(t){return(a,o)=>(s(),i("div",null,[_(H)]))}});export{T as __pageData,Z as default};
