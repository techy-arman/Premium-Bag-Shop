const jwt = require("jsonwebtoken")
const userModel = require("../models/user-model")

module.exports= async function(request,response,next){
    if(!request.cookies.token){
        request.flash("error"," You need to login first")
        return response.redirect("/")
    }
    try{
        let decoded = jwt.verify(request.cookies.token,process.env.jwt_KEY);
        let user = await userModel.findOne({email:decoded.email}).select("-password");
        request.user = user;
        next();
    }
    catch(err){
        request.flash("error", "Something went wrong");
        response.redirect("/")
    }
}