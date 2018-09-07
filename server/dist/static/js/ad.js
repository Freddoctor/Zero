/* 获取广告位公共头文件 */

var AD_API = "http://192.168.30.190:8098/ad/getWebAd.html?codeId=";

function ShowAdAsync(p) {
  p.async = true;
  ShowAd(p);
}

function ShowAd(p) {
  var adjs = AD_API + p.codeId;
  var cid = p.container;
  var async = p.async == undefined ? false : p.async;
  var d = document;

  adjs += "&callback=fx168_callback&containerId=" + cid + "&async=" + async;

  if (async) {
    var r = d.createElement("script");
    r.type = "text/javascript";
    r.async = !0;
    r.src = adjs;
    var s = d.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(r, s);
  } else {
    d.write('<script charset="utf-8" src="' + adjs + '"></script>')
  }
}

function fx168_callback(re, cid, async) {
  var d = document;
  var c = d.getElementById(cid);
  if (async) {

    var i = d.createElement('iframe');
    i.width = '100%';
    i.height = '100%';
    i.frameBorder = '0';
    i.scrolling = 'no';
    i.src = "about:blank";
    c.appendChild(i);

    var r = i.contentWindow.document;
    r.open("text/html", "replace");
    r.write(re);
    r.close();
  } else {
    d.write(re);
  }
}
