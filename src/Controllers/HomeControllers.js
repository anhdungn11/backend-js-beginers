const connection = require('../Config/Database')


const getHomePage=(req,res)=>{
   
   return res.render('home.ejs');
}
const getTrangTiep=(req,res)=>{
    res.send('check thu'); // Gửi phản hồi "check thu" khi truy cập vào trang tiếp theo
}
const getTrang2=(req,res)=>{
    res.send('check thu trang 2'); // Gửi phản hồi "check thu" khi truy cập vào trang tiếp theo
}

module.exports={
     getHomePage:getHomePage,
    getTrangTiep:getTrangTiep,
    getTrang2:getTrang2
}