const express = require('express');

const DevController = require('./controllers/DevController');

const routes = express.Router();

// routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

module.exports = routes;
