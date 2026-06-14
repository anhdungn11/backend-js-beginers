
const express = require('express');
const path = require('path');
const app = express();
const configViewsEngine = (app) => {
    
    app.use(express.static(path.join(__dirname, '../public'))); // Cấu hình thư mục 'public' để phục vụ các file tĩnh (CSS, JS, hình ảnh, v.v.)
app.set('views', path.join(__dirname, '../views/')); // Đặt thư mục chứa các view (nếu sử dụng EJS, Pug, v.v.) là 'views' trong thư mục hiện tại
app.set('view engine', 'ejs'); // Đặt engine view là EJS (nếu sử dụng)
}

module.exports=configViewsEngine;
 