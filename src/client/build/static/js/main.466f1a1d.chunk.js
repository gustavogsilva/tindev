(this["webpackJsonp@tindev/frontend"]=this["webpackJsonp@tindev/frontend"]||[]).push([[0],{119:function(e,t){},122:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(56),i=n.n(c),u=(n(68),n(20)),o=n(1),s=n(7),l=n.n(s),m=n(11),p=n(13),d=(n(70),n(57)),f=n.n(d),E=n(18),v=n.n(E);v.a.config();var b=f.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SERVER}),h=n(19),O=n.n(h);function g(e){var t=e.history,n=Object(a.useState)(""),c=Object(p.a)(n,2),i=c[0],u=c[1];function o(){return(o=Object(m.a)(l.a.mark((function e(n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,b.post("/devs",{username:i});case 3:a=e.sent,r=a.data._id,t.push("/dev/".concat(r));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"login-container"},r.a.createElement("form",{onSubmit:function(e){return o.apply(this,arguments)}},r.a.createElement("img",{src:O.a,alt:"Tindev"}),r.a.createElement("input",{placeholder:"Digite seu usu\xe1rio no Github",value:i,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Enviar")))}var _=n(58),S=n.n(_),y=(n(122),n(59)),k=n.n(y),j=n(60),x=n.n(j),T=n(61),C=n.n(T);function D(e){var t=e.match,n=Object(a.useState)([]),c=Object(p.a)(n,2),i=c[0],o=c[1],s=Object(a.useState)(null),d=Object(p.a)(s,2),f=d[0],E=d[1];function v(){return(v=Object(m.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.post("/devs/".concat(n,"/likes"),null,{headers:{user:t.params.id}});case 2:o(i.filter((function(e){return e._id!==n})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(m.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.post("/devs/".concat(n,"/dislikes"),null,{headers:{user:t.params.id}});case 2:o(i.filter((function(e){return e._id!==n})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/devs",{headers:{user:t.params.id}});case 2:n=e.sent,o(n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.params.id]),Object(a.useEffect)((function(){S()(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SERVER,{query:{user:t.params.id}}).on("match",(function(e){E(e)}))}),[t.params.id]),r.a.createElement("div",{className:"main-container"},r.a.createElement(u.b,{to:"/"},r.a.createElement("img",{src:O.a,alt:"Tindev"})),i.length>0?r.a.createElement("ul",null,i.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("img",{src:e.avatar,alt:e.name}),r.a.createElement("footer",null,r.a.createElement("strong",null,e.name),r.a.createElement("p",null,e.bio)),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",onClick:function(){return function(e){return h.apply(this,arguments)}(e._id)}},r.a.createElement("img",{src:k.a,alt:"Dislike"})),r.a.createElement("button",{type:"button",onClick:function(){return function(e){return v.apply(this,arguments)}(e._id)}},r.a.createElement("img",{src:x.a,alt:"Like"}))))}))):r.a.createElement("div",{className:"empty"},"Acabou :("),f&&r.a.createElement("div",{className:"match-container"},r.a.createElement("img",{src:C.a,alt:"It's a match"}),r.a.createElement("img",{className:"avatar",src:f.avatar,alt:""}),r.a.createElement("strong",null,f.name),r.a.createElement("p",null,f.bio),r.a.createElement("button",{type:"button",onClick:function(){return E(null)}},"FECHAR")))}function w(){return r.a.createElement(u.a,null,r.a.createElement(o.a,{path:"/",exact:!0,component:g}),r.a.createElement(o.a,{path:"/dev/:id",component:D}))}v.a.config();var N=function(){return r.a.createElement(w,null)};i.a.render(r.a.createElement(N,null),document.getElementById("root"))},19:function(e,t,n){e.exports=n.p+"static/media/logo.6a01ceef.svg"},59:function(e,t,n){e.exports=n.p+"static/media/dislike.d4ec34e8.svg"},60:function(e,t,n){e.exports=n.p+"static/media/like.542059a4.svg"},61:function(e,t,n){e.exports=n.p+"static/media/itsamatch.21c10b26.png"},63:function(e,t,n){e.exports=n(127)},68:function(e,t,n){},70:function(e,t,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.466f1a1d.chunk.js.map