const express = require("express");
const app = express();
// 允许跨域
app.all('*', function(req, res, next) {
    console.log(req.headers.origin)
    console.log(req.environ)
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    // res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method === "OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
  });
app.post('/send', (req, res) => res.send({data: '我是yxl'}))

app.listen(8080, () => console.log('Example app listening on port 8080!'))

