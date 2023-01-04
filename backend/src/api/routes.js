const express = require('express');
const { orderRoutes } = require('../modules/Order/OrderRoutes');

const routes = express.Router();

routes.use('/orders', orderRoutes);

module.exports = {
  routes,
};
