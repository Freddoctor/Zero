webpackJsonp([11],{"M6S+":function(e,o){},XKGt:function(e,o){},XPtW:function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=s("uAC3"),t=s.n(r),n={data:function(){return{errorMes:"",seen:!1,disabled:!0,single:!0,form:{userName:"",password:""},rules:{userName:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]}}},created:function(){this.form.userName=t.a.get("myUserName"),this.form.password=t.a.get("mypassWord"),console.log(this.form.userName),console.log(this.form.password),void 0==this.form.userName&&void 0==this.form.password?(console.log(this.form.userName),this.single=!1,console.log(this.single)):this.single=!0},methods:{submit:function(){var e=this,o="/user/userLogin.json?userName="+this.form.userName+"&password="+this.form.password;this.$Http.post(o,{}).then(function(o){console.log(o),console.log(o.body.data.token),console.log(o.body.msg),0==o.body.status?(e.seen=!1,window.sessionStorage.setItem("token",o.body.data.token),window.sessionStorage.setItem("userName",e.form.userName),e.$router.push({path:"/homePage"})):400==o.body.status&&(e.seen=!0,e.errorMes=o.body.msg)})},remember:function(e){console.log(e),console.log(this.single),1==this.single?(t.a.set("myUserName",this.form.userName,{expires:30}),t.a.set("mypassWord",this.form.password,{expires:30})):(t.a.remove("myUserName"),t.a.remove("mypassWord"));var o=t.a.get("myUserName"),s=t.a.get("mypassWord");console.log(o+"＝＝   "+s)}}},a={render:function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("div",{staticClass:"login"},[s("div",{staticClass:"login-con"},[s("Card",{attrs:{bordered:!1}},[s("p",{attrs:{slot:"title"},slot:"title"},[s("Icon",{attrs:{type:"log-in"}}),e._v("\n                欢迎登录\n            ")],1),e._v(" "),s("div",{staticClass:"form-con"},[s("Form",{ref:"loginForm",attrs:{model:e.form,rules:e.rules}},[s("FormItem",{attrs:{prop:"userName"}},[s("Input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form.userName,callback:function(o){e.$set(e.form,"userName",o)},expression:"form.userName"}},[s("span",{attrs:{slot:"prepend"},slot:"prepend"},[s("Icon",{attrs:{size:16,type:"person"}})],1)])],1),e._v(" "),s("FormItem",{attrs:{prop:"password"}},[s("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(o){e.$set(e.form,"password",o)},expression:"form.password"}},[s("span",{attrs:{slot:"prepend"},slot:"prepend"},[s("Icon",{attrs:{size:14,type:"locked"}})],1)])],1),e._v(" "),s("Checkbox",{attrs:{label:"rem"},on:{"on-change":e.remember},model:{value:e.single,callback:function(o){e.single=o},expression:"single"}},[e._v("记住密码")]),e._v(" "),e.seen?s("p",{staticClass:"login-tip"},[e._v(e._s(e.errorMes))]):e._e(),e._v(" "),s("FormItem",[s("Button",{attrs:{type:"primary",long:""},on:{click:e.submit}},[e._v("登录")])],1)],1)],1)])],1)])},staticRenderFns:[]};var i=s("vSla")(n,a,!1,function(e){s("M6S+"),s("XKGt")},null,null);o.default=i.exports},uAC3:function(e,o,s){var r,t;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(n){if(void 0===(t="function"==typeof(r=n)?r.call(o,s,o,e):r)||(e.exports=t),!0,e.exports=n(),!!0){var a=window.Cookies,i=window.Cookies=n();i.noConflict=function(){return window.Cookies=a,i}}}(function(){function e(){for(var e=0,o={};e<arguments.length;e++){var s=arguments[e];for(var r in s)o[r]=s[r]}return o}return function o(s){function r(o,t,n){var a;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(n=e({path:"/"},r.defaults,n)).expires){var i=new Date;i.setMilliseconds(i.getMilliseconds()+864e5*n.expires),n.expires=i}n.expires=n.expires?n.expires.toUTCString():"";try{a=JSON.stringify(t),/^[\{\[]/.test(a)&&(t=a)}catch(e){}t=s.write?s.write(t,o):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),o=(o=(o=encodeURIComponent(String(o))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var l="";for(var c in n)n[c]&&(l+="; "+c,!0!==n[c]&&(l+="="+n[c]));return document.cookie=o+"="+t+l}o||(a={});for(var m=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,u=0;u<m.length;u++){var d=m[u].split("="),f=d.slice(1).join("=");this.json||'"'!==f.charAt(0)||(f=f.slice(1,-1));try{var g=d[0].replace(p,decodeURIComponent);if(f=s.read?s.read(f,g):s(f,g)||f.replace(p,decodeURIComponent),this.json)try{f=JSON.parse(f)}catch(e){}if(o===g){a=f;break}o||(a[g]=f)}catch(e){}}return a}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(o,s){r(o,"",e(s,{expires:-1}))},r.withConverter=o,r}(function(){})})}});
//# sourceMappingURL=11.c776c66076523c73b2cb.js.map