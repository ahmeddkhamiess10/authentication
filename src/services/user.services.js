const { User } = require("../entities/users.entities")



const getUsersService = async (text)=>{
    try {
        const allUsers = await User.findAll({where:{firstName:text}});
        if (allUsers){
            return {allUsers};
        }else{
            return {error : "no users found"};
        }

    } catch (err) {
        throw err
    }
    
    
}
module.exports={getUsersService}