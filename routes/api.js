const express = require('express');
const router = express.Router();

//item model
const Foto = require('../models/schema');

//@route GET api/items
router.get('/data',(req, res)=> {
    Foto.find()
   .then(fotos=> 
    { console.log()
       res.json({
            confirmation:'success',
            data: fotos
        })
    })
     .catch(err =>{
         res.json({
            confirmation:'fail',
            message: err.message
         })
     })
})
///post
router.post('/upload',  (req, res)=> {

    console.log(req.body);
   const newuserdata = new Foto({
        file: req.body.file 
    

    })
 newuserdata.save().then(dataadded => res.json(dataadded));
});


module.exports = router;