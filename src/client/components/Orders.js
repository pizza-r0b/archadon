import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IMAGE_ORIGIN } from 'Constants';


function OrderItem({ item }) {
  return (
    <div className="order-item">
      <img src={`${IMAGE_ORIGIN}/${item.Images[0].src}`} />
    </div>
  )
}

function OrderBox({ order }) {
  return (
    <div className="item-box margin--y-3">
      <p>Order ID: <span className="strong">{order.ID}</span></p>
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
          <Link to="/shop" className="btn">Shop Now</Link>
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

