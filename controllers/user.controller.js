const User = require('../models/User');
const qrcode = require('qrcode');



module.exports.getAllUsers = async (req, res, next) => {
      try{
            await User.find().then(docs => {
                  res.status(200).json(docs);
            }).catch(err => {
                  console.log(`Erreur lors de la recuperation des users ${err}`);
            })

      }catch(err){
            console.log(`Erreur : ${err}`);
      }
}

module.exports.createUser = async (req, res, next) => {
      const {matricule, name, firstname} = req.body;

      await qrcode.toDataURL(matricule).then(qr => {
            User.create({matricule, name, firstname, qr}).then(docs => {
                  return res.status(200).json(docs);
            }).catch(err => {
                  console.log(err);
            })
      }).catch(err => {
            console.log(`Erreur lors de la generation du code QR` + err);
      })

}

module.exports.deleteUser = async (req, res, next) => {
      const {id} = req.params

      try{
            await User.deleteOne({_id : id}).then(() => {
                  return res.status(201).json({success : "Utilisateur supprimer"})
            }).catch(err => {
                  console.log(err);
            })
      }catch(err){
            console.log(err);
      }
}



