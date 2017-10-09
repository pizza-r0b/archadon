import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IMAGE_ORIGIN, DEFAULT_ITEM } from 'Constants';
import ProductDetailLink from 'Components/ProductDetailLink';

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


function OrderItem({ item = DEFAULT_ITEM }: { item: Object }) {
  return (
    <div className="order-item">
      {item.Images && <img alt={item.Name} src={`${IMAGE_ORIGIN}/${item.Images[0]}`} />}
      <div className="order-item-link">
        <ProductDetailLink className="link" product={item}>{item.Name}</ProductDetailLink>
      </div>
    </div>
  );
}

function OrderBox({ order }: { order: Object }) {
  return (
    <div className="order-row">
      <p><small>{order._id}</small></p>
      <div>
        {order.Items.map((item, i) => <OrderItem key={i} item={item} />)}
      </div>
      <p>{timezoneOffset(order.createdAt)}</p>
      <p>${order.Price.toFixed(2)}</p>
      <div>
        <p><small>Status: <strong className={order.Status.toLowerCase()}>{order.Status}</strong></small></p>
        <p><small>{order.Brand} ****{order.Last4}</small></p>
      </div>
    </div>
  );
}

function Orders({ orders }: { orders: Array<Object> }) {
  return (
    <div className="margin--bottom-8 full-width">
      <h2 className="margin--bottom-8">Recent Orders</h2>
      <div className="order-row">
        <div className="small-caps font-color--lighter">#</div>
        <div className="small-caps font-color--lighter">Product(s)</div>
        <div className="small-caps font-color--lighter">Date</div>
        <div className="small-caps font-color--lighter">Price</div>
      </div>
      {orders.length === 0 && (
        <div className="full-width">
          <p className="margin--bottom-8">You don't have any recent orders.</p>
          <Link to="/shop" className="btn btn--first">Shop Now</Link>
        </div>
      )}
      {orders.length > 0 && orders.map(order => (
        <OrderBox key={order._id} order={order} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  orders: state.user.orders || [],
});

export default connect(mapStateToProps)(Orders);

