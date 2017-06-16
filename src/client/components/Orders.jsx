import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IMAGE_ORIGIN } from 'Constants';

function timezoneOffset(date, raw) {
  const current = new Date();
  const offset = current.getTimezoneOffset() / 60;
  const output = new Date(date);
  output.setHours(output.getHours() + offset);
  if (raw) {
    return output;
  }
  return output.toDateString();
}


function OrderItem({ item }: { item: Object }) {
  return (
    <div className="order-item">
      <img alt={item.Name} src={`${IMAGE_ORIGIN}/${item.Images[0].src}`} />
      <div className="margin--left-2">
        <p>{item.Name} ${item.Price.toFixed(2)}</p>
        <small>SKU: {item.ID}</small>
      </div>
    </div>
  );
}

function OrderBox({ order }: { order: Object }) {
  return (
    <div className="item-box margin--y-3">
      <div className="details">
        <p className="strong">{timezoneOffset(order.CreatedAt)}</p>
        <p><small>Order ID: {order.ID}</small></p>
        <p><small>Status: <strong className={order.Status.toLowerCase()}>{order.Status}</strong></small></p>
        <p><small>{order.Brand} ****{order.Last4}</small></p>
        <p className="strong">Total: ${order.Price.toFixed(2)}</p>
      </div>
      <div>
        {order.Items.map((item, i) => <OrderItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function Orders({ orders }: { orders: Array<Object> }) {
  return (
    <div className="flex-grow-1 flex-parent flex-col">
      <h2 className="margin--bottom-5">Orders</h2>
      {orders.length === 0 && (
        <div className="flex-grow-1">
          <p className="margin--bottom-8">You don't have any recent orders.</p>
          <Link to="/shop" className="btn btn--first">Shop Now</Link>
        </div>
      )}

      {orders.length > 0 && orders.sort((b, a) => timezoneOffset(b.CreatedAt, true) < timezoneOffset(a.CreatedAt, true)).map(order => (
        <OrderBox order={order} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  orders: state.user.orders || [],
});

export default connect(mapStateToProps)(Orders);

