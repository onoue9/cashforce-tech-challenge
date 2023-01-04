const express = require('express');
const { getAllOrdersController } = require('./OrderController');

const orderRoutes = express.Router();

orderRoutes.get('/', (request, response) => {
  getAllOrdersController(request, response);
});

module.exports = {
  orderRoutes,
};
