const express = require('express');
const app = express();
const routers = require('./router/user');
app.use(express.json())

app.use('/', routers);

app.listen('5000', () => {
    console.log('server is running on 5000 port')
})
