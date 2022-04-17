const express = require('express');
const { getAllUsers, createUser } = require('../controllers/user.controller');

const routes = express.Router();


routes.get('/', getAllUsers);
routes.post('/', createUser);


module.exports = routes;