const { getAllOrdersService } = require('./OrderService');

const getAllOrdersController = async (_request, response) => {
  try {
    const orders = await getAllOrdersService();

    return response.status(200).json(orders);  
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllOrdersController,
};
