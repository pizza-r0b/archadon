import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IMAGE_ORIGIN } from 'Constants';


function OrderItem({ item }) {
  return (
    <div className="order-item">
      <img src={`${IMAGE_ORIGIN}/${item.Images[0].src}`} />
      <div className="margin--left-2">
        <p>{item.Name} {item.Price.toFixed(2)}</p>
        <small>SKU: {item.ID}</small>
      </div>
    </div>
  )
}

function OrderBox({ order }) {
  return (
    <div className="item-box margin--y-3">
      <p><small>Order ID: {order.ID}</small></p>
      <p><small>Status: <strong className={order.Status.toLowerCase()}>{order.Status}</strong></small></p>
      <p><small>{order.Brand} ****{order.Last4}</small></p>

      <p className="strong">Total: ${order.Price.toFixed(2)}</p>


      {order.Items.map((item, i) => <OrderItem key={i} item={item} />)}
    </div>
  );
}

function Orders({ orders }) {
  return (
    <div className="flex-grow-1 flex-parent flex-col">
      <h2 className="margin--bottom-6">Orders</h2>
      {orders.length === 0 && (
        <div className="flex-grow-1">
          <p className="margin--bottom-3">You don't have any recent orders.</p>
          <Link to="/shop" className="btn btn--first">Shop Now</Link>
        </div>
      )}

      {orders.length > 0 && orders.map(order => (
        <OrderBox order={order} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  orders: state.user.orders || [],
});

export default connect(mapStateToProps)(Orders);

