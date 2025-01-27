const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {generateToken} = require("../utils/generateToken")
const userModel = require("../models/user-model")

module.exports.registerUser = async function (request, response){
    try {
        let { email, password, fullname } = request.body;
        let user = await userModel.findOne({email:email})
        if(user) {
            request.flash("error", "You already have an account")
            response.redirect("/")
        }
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt,async (err, hash) => {
                if (err) return response.send(err.message)
                else {

                    let user = await userModel.create({
                        email,
                        password: hash,
                        fullname
                    })
                   let token = generateToken(user)
                   response.cookie("token",token)
                   response.send("USer created successfully")
                }
            })
        })

    }
    catch (err) {
        response.send(err.message)
    }

}
module.exports.loginUser = async function(request,response){
    let {email,password}=request.body;
    let user = await userModel.findOne({email:email})
    if(!user){
        request.flash("error","email or password incorrect")
        return response.redirect("/")
    } 
    bcrypt.compare(password,user.password,(err,result)=>{
        if(result){
            let token = generateToken(user)
            response.cookie("token",token)
            response.redirect('/shop')
        }
        else{
            request.flash("error","Email or password incorrect")
            return response.redirect("/")
        }
    })

}
module.exports.logout = function(req,resp){
    resp.cookie("token","")
    resp.redirect("/")
}