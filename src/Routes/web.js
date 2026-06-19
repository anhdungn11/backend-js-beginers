const express = require('express');
const router = express.Router();
const {getHomePage,getTrangTiep,getTrang2} = require('../Controllers/HomeControllers');
router.get('/', getHomePage);// Định nghĩa route cho trang chủ 
router.get('/trangtiep', getTrangTiep); // Định nghĩa route cho trang tiếp theo
router.get('/trang2', getTrang2); // Định nghĩa route cho trang 2

module.exports = router; // Xuất router để có thể sử dụng trong file server.js