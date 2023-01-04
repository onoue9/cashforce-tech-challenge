const { getAllOrders } = require('./OrderModel');

const getAllOrdersService = async () => {
  const orders = await getAllOrders();
  return orders;
}

module.exports = {
  getAllOrdersService,
};
