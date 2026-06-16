//config dung de lam viec voi mysql
//config la noi sua doi khi can thiet, dung de cai dat cac thuoc tinh, ham, cau lenh lien quan den mysql
const mysql = require('mysql2'); // Import thư viện mysql2 để làm việc với MySQL
dotenv = require('dotenv').config(); // Load biến môi trường từ file .env
const connection = mysql.createConnection({
  host: process.env.DB_HOST ,
  port: process.env.DB_PORT ,
  user: process.env.DB_USER  ,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME 
});

module.exports=connection; // Xuất đối tượng kết nối để có thể sử dụng trong các file khác của ứng dụng
