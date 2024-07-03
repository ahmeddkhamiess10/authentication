const { HASH_SALT_ROUNDS } = require("../config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../entities/users.entities");



const creatHash = async (password) => {
    try{
    const salt = await bcrypt.genSalt(parseInt(HASH_SALT_ROUNDS));
    const hashedPassword = await bcrypt.hash(password , salt);
    return hashedPassword
}
    catch(err){
        throw Error('cannot hash the password');
    }
}

const createToken = (userId) => {
    const jwtToken =  jwt.sign({ userId } , 'our secret key' ,{expiresIn : '24h'});
    return jwtToken;
}
const signUpService = async (data) => {
    try {
        const emailExists = await User.findOne({ where: { email:data.email } });
        if (emailExists) {
            throw new Error("Email already exists")    ;
        }
         else {
            const hashedPassword = await creatHash(data.password);
            const userCreated = await User.create({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: hashedPassword,
                phoneNumber: data.phoneNumber
            });
            const token = createToken(userCreated.userId);
            return { userCreated , token };
        }
    } catch (err) {
        // console.log(err);
        throw err;
    }
}
module.exports={signUpService}