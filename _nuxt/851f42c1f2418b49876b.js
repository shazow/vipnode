/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(t,e,n){"use strict";var r=n(36);n.n(r).a},127:function(t,e,n){"use strict";var r=n(37);n.n(r).a},128:function(t,e,n){},129:function(t,e,n){t.exports=n.p+"img/74a348a.png"},130:function(t,e,n){"use strict";n.r(e);n(57),n(86),n(87);var r=n(20),o=n.n(r),i=(n(41),n(38),n(78),n(4)),a=n.n(i),s=(n(93),n(94),n(70),n(51),n(56),n(71),n(98),n(110),n(0)),u={},c=(n(111),n(112),n(113),n(115),n(117),n(79),n(119),n(121),n(21)),p=n.n(c),l=function(){return{}};function h(t){return t.then(function(t){return t.default||t})}function f(t,e){var n=t.options.data||l;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),p()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function d(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function m(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function v(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function x(t){return Promise.all(v(t,function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=d(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function g(t){return y.apply(this,arguments)}function y(){return(y=a()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:return t.abrupt("return",p()({},e,{meta:m(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function _(t,e){return w.apply(this,arguments)}function w(){return(w=a()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{poolAPI:"https://pool.vipnode.org/"}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var i=o()(n);if("number"==typeof t||"undefined"!==i&&"object"!==i||(r=n||{},n=t,i=o()(n),t=302),"object"===i&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=j(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,g(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,g(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function b(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function C(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),decodeURI(n||"/")+window.location.search+window.location.hash)}function k(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},s=a.pretty?T:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var p=i[c.name||"pathMatch"],l=void 0;if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(l=s(p[h]),!e[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===h?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(p),!e[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,i=0,a="",s=e&&e.delimiter||"/";for(;null!=(n=R.exec(t));){var u=n[0],c=n[1],p=n.index;if(a+=t.slice(i,p),i=p+u.length,c)a+=c[1];else{var l=t[i],h=n[2],f=n[3],d=n[4],m=n[5],v=n[6],x=n[7];a&&(r.push(a),a="");var g=null!=h&&null!=l&&l!==h,y="+"===v||"*"===v,_="?"===v||"*"===v,w=n[2]||s,b=d||m;r.push({name:f||o++,prefix:h||"",delimiter:w,optional:_,repeat:y,partial:g,asterisk:!!x,pattern:b?A(b):x?".*":"[^"+S(w)+"]+?"})}}i<t.length&&(a+=t.substr(i));a&&r.push(a);return r}(t,e))}function $(t,e){var n={},r=p()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function E(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var R=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function T(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function S(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function j(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,i=t.split("/"),a=(n?n+"://":"//")+i.shift(),s=i.filter(Boolean).join("/");return 2===(i=s.split("#")).length&&(s=i[0],o=i[1]),a+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(a+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),a+=o?"#"+o:""}var q=n(76),N=n.n(q),P=n(53),O=function(){return h(n.e(2).then(n.bind(null,153)))},D=function(){return h(n.e(3).then(n.bind(null,151)))},M=function(){return h(n.e(4).then(n.bind(null,154)))},L=function(){return h(Promise.all([n.e(10),n.e(6)]).then(n.bind(null,148)))},I=function(){return h(n.e(7).then(n.bind(null,152)))},B=function(){return h(Promise.all([n.e(11),n.e(8)]).then(n.bind(null,150)))},U=function(){return h(n.e(5).then(n.bind(null,149)))};s.a.use(P.a),window.history.scrollRestoration="manual";var J=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var K=n(77),Q=n.n(K).a,z={name:"nuxt-child",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean},render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var i=n,a=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=a[u]||s,p={};F.forEach(function(t){void 0!==c[t]&&(p[t]=c[t])});var l={};H.forEach(function(t){"function"==typeof c[t]&&(l[t]=c[t].bind(i))});var h=l.beforeEnter;l.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),h)return h.call(i,t)};var f=[t("router-view",r)];return o.keepAlive&&(f=[t("keep-alive",{props:o.keepAliveProps},f)]),t("transition",{props:p,on:l},f)}},F=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],H=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],V={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},G={name:"nuxt-error",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},X=(n(126),n(14)),W=Object(X.a)(G,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);W.options.__file="nuxt-error.vue";var Y=W.exports,Z={name:"nuxt",props:{nuxtChildKey:String,keepAlive:Boolean},render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||k(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:z,NuxtError:Y}},tt={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},et=(n(127),Object(X.a)(tt,void 0,void 0,!1,null,null,null));et.options.__file="nuxt-loading.vue";var nt=et.exports,rt=(n(128),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"five columns",attrs:{id:"logo-container"}},[e("h1",{attrs:{id:"vipnode"}},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:n(129),alt:"vipnode",id:"vipnode-logo"}})])]),this._v(" "),e("h2",{staticClass:"hidden-md-down"},[this._v("Economic incentive for running Ethereum nodes.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"hidden-md-up"},[e("a",{staticClass:"button-primary button",attrs:{href:"https://github.com/vipnode/vipnode#readme"}},[this._v("Download")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://medium.com/vipnode"}},[this._v("Blog")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"button button-primary button-small",attrs:{href:"https://github.com/vipnode/vipnode#readme"}},[this._v("Try it now")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://github.com/vipnode"}},[this._v("Source code")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"/#newsletter"}},[this._v("Get updates")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"https://medium.com/vipnode"}},[this._v("Blog")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-newsletter six columns"},[e("p",[this._v("\n          Get notifications of features or breaking changes\n        ")]),this._v(" "),e("form",{attrs:{action:"https://tinyletter.com/vipnode",method:"post",target:"popupwindow",onsubmit:"window.open('https://tinyletter.com/vipnode', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"}},[e("input",{staticClass:"input-text",attrs:{type:"text",name:"email",id:"tlemail",placeholder:"satoshin@gmx.com"}}),this._v(" "),e("input",{attrs:{type:"hidden",value:"1",name:"embed"}}),this._v(" "),e("input",{staticClass:"button-primary button-small",attrs:{type:"submit",value:"Subscribe"}})]),this._v(" "),e("p",[this._v("Made with 🍁 in Toronto, Canada")])])}]),ot=Object(X.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"nav row"},[t._m(0),t._v(" "),n("nav",{staticClass:"seven columns"},[n("ul",[t._m(1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/faq"}},[t._v("FAQ")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/status"}},[t._v("Status")])],1),t._v(" "),t._m(2),t._v(" "),n("li",{staticClass:"hidden-md-down"},[n("nuxt-link",{staticClass:"button-primary button",attrs:{to:"https://github.com/vipnode/vipnode#readme"}},[t._v("Download")])],1)])])]),t._v(" "),n("nuxt"),t._v(" "),n("div",{attrs:{id:"footer"}},[n("nav",{staticClass:"row"},[n("ul",{staticClass:"six columns"},[t._m(3),t._v(" "),t._m(4),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/docs"}},[t._v("Docs + support")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/status"}},[t._v("Status")])],1),t._v(" "),t._m(5),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),t._m(6),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/faq"}},[t._v("FAQ")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/press"}},[t._v("Press")])],1)]),t._v(" "),t._m(7)])])],1)},rt,!1,null,null,null);ot.options.__file="default.vue";var it={_default:ot.exports},at={head:{titleTemplate:"%s · Vipnode",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{property:"og:type",content:"website"},{property:"og:image",name:"twitter:image",content:"https://vipnode.org/img/preview-card.png"},{name:"twitter:card",content:"summary_large_image"}],link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=PT+Mono|PT+Sans:400,700"},{rel:"shortcut icon",href:"/img/icon-32px.png"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),i=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,i])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&it["_"+t]||(t="default"),this.layoutName=t,this.layout=it["_"+t],this.layout},loadLayout:function(t){return t&&it["_"+t]||(t="default"),Promise.resolve(it["_"+t])}},components:{NuxtLoading:nt}};s.a.component(Q.name,Q),s.a.component(z.name,z),s.a.component(V.name,V),s.a.component(Z.name,Z),s.a.use(N.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var st={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function ut(){return(ut=a()(regeneratorRuntime.mark(function t(e){var n,r,o,i,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new P.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:J,routes:[{path:"/about",component:O,name:"about"},{path:"/docs",component:D,name:"docs"},{path:"/faq",component:M,name:"faq"},{path:"/pool",component:L,name:"pool"},{path:"/press",component:I,name:"press"},{path:"/status",component:B,name:"status"},{path:"/",component:U,name:"index"}],fallback:!1});case 2:return n=t.sent,r=p()({router:n,nuxt:{defaultTransition:st,transitions:[st],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},st,{name:t}):Object.assign({},st,t):st}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,t=t?E(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},at),o=e?e.next:function(t){return r.router.push(t)},e?i=n.resolve(e.url).route:(a=C(n.options.base),i=n.resolve(a).route),t.next=8,_(r,{route:i,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:t.next=11;break;case 11:return t.abrupt("return",{app:r,router:n});case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var ct,pt,lt=[],ht=window.__NUXT__||{};function ft(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function dt(t,e,n){return mt.apply(this,arguments)}function mt(){return(mt=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!ct.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?$(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,x(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,error),r(!1);case 17:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function vt(t,e){return ht.serverRendered&&e&&f(t,e),t._Ctor=t,t}function xt(t,e,n){var r=this,o=[],i=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof u[t]&&(i=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),u[t])}),!i)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():b(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function gt(t,e,n){return yt.apply(this,arguments)}function yt(){return(yt=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i,a,u,c,p,l,h,d,v,x,g,y,w,C,$,E=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return lt=e===n?[]:m(n,o=[]).map(function(t,e){return k(n.matched[o[e]].path)(n.params)}),i=!1,a=function(t){n.path===t.path&&E.$loading.finish&&E.$loading.finish(),n.path!==t.path&&E.$loading.pause&&E.$loading.pause(),i||(i=!0,r(t))},t.next=7,_(ct,{route:e,from:n,next:a.bind(this)});case 7:if(this._dateLastError=ct.nuxt.dateErr,this._hadError=!!ct.nuxt.err,(c=m(e,u=[])).length){t.next=25;break}return t.next=14,xt.call(this,c,ct.context);case 14:if(!i){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof Y.layout?Y.layout(ct.context):Y.layout);case 18:return p=t.sent,t.next=21,xt.call(this,c,ct.context,p);case 21:if(!i){t.next=23;break}return t.abrupt("return");case 23:return ct.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(ft(c,e,n)),t.prev=27,t.next=30,xt.call(this,c,ct.context);case 30:if(!i){t.next=32;break}return t.abrupt("return");case 32:if(!ct.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(l=c[0].options.layout)&&(l=l(ct.context)),t.next=38,this.loadLayout(l);case 38:return l=t.sent,t.next=41,xt.call(this,c,ct.context,l);case 41:if(!i){t.next=43;break}return t.abrupt("return");case 43:if(!ct.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:h=!0,t.prev=46,d=!0,v=!1,x=void 0,t.prev=50,g=c[Symbol.iterator]();case 52:if(d=(y=g.next()).done){t.next=64;break}if("function"==typeof(w=y.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,w.options.validate(ct.context);case 58:if(h=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:d=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),v=!0,x=t.t0;case 70:t.prev=70,t.prev=71,d||null==g.return||g.return();case 73:if(t.prev=73,!v){t.next=76;break}throw x;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(h){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=k(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,E._pathChanged&&E._queryChanged||t._path!==lt[n])t._dataRefresh=!0;else if(!E._pathChanged&&E._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return E._diffQuery[t]}))}if(!E._hadError&&E._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],i=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch,s=i&&a?30:45;if(i){var c=b(t.options.asyncData,ct.context).then(function(e){f(t,e),E.$loading.increase&&E.$loading.increase(s)});o.push(c)}if(E.$loading.manual=!1===t.options.loading,a){var p=t.options.fetch(ct.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){E.$loading.increase&&E.$loading.increase(s)}),o.push(p)}return Promise.all(o)}));case 89:i||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(C=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,C));case 97:return lt=[],R=C,s.a.config.errorHandler&&s.a.config.errorHandler(R),"function"==typeof($=Y.layout)&&($=$(ct.context)),t.next=103,this.loadLayout($);case 103:this.error(C),this.$nuxt.$emit("routeChanged",e,n,C),r(!1);case 106:case"end":return t.stop()}var R},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function _t(t,e){v(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function wt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?Y.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(ct.context)),this.setLayout(e)}function bt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=m(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),wt.call(n,t)})}function Ct(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),pt.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function kt(){return(kt=a()(regeneratorRuntime.mark(function t(e){var n,r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return ct=e.app,pt=e.router,t.next=4,Promise.all((c=void 0,c=C((u=pt).options.base,u.options.mode),v(u.match(c),function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o,i){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return a=vt(d(e),ht.data?ht.data[i]:null),r.components[o]=a,t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,i){return t.apply(this,arguments)}}())));case 4:return n=t.sent,r=new s.a(ct),o=ht.layout||"default",t.next=9,r.loadLayout(o);case 9:if(r.setLayout(o),i=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){Ct(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(ft(n,pt.currentRoute)),lt=pt.currentRoute.matched.map(function(t){return k(t.path)(pt.currentRoute.params)})),r.$loading={},ht.error&&r.error(ht.error),pt.beforeEach(dt.bind(r)),pt.beforeEach(gt.bind(r)),pt.afterEach(_t),pt.afterEach(bt.bind(r)),!ht.serverRendered){t.next=22;break}return i(),t.abrupt("return");case 22:gt.call(r,pt.currentRoute,pt.currentRoute,function(t){if(!t)return _t(pt.currentRoute,pt.currentRoute),wt.call(r,pt.currentRoute),void i();pt.push(t,function(){return i()},function(t){if(!t)return i();console.error(t)})});case 23:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.a.config,{silent:!0,performance:!1}),function(t){return ut.apply(this,arguments)}().then(function(t){return kt.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},36:function(t,e,n){},37:function(t,e,n){},77:function(t,e,n){"use strict";var r={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,o=e.props,i=r(),a=i.default;void 0===a&&(a=[]);var s=i.placeholder;return n._isMounted?a:(n.$once("hook:mounted",function(){n.$forceUpdate()}),o.placeholderTag&&(o.placeholder||s)?t(o.placeholderTag,{class:["no-ssr-placeholder"]},o.placeholder||s):a.length>0?a.map(function(){return t(!1)}):t(!1))}};t.exports=r},81:function(t,e,n){t.exports=n(130)}},[[81,9,1]]]);