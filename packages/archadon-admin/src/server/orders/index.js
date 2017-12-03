import { Order } from 'dolli';
import { fromPaths } from 'dollidb';
const { OrderData, OrderItem } = Order;


export const getOrders = async (req, res, next) => {
  try {
    const orders = await OrderItem.find().lean().exec();
    const promises = orders.map(item => {
      const { _id } = item;
      return OrderData.find({ Item: _id }).lean().then(docs => {
        const d = {
          ...fromPaths(docs.map(({ Path, Value }) => [Path, Value])),
          ...item,
        };
        return d;
      });
    });
    const data = await Promise.all(promises);
    return res.status(200).send(data);
  } catch (e) {
    console.log('Err', e);
    next(e);
  }
};
