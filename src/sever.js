const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();
 const webRoutes = require('./Routes/web'); // Import các route từ file web.js
const configViewsEngine = require('./Config/ViewsEngine');

configViewsEngine(app); 

// Sử dụng các route đã import
app.use('/thu',webRoutes); //khai bao routes cho app, tất cả các route trong webRoutes sẽ được sử dụng trong ứng dụng Express của bạn
app.use('/thu1',webRoutes); //khai bao routes cho app, tất cả các route trong webRoutes sẽ được sử dụng trong ứng dụng Express của bạn
// đây là cách phân biệt các route của trang web , kiểu như là url

const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME || 'localhost';





app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});