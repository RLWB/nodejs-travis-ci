const express = require('express');

const ip = require('ip');

const app = express();

app.get('/',function(req, res) {
    res.send('Hello world!')
})

const server = app.listen(8081, (res)=>{
    let port = server.address().port
    let host = ip.address();
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});