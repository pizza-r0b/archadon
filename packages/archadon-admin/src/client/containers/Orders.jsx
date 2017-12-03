import React from 'react';
import { connect } from 'react-redux';
import actions from '../constants';
import { action } from '../utils/common';

const { GET_ORDERS_START } = actions;

class Orders extends React.Component {

  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    return (
      <div>
        {this.props.orders.map(order => {
          return <p>{JSON.stringify(order)}</p>;
        })}
      </div>
    );
  }
}

const mapDispatchToProps = d => ({
  getOrders() {
    d(action(GET_ORDERS_START));
  },
});

const mapStateToProps = state => ({
  orders: state.orders || [],
});


export default connect(mapStateToProps, mapDispatchToProps)(Orders);
