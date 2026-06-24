const connection = require('../Config/Database')
const{getAllUsers}=require('../Services/CRUDServices');
const getHomePage=async(req,res)=>{ 
   let results = await getAllUsers();
    
   return res.render('home.ejs',{ListUsers: results});
   
}


const getUpdatePage =async (req,res)=>{
    const UserId = req.params.id;
    let [results,fields] = await connection.query('select * from Users where id =?',[UserId]);
    console.log("check results :<<<<<<" , results);  

    let user = results && results.length > 0 ?  results[0] : {}; 
    // phan tich code nay : results && : day la kiem tra xem co ton tai hay k
    // results.length >0 : kiem tra xem co du lieu khong
    //  ? results[0] : neu co du lieu thi lay ra phan tu dau tien 
    // :{} neu kh co tra ve rong 

    //  CODE NAY LA DE NGAN APP CHET, TRANH USER NHAP URL TAM BAY MA VAN RA 

    res.render('Edit.ejs');
}
// const postUpdatePage=async(req,res)=>{
//     res.send("hello")
// }


const getTrangTiep=(req,res)=>{
    res.send('check thu'); // Gửi phản hồi "check thu" khi truy cập vào trang tiếp theo
}
const getTrang2=(req,res)=>{
    res.send('check thu trang 2'); // Gửi phản hồi "check thu" khi truy cập vào trang tiếp theo
}
const getCreatePage=(req,res)=>{
    res.render('create.ejs');
}
const postCreateUser=async (req,res)=>{
    // console.log(">>>>req.body :",req.body) //lay ra thong tin nguoi dung

    //cach 1 lay ra thon tin mguoi dung
    //  let email = req.body.email;  
    // let name = req.body.name;  
    // let city = req.body.city;

    // cach 2 de lay ra thong tin
     let {email,name,city} = req.body;
    console.log("email=",email ,"name=" , name , "city= ", city )

let [results,fields]= await connection.query(
        `INSERT INTO Users (email,name,city)  VALUES (?,?,?)`, [email,name,city]
        
    );
     res.send("success");
   
    
    
}

// connection.query(   // ket noi voi csdl luu truc tiep tu client
// `INSERT INTO Users (email,name,city) 
//  VALUES (?,?,?)`,
//  [email,name,city],
//  function(err,results){
//     console.log(results);

//     res.send('created success')   // tra ra ket qua cho nguoi dung
//  }
// )
// }






module.exports={
     getHomePage:getHomePage,
    getTrangTiep:getTrangTiep,
    getTrang2:getTrang2,
    postCreateUser,
    getCreatePage,
    getUpdatePage
}