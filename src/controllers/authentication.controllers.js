const { signUpService } = require("../services/authentication.services");

const signUp =async (req,res)=>{
    try {
        const signUpData = req.body;
        const response = await signUpService(signUpData)
        res.status(200).cookie('jwt', response.token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }).json({ message: "User created successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
   
}
module.exports = {signUp}