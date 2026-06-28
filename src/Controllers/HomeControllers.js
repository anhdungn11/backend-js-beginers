const connection = require('../Config/Database')
const{getAllUsers,getUserById , updateUserById, DeleteUserById ,}=require('../Services/CRUDServices');
const getHomePage=async(req,res)=>{ 
   let results = await getAllUsers();
    
   return res.render('home.ejs',{ListUsers: results});
   
}


const getUpdatePage =async (req,res)=>{
    const UserId = req.params.id;
    let user =await getUserById(UserId);
    

   
    // phan tich code nay : results && : day la kiem tra xem co ton tai hay k
    // results.length >0 : kiem tra xem co du lieu khong
    //  ? results[0] : neu co du lieu thi lay ra phan tu dau tien 
    // :{} neu kh co tra ve rong 

    //  CODE NAY LA DE NGAN APP CHET, TRANH USER NHAP URL TAM BAY MA VAN RA 

    res.render('Edit.ejs',{userEdit:user}); // userEdit la ten bien de tai su dung lai ben view
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

const postUpdateUser=async (req,res)=>{
    
        let email = req.body.email;  
        let name = req.body.name;  
        let city = req.body.city;
        let userId = req.body.userId;
   
    //  let {email,name,city} = req.body;
    // console.log("email=",email ,"name=" , name , "city= ", city , "User-id" , userId )
        await updateUserById(email,name,city,userId);

    //  res.send("update success");
    res.redirect('/'); // day la duong link dua nguoi dung den , cai phan trong ngoac la cua route , muon dua nguoi dung den dau thi gan route do
   
    
    
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

const postDeleteUser = async(req,res)=>{
const userId = req.params.id;
let user = await getUserById(userId)

res.render('Delete.ejs',{userEdit:user})
}

const postHandleRemoveUser=async (req,res)=>{
   const id = req.body.userId;
   await DeleteUserById (id);
    res.redirect('/')
}



module.exports={
     getHomePage:getHomePage,
    getTrangTiep:getTrangTiep,
    getTrang2:getTrang2,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}