import{F as ee,I as _,j as te,i as N}from"./index-7c84ada7.js";import{e as i,x as A,a6 as I,r as R,y as F,z as G,A as C}from"./runtime-core.esm-bundler-5e6ff93b.js";import{$ as w,a6 as ne,p as oe,I as V,U as f,J as c,a5 as ae,K as Q,a7 as ue,N as re,a8 as z,z as se,a9 as le}from"./index-378eefdf.js";import{d as ie,u as fe}from"./vue-router-6a953c55.js";function de(){const{$storage:t,$config:e}=w(),o=()=>{ne().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=oe),t.layout||(t.layout={layout:(e==null?void 0:e.Layout)??"vertical",theme:(e==null?void 0:e.Theme)??"default",darkMode:(e==null?void 0:e.DarkMode)??!1,sidebarStatus:(e==null?void 0:e.SidebarStatus)??!0,epThemeColor:(e==null?void 0:e.EpThemeColor)??"#409EFF"}),t.configure||(t.configure={grey:(e==null?void 0:e.Grey)??!1,weak:(e==null?void 0:e.Weak)??!1,hideTabs:(e==null?void 0:e.HideTabs)??!1,showLogo:(e==null?void 0:e.ShowLogo)??!0,showModel:(e==null?void 0:e.ShowModel)??"smart",multiTagsCache:(e==null?void 0:e.MultiTagsCache)??!1})},n=i(()=>t==null?void 0:t.layout.layout),u=i(()=>t.layout);return{layout:n,layoutTheme:u,initStorage:o}}const ce=V({id:"pure-app",state:()=>{var t,e;return{sidebar:{opened:((t=f().getItem("responsive-layout"))==null?void 0:t.sidebarStatus)??c().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:((e=f().getItem("responsive-layout"))==null?void 0:e.layout)??c().Layout,device:ae()?"mobile":"desktop"}},getters:{getSidebarStatus(){return this.sidebar.opened},getDevice(){return this.device}},actions:{TOGGLE_SIDEBAR(t,e){const o=f().getItem("responsive-layout");t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,o.sidebarStatus=!0):!t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,o.sidebarStatus=!1):!t&&!e&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,o.sidebarStatus=this.sidebar.opened),f().setItem("responsive-layout",o)},async toggleSideBar(t,e){await this.TOGGLE_SIDEBAR(t,e)},toggleDevice(t){this.device=t},setLayout(t){this.layout=t}}});function me(){return ce(Q)}const he=V({id:"pure-epTheme",state:()=>{var t,e;return{epThemeColor:((t=f().getItem("responsive-layout"))==null?void 0:t.epThemeColor)??c().EpThemeColor,epTheme:((e=f().getItem("responsive-layout"))==null?void 0:e.theme)??c().Theme}},getters:{getEpThemeColor(){return this.epThemeColor},fill(){return this.epTheme==="light"?"#409eff":this.epTheme==="yellow"?"#d25f00":"#fff"}},actions:{setEpThemeColor(t){const e=f().getItem("responsive-layout");this.epTheme=e==null?void 0:e.theme,this.epThemeColor=t,e&&(e.epThemeColor=t,f().setItem("responsive-layout",e))}}});function x(){return he(Q)}function _e(t,e){const o=/^IF-/;if(o.test(t)){const n=t.split(o)[1],u=n.slice(0,n.indexOf(" ")==-1?n.length:n.indexOf(" ")),l=n.slice(n.indexOf(" ")+1,n.length);return A({name:"FontIcon",render(){return I(ee,{icon:u,iconType:l,...e})}})}else return typeof t=="function"||typeof(t==null?void 0:t.render)=="function"?t:typeof t=="object"?A({name:"OfflineIcon",render(){return I(_,{icon:t,...e})}}):A({name:"Icon",render(){const n=t&&t.includes(":")?te:_;return I(n,{icon:t,...e})}})}const P="当前路由配置不正确，请检查配置";function Ne(){var H;const t=ie(),e=me(),o=fe().options.routes,{wholeMenus:n}=ue(re()),u=((H=c())==null?void 0:H.TooltipEffect)??"light",l=i(()=>{var a;return(a=z())==null?void 0:a.username}),v=i(()=>l.value?{marginRight:"10px"}:""),$=i(()=>!e.getSidebarStatus),T=i(()=>e.getDevice),{$storage:m,$config:y}=w(),s=i(()=>{var a;return(a=m==null?void 0:m.layout)==null?void 0:a.layout}),r=i(()=>y.Title);function d(a){const h=c().Title;h?document.title=`${a.title} | ${h}`:document.title=a.title}function M(){z().logOut()}function B(){se.push("/welcome")}function J(){N.emit("openPanel")}function K(){e.toggleSideBar()}function q(a){a==null||a.handleResize()}function X(a){var b;if(!a.children)return console.error(P);const h=/^http(s?):\/\//,p=(b=a.children[0])==null?void 0:b.path;return h.test(p)?a.path+"/"+p:p}function Y(a,h){if(n.value.length===0||Z(a))return;let p="";const b=a.lastIndexOf("/");b>0&&(p=a.slice(0,b));function S(k,E){return E?E.map(g=>{g.path===k?g.redirect?S(g.redirect,g.children):N.emit("changLayoutRoute",{indexPath:k,parentPath:p}):g.children&&S(k,g.children)}):console.error(P)}S(a,h)}function Z(a){return le.includes(a)}return{route:t,title:r,device:T,layout:s,logout:M,routers:o,$storage:m,backHome:B,onPanel:J,changeTitle:d,toggleSideBar:K,menuSelect:Y,handleResize:q,resolvePath:X,isCollapse:$,pureApp:e,username:l,avatarsStyle:v,tooltipEffect:u}}const L={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"/home/runner/work/vue-pure-admin/vue-pure-admin/node_modules/.pnpm/@pureadmin+theme@3.0.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-default",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: #4091f7 !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-light",varsContent:`
        $subMenuActiveText: #409eff !default;
        $menuBg: #fff !default;
        $menuHover: #e0ebf6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: #e13c39 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: #e85f33 !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-yellow",varsContent:`
        $subMenuActiveText: #d25f00 !default;
        $menuBg: #2b2503 !default;
        $menuHover: #f6da4d !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #f6da4d !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #443b05 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #f6da4d !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: #59bfc1 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: #60ac80 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: #d84493 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: #693ac9 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `}]},pe="/",ge="assets";function U(t){let e=t.replace("#","").match(/../g);for(let o=0;o<3;o++)e[o]=parseInt(e[o],16);return e}function W(t,e,o){let n=[t.toString(16),e.toString(16),o.toString(16)];for(let u=0;u<3;u++)n[u].length==1&&(n[u]=`0${n[u]}`);return`#${n.join("")}`}function ve(t,e){let o=U(t);for(let n=0;n<3;n++)o[n]=Math.floor(o[n]*(1-e));return W(o[0],o[1],o[2])}function Te(t,e){let o=U(t);for(let n=0;n<3;n++)o[n]=Math.floor((255-o[n])*e+o[n]);return W(o[0],o[1],o[2])}function O(t){return`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`}function D({scopeName:t,multipleScopeVars:e}){const o=Array.isArray(e)&&e.length?e:L.multipleScopeVars;let n=document.documentElement.className;new RegExp(O(t)).test(n)||(o.forEach(u=>{n=n.replace(new RegExp(O(u.scopeName),"g"),` ${t} `)}),document.documentElement.className=n.replace(/(^\s+|\s+$)/g,""))}function j({id:t,href:e}){const o=document.createElement("link");return o.rel="stylesheet",o.href=e,o.id=t,o}function be(t){const e={scopeName:"theme-default",customLinkHref:l=>l,...t},o=e.themeLinkTagId||L.themeLinkTagId;let n=document.getElementById(o);const u=e.customLinkHref(`${pe.replace(/\/$/,"")}${`/${ge}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(n){n.id=`${o}_old`;const l=j({id:o,href:u});n.nextSibling?n.parentNode.insertBefore(l,n.nextSibling):n.parentNode.appendChild(l),l.onload=()=>{setTimeout(()=>{n.parentNode.removeChild(n),n=null},60),D(e)};return}n=j({id:o,href:u}),D(e),document[(e.themeLinkTagInjectTo||L.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(n)}function Re(){var y;const{layoutTheme:t,layout:e}=de(),o=R([{color:"#1b2a47",themeColor:"default"},{color:"#ffffff",themeColor:"light"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#fadb14",themeColor:"yellow"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"},{color:"#eb2f96",themeColor:"pink"},{color:"#722ed1",themeColor:"saucePurple"}]),{$storage:n}=w(),u=R((y=n==null?void 0:n.layout)==null?void 0:y.darkMode),l=document.documentElement;function v(s="default"){var r,d;if(t.value.theme=s,be({scopeName:`layout-theme-${s}`}),n.layout={layout:e.value,theme:s,darkMode:u.value,sidebarStatus:(r=n.layout)==null?void 0:r.sidebarStatus,epThemeColor:(d=n.layout)==null?void 0:d.epThemeColor},s==="default"||s==="light")T(c().EpThemeColor);else{const M=o.value.find(B=>B.themeColor===s);T(M.color)}}function $(s,r,d){document.documentElement.style.setProperty(`--el-color-primary-${s}-${r}`,u.value?ve(d,r/10):Te(d,r/10))}const T=s=>{x().setEpThemeColor(s),document.documentElement.style.setProperty("--el-color-primary",s);for(let r=1;r<=2;r++)$("dark",r,s);for(let r=1;r<=9;r++)$("light",r,s)};function m(){x().epTheme==="light"&&u.value?v("default"):v(x().epTheme),u.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return{body:l,dataTheme:u,layoutTheme:t,themeColors:o,dataThemeChange:m,setEpThemeColor:T,setLayoutThemeColor:v}}const $e={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},ye=C("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Ce=C("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"},null,-1),Me=[ye,Ce];function Be(t,e){return F(),G("svg",$e,Me)}const ze={render:Be},Se={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},ke=C("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Ae=C("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"},null,-1),Ie=[ke,Ae];function xe(t,e){return F(),G("svg",Se,Ie)}const Pe={render:xe};export{_e as a,Ne as b,Re as c,me as d,ze as e,Pe as f,de as g,be as t,x as u};
