const getHomePage=(req,res)=>{
    res.send('Hello World!'); // Gửi phản hồi "Hello World!" khi truy cập vào trang chủ
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