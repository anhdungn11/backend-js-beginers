const connection =require("../Config/Database");
// const { getUpdatePage } = require("../Controllers/HomeControllers"); // dang bi trung nen phai an 
const getAllUsers= async ()=>{
let[results,fields]=await connection.query('select * from Users ');
return results;
}
const getUserById = async (UserId)=>{
      let [results,fields] = await connection.query('select * from Users where id =?',[UserId]);
       let user = results && results.length > 0 ?  results[0] : {}; 
       return user;
}
const updateUserById = async (email,name,city,userId) =>{
let [results,fields]= await connection.query(
        `
        UPDATE Users 
        SET email = ? , city = ? , name=?
        WHERE id = ?
        `,[email,name,city,userId]
    );
}
module.exports={
    getAllUsers,
    getUserById,
    updateUserById

}