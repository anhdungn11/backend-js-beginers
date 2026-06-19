//config dung de lam viec voi mysql
//config la noi sua doi khi can thiet, dung de cai dat cac thuoc tinh, ham, cau lenh lien quan den mysql
const mysql = require('mysql2'); // Import thư viện mysql2 để làm việc với MySQL
dotenv = require('dotenv').config(); // Load biến môi trường từ file .env
//createConnection: tạo một kết nối duy nhất đến cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST ,
  port: process.env.DB_PORT ,
  user: process.env.DB_USER  ,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME 
});


// createPool: tạo một nhóm kết nối (connection pool) để quản lý nhiều kết nối đến cơ sở dữ liệu MySQL 
const connection = mysql.createPool({
  host: process.env.DB_HOST ,
  port: process.env.DB_PORT ,
  user: process.env.DB_USER  ,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME ,
    waitForConnections: true, // Cho phép chờ kết nối nếu không có kết nối sẵn có
    connectionLimit: 10, // Giới hạn số lượng kết nối tối đa trong pool
    queueLimit: 0 // Không giới hạn số lượng kết nối trong hàng đợi
});



module.exports=connection; // Xuất đối tượng kết nối để có thể sử dụng trong các file khác của ứng dụng
