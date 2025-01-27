const express = require('express')
const router = express.Router()
const upload = require("../config/multer-config")
const productModel = require("../models/product-model")

router.post('/create',upload.single("image"), async(request,response)=>{

   try {
    let {name,price,discount,bgcolor,panelcolor,textcolor} = request.body;
    let product = await productModel.create({
        image:request.file.buffer,
        name,
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor
    }) 
    request.flash("success","Product created successfully!");
    response.redirect("/oweners/admin")
} catch(err){
    response.send(err.message);
}
})

module.exports = router;