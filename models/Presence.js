const mongoose = require('mongoose');


const presenceSchema = new mongoose.Schema({
      
      presence : {
            type : Boolean,
            default: true
      },
      user : {
            type : String,
            required : true
      }

},
{
      timestamps : true
});


module.exports = mongoose.model('Presence', presenceSchema);