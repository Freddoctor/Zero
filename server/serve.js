const express = require('express');
const proxy = require('http-proxy-middleware');
const router = express.Router();
const bodyParser = require('body-parser'); //调用模板
// 设置端口
var app = express();

app.set('port', 888);

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.use('/', express.static('./dist'));

const urlencodedParser = bodyParser.urlencoded({
  extended: false
})

app.use('/music', proxy({
  target: "https://api.imjad.cn/",
  changeOrigin: true,
  pathRewrite: {
    '^/music': '/'
  },
}));

app.use('/api', proxy({
  target: "https://app5.fx168api.com/",
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/'
  },
}));

app.use('/url99', proxy({
  target: "http://192.168.30.190:99/",
  changeOrigin: true,
  pathRewrite: {
    '^/url99': '/'
  },
}));

// 监听端口
app.listen(app.get('port'), () => {
  console.log(`server running @${app.get('port')}`);
});
