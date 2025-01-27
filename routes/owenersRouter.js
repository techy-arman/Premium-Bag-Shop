const express = require('express');
const owenerModel = require('../models/owener-model');
const router = express.Router();

if (process.env.NODE_ENV === "development") {
    router.post('/create', async (request, response) => {
        const owners = await owenerModel.find();
        if (owners.length > 0) {
            return response.status(503).send("You don't have permission to create a new owner");
        }
        let { fullname, email, password } = request.body;
        let createdOwner = await owenerModel.create({
            fullname,
            email,
            password
        });
        response.status(201).send(createdOwner);
    });
}

router.get('/admin', (request, response) => {
    let success = request.flash("success")
    response.render("createproducts",{success});
});

module.exports = router;
