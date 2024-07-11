const { User } = require("../entities/users.entities");
const { getUsersService } = require("../services/user.services");

const getUsers = async (req,res)=>{
    try {
        const { text } = req.body;
        const response = await getUsersService(text);
        res.status(200).json(response);
        
    
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    
}

module.exports = {getUsers}