const express = require('express')
const router = express.Router()

router.get('/',(request,response)=>{
    response.send('Owener Router')
})
module.exports = router;