//Require mongoose package
const mongoose = require('mongoose');

//Define Schema with title, description and category
const Profileschema = mongoose.Schema({
   
    file: {
        type: String,
        required: true
    },
  
    
    
});


module.exports = mongoose.model('Foto', Profileschema );