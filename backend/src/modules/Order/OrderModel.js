const { OrderModel } = require('../../database/models/OrderModel');
const { BuyerModel } = require('../../database/models/BuyerModel');
const { ProviderModel } = require('../../database/models/ProviderModel');

const getAllOrders = async () => {
  const orders = await OrderModel.findAll({
    include: [
      {
        model: BuyerModel,
        as: 'buyers',
      },
      {
        model: ProviderModel,
        as: 'providers',
      },
    ]
  })
  return orders;
}

module.exports = {
  getAllOrders,
};
