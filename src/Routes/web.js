const express = require('express');
const router = express.Router();

router.get('/trangchu', (req, res) => { // Định nghĩa route cho trang chủ
  res.send('Hello World!'); // Gửi phản hồi "Hello World!" khi truy cập vào trang chủ
});
router.get('/trang1', (req, res) => { // Định nghĩa route cho trang "/trang1"
  res.render('sample.ejs'); //  Khi truy cập vào "/trang1", render file "sample.ejs" từ thư mục views
});
module.exports = router; // Xuất router để có thể sử dụng trong file server.js