const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
      matricule : {
            type : String,
            required : true
      },
      name : {
            type : String,
            required : true
      },
      firstname : {
            type : String,
            required : true
      },
      qr : {
            type : String, 
            required :true
      },

})


module.exports = mongoose.model('User', userSchema);