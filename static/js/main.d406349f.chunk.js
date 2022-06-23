(this.webpackJsonpadvertapp=this.webpackJsonpadvertapp||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},21:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(13),c=n.n(l),u=(n(21),n(2));var o=function(e){var t,n,l=Object(a.useState)(!1),c=Object(u.a)(l,2),o=c[0],i=c[1];return r.a.createElement(r.a.Fragment,null,e.currentAd?"Update":"Add",r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),i(!0),(e.currentAd?e.client.updateAd(e.currentAd._id,t.target.adName.value,t.target.price.value):e.client.addAd(t.target.adName.value,t.target.price.value)).then((function(){i(!1),document.getElementById("addForm").reset(),e.refreshList()})).catch((function(){alert("an error occured, please try again"),i(!1)}))}(t)},id:"addForm"},"Name: ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",defaultValue:null===(t=e.currentAd)||void 0===t?void 0:t.name,name:"adName",disabled:o}),r.a.createElement("br",null),"Price:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",defaultValue:null===(n=e.currentAd)||void 0===n?void 0:n.price,name:"price",disabled:o}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",disabled:o}," ","Submit"," ")))};var i=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)(void 0),d=Object(u.a)(i,2),m=d[0],s=d[1],b=function(){e.client.getAds().then((function(e){return c(e.data)}))};return Object(a.useEffect)((function(){b()}),[]),r.a.createElement(r.a.Fragment,null,"Dashboard",r.a.createElement("br",null),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Advert Name"),r.a.createElement("th",null,"Price"))),r.a.createElement("tbody",null,l.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,"\xa3",t.price),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return n=t._id,void e.client.removeAd(n).then((function(){return b()}));var n}}," remove"),r.a.createElement("button",{onClick:function(){s(t)}}," update")))})))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(o,{client:e.client,refreshList:function(){b(),s(void 0)},currentAd:m}))},d=n(14),m=n(15),s=n(3),b=n.n(s),f="http://localhost:3001/",h=function(){function e(t,n){Object(d.a)(this,e),this.token=t,this.logoutHandler=n}return Object(m.a)(e,[{key:"authenticatedCall",value:function(e,t,n){var a=this;return b()({method:e,url:t,headers:{authorization:this.token},data:n}).catch((function(e){if(403==e.response.status)return a.logoutHandler(),Promise.reject();throw e}))}},{key:"apiCall",value:function(e,t,n){return b()({method:e,url:t,data:n}).catch((function(e){throw e}))}},{key:"login",value:function(e,t){return this.apiCall("post","".concat(f,"auth"),{userName:e,password:t})}},{key:"getAds",value:function(){return this.authenticatedCall("get",f)}},{key:"addAd",value:function(e,t){return this.authenticatedCall("post",f,{name:e,price:t})}},{key:"removeAd",value:function(e){return this.authenticatedCall("delete","".concat(f).concat(e))}},{key:"updateAd",value:function(e,t,n){return this.authenticatedCall("put","".concat(f).concat(e),{name:t,price:n})}}]),e}();var p=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),l=n[0],c=n[1];return r.a.createElement(r.a.Fragment,null,"Login",r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(t){return function(t){console.log("submit"),t.preventDefault(),c(!0),e.client.login(t.target.username.value,t.target.password.value).then((function(t){c(!1),e.loggedIn(t.data.token)})).catch((function(e){alert("an error has occurred, please try again later"),console.log("Login error",e),c(!1)}))}(t)}},"username",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"username",disabled:l}),r.a.createElement("br",null),"password",r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",disabled:l}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",disabled:l}," ","Submit"," ")))};var E=function(){var e=Object(a.useState)(window.localStorage.getItem("token")),t=Object(u.a)(e,2),n=t[0],l=t[1],c=new h(n,(function(){window.localStorage.removeItem("token"),l(void 0)}));return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(i,{client:c}):r.a.createElement(p,{loggedIn:function(e){window.localStorage.setItem("token",e),l(e)},client:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.d406349f.chunk.js.map