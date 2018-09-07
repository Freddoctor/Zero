import Vue from 'vue'
import App from './App'
import router from './router'
//css 公共引用
import '@/assets/zero.plugin.css';
import VueLazyload from 'vue-lazyload' //懒加载插件

var PromiseS6 = require('es6-promise'); //promise 引用;

// import Velocity from 'velocity-animate' //velocity动画库

Vue.config.productionTip = false;

Vue.prototype.serialize = function(params) {
  var str = '';
  var arr = [];
  for (var key in params) {
    arr.push(key + "=" + params[key]);
  }
  str += "?" + arr.join("&");
  return str;
};

Vue.prototype.$ajax = function(option) { //getJsonp 扩展
  var that = this;
  that.option = option;
  return new PromiseS6(function(resolve, reject) {
    var arr = [];
    for (var key in that.option.data) {
      arr.push(key + "=" + that.option.data[key]);
    }
    var str = arr.join("&");
    if (!that.option.type || that.option.type == 'jsonp') {
      var scriptNode = document.createElement("script");
      var handle = "zero" + new Date().getTime() + parseInt(Math.random() * 100000);
      scriptNode.src = that.option.url + "?" + str + "&callback=" + handle;
      window[handle] = function(res) {
        resolve(res);
        document.getElementsByTagName('head')[0].removeChild(scriptNode);
      }
      document.getElementsByTagName('head')[0].appendChild(scriptNode);
    } else if (that.option.type) {
      var xmlhttp;
      if (!window.XMLHttpRequest) return false;
      xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          resolve(JSON.parse(xmlhttp.responseText));
        }
      }
      if (that.option.type == "GET") {
        that.option.url += "?" + str;
      }
      xmlhttp.open(that.option.type, that.option.url, that.option.async ? that.option.async : true);
      xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xmlhttp.send(str);
    }
  })
}

//scrollTo 扩展事件
function scrollTo(target, fn) {
  var that = this;
  clearInterval(that.timer);
  that.timer = setInterval(function() {
    var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
    var speed = (target - scrollT) / 3;
    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
    if (scrollT == target) {
      document.body.scrollTop = document.documentElement.scrollTop = target;
      clearInterval(that.timer);
      (typeof fn == 'function') && fn();
    } else {
      document.documentElement.scrollTop = document.body.scrollTop = speed + scrollT;
    }
  }, 30)
}

Vue.prototype.scrollTo = function(val, fn) {
  return scrollTo.call(this, val, fn);
}

Vue.use(VueLazyload, { //懒加载
  preLoad: 1.3,
  error: require("@/assets/images/benqi@2x.png"),
  loading: require("@/assets/images/benqi@2x.png"),
  attempt: 1,
  listenEvents: ['scroll']
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
