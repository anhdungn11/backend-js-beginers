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
const postCreateUser=(req,res)=>{
    // console.log(">>>>req.body :",req.body) //lay ra thong tin nguoi dung

    //cach 1 lay ra thon tin mguoi dung
     let email = req.body.email;  
    let name = req.body.name;  
    let city = req.body.city;

    // cach 2 de lay ra thong tin
    // let {email,name,city} = req.body

    console.log("email=",email ,"name=" , name , "city= ", city )

 

connection.query(   // ket noi voi csdl luu truc tiep tu client
`INSERT INTO Users (email,name,city) 
 VALUES (?,?,?)`,
 [email,name,city],
 function(err,results){
    console.log(results);

    res.send('created success')   // tra ra ket qua cho nguoi dung
 }
)
}

//  



module.exports={
     getHomePage:getHomePage,
    getTrangTiep:getTrangTiep,
    getTrang2:getTrang2,
    postCreateUser
}