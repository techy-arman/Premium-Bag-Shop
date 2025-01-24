const express = require('express')
const router = express.Router()

router.get('/',(request,response)=>{
    response.send('Users Router')
})
module.exports = router;