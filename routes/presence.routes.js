const express = require('express');
const { presence, getPresence } = require('../controllers/presence.controller');

const routes = express.Router();


routes.get('/', getPresence);
routes.post('/',  presence );


module.exports = routes;