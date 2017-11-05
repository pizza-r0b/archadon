const sendMail = require('../utils/sendMail');

export function sendOrderConfirmationEmailToCustomer(items, customerData, price, ID) {
  return sendMail({
    to: customerData.email,
    subject: '😁 Rugs are coming!! Your Archadon Order Confirmation 🙌 🙌',
    template: 'purchase-complete',
    from: 'orderconfirmation@archadon.com',
    context: {
      items,
      ID,
      customerData,
      price: price.toLocaleString('USD', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      assetURL: process.env.ASSET_URL,
    },
  });
}

export function sendError(error) {
  return sendMail({
    to: process.env.ADMIN_EMAIL,
    subject: 'ERROR!',
    template: 'error',
    from: 'error@archadon.com',
    context: {
      error,
    },
  });
}

export function sendAdminEmail(items, customerData, price, ID, chargeID) {
  return sendMail({
    to: process.env.ADMIN_EMAIL,
    subject: 'New Archadon Order!! 🙌 🙌',
    template: 'new-order',
    from: 'neworder@archadon.com',
    context: {
      items,
      ID,
      chargeID,
      customerData,
      price: price.toLocaleString('USD', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      assetURL: process.env.ASSET_URL,
    },
  });
}
