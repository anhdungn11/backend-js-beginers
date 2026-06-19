const express = require('express');
require('dotenv').config();
const path = require('path');
const connection = require('./Config/Database'); // Import kết nối MySQL từ file Database.js
const app = express(); // Tạo một ứng dụng Express
 const webRoutes = require('./Routes/web'); // Import các route từ file web.js
const configViewsEngine = require('./Config/ViewsEngine'); 
//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({extended: true})) // for the data
configViewsEngine(app); 

// Sử dụng các route đã import
app.use('/',webRoutes); //khai bao routes cho app, tất cả các route trong webRoutes sẽ được sử dụng trong ứng dụng Express của bạn
app.use('/',webRoutes); //khai bao routes cho app, tất cả các route trong webRoutes sẽ được sử dụng trong ứng dụng Express của bạn
// đây là cách phân biệt các route của trang web , kiểu như là url
 




const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME || 'localhost';

//test connection mysql


 connection.query(
  'SELECT * FROM Users u' ,
  function(err, results, fields) {
    console.log("kq",results); // Kết quả trả về từ truy vấn SQL
    console.log("kq2",fields); // Thông tin về các trường trong kết quả truy vấn
  }
 );

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});