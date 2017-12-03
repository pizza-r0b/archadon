export const fetchOrders = () => window.fetch('/getorders', {
  method: 'POST',
});
