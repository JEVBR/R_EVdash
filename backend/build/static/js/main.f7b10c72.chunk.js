(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),a=t(2),r=t.n(a),l=t(3),s=t(4);function u(){var e=Object(o.useState)([]),n=Object(s.a)(e,2),t=n[0];n[1];return Object(o.useEffect)((function(){console.log("---------------------------- DATA -----------------------------------"),console.log(t),console.log("---------------------------------------------------------------------")}),[t]),c.a.createElement("div",null,"Dash")}var i=new l.w3cwebsocket("ws://127.0.0.1:8000");var f=function(){return Object(o.useEffect)((function(){i.onopen=function(){console.log("WebSocket Client Connected")},i.onmessage=function(e){console.log(e)}}),[]),c.a.createElement("div",{className:"container pb-5",key:"app_container"},c.a.createElement(u,{key:"Dashboard"}))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))},5:function(e,n,t){e.exports=t(13)}},[[5,1,2]]]);
//# sourceMappingURL=main.f7b10c72.chunk.js.map