// 引入 express
const express = require('express');

// 创建服务器对象
const app = express();

// 加载 /api 前缀，凡是 /api 开头的都去 ./apiRouter 里面继续匹配
app.use('/api', require('./apiRouter'));

// 监听端口
app.listen(3000, () => console.log('Server running on http://localhost:3000'));