const purchase = require('./purchase');
const { purchaseStreamListener, emailAdmin } = require('./purchaseStreamListener');

module.exports = {
  purchase,
  emailAdmin,
  onOrderCreate: purchaseStreamListener,
};
