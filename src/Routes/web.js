const express = require('express');
const router = express.Router();
const {getHomePage,getTrangTiep,getTrang2,postCreateUser, getCreatePage, getUpdatePage,postUpdatePage , postUpdateUser,postDeleteUser,postHandleRemoveUser} = require('../Controllers/HomeControllers');
router.get('/', getHomePage);// Định nghĩa route cho trang chủ 
router.get('/trangtiep', getTrangTiep); // Định nghĩa route cho trang tiếp theo
router.get('/trang2', getTrang2); // Định nghĩa route cho trang 2
router.get('/create',getCreatePage) //
router.post('/create-user', postCreateUser);  // day la cai trang form , mau form sau khi bam save
router.get('/update/:id',getUpdatePage);
// router.post('/edit-user',postUpdatePage);
router.post('/update-user',postUpdateUser)

router.post('/delete-user/:id',postDeleteUser) // day la duong dan url sua cai nao
router.post('/delete-user',postHandleRemoveUser) // day la cai gui len sever

module.exports = router; // Xuất router để có thể sử dụng trong file server.js