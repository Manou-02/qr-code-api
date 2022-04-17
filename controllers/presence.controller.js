const Presence = require('../models/Presence');
const User = require('../models/User');


module.exports.presence = async (req, res, next) => {
      const { userMat } = req.body;
      console.log(req.body);
      
      try{
            await Presence.create({user: userMat}).then(docs => {
                  res.json(docs);
            }).catch(err => {
                  console.log(err);
            })
      }catch(err){
            console.log("erreur " +err);
      }
}


module.exports.getPresence = async (req, res, next) => {
      

      try{
            await Presence.find().then(docs => {

                 // res1=docs.map(u => u.user)
                  res.json(docs);
            }).catch(err => {
                  console.log(err);
            })
      }catch(err){
            console.log(err);
      }
}