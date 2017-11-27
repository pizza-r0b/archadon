import React from 'react';
import ProductList from './ProductList';
import LoadingIndicator from './LoadingIndicator';
import { connect } from 'react-redux';
import Actions from 'Actions';
import { action } from 'Utils';
import { withRouter, Redirect, Link } from 'react-router-dom';

const { GET_COLLECTION_START } = Actions;

const COLLECTION_WHITELIST = ['arty', 'contemporary', 'abstract', 'classic', 'welcome'];

const TITLES = {
  arty: {
    main: 'Arty Collection',
    sub: 'Bold, beautiful floor art',
  },
  contemporary: {
    main: 'Contemporary Collection',
    sub: 'A little bit off the beaten path',
  },
  abstract: {
    main: 'Abstract Collection',
    sub: 'A canvas for wild imaginations',
  },
  classic: {
    main: 'Classic Collection',
    sub: 'Classic styles for classic people',
  },
  welcome: {
    main: 'Welcome Rug Collection',
    sub: 'Give the gift of the perfect small rug this holiday season.',
  },
};

class Collection extends React.Component {
  state = {
    loading: true,
  }

  componentWillReceiveProps(nextProps) {
    const current = this.props.collections[this.props.match.params.name];
    const next = nextProps.collections[this.props.match.params.name];
    if (!current && next) {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.props.getCollection(this.props.match.params.name);
  }

  render() {
    const name = this.props.match.params.name;
    if (!COLLECTION_WHITELIST.includes(name)) {
      return <Redirect to="/" />
    }
    if (this.props.collections[name]) {
      return (
        <div className="wrap">
          <h1>{TITLES[name].main}</h1>
          <h3 className="font-color--lighter">{TITLES[name].sub}</h3>
          <ProductList products={this.props.collections[name].collection.hits} />
          <h2 className="align--center margin--y-5">Not seeing something you love?</h2>
          <div className="flex-parent flex-align-center flex-justify-center"><Link className="btn--primary" to="/shop">Shop All Rugs</Link></div>
        </div>
      );
    } else if (this.state.loading) {
      return <LoadingIndicator loading={true} />;
    }
  }
}

const mapStateToProps = state => ({
  collections: state.collections,
});

const mapDispatchToProps = dispatch => ({
  getCollection(name) {
    dispatch(action(GET_COLLECTION_START, name));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Collection));
