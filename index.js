const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/user.routes')
const presenceRoutes = require('./routes/presence.routes');


const app = express();
const PORT = process.env.PORT || 5001;
const DB_URI = process.env.DB_URI;


app.use(cors())
app.use(express.json());

app.use('/users', userRoutes);
app.use('/presence', presenceRoutes);



mongoose.connect(DB_URI).then(() => {
      app.listen(PORT, () => {
            console.log(`Server started in port ${PORT}`);
      })
}).catch(err => {
      console.log(`Erreur lors de la connexion au BD`);
})


