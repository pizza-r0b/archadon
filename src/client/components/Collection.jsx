import React from 'react';
import ProductList from './ProductList';
import LoadingIndicator from './LoadingIndicator';
import { connect } from 'react-redux';
import Actions from 'Actions';
import { action } from 'Utils';
import { withRouter, Redirect } from 'react-router-dom';

const { GET_COLLECTION_START } = Actions;

const COLLECTION_WHITELIST = ['arty', 'contemporary', 'abstract', 'classic'];

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
};

class Collection extends React.Component {
  state = {
    loading: true,
  }

  componentWillReceiveProps(nextProps) {
    const current = this.props.collection[this.props.match.params.name];
    const next = nextProps.collection[this.props.match.params.name];
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
    if (this.state.loading) {
      return <LoadingIndicator loading={true} />;
    } else {
      return (
        <div className="wrap">
          <h1>{TITLES[name].main}</h1>
          <h3 className="font-color--lighter">{TITLES[name].sub}</h3>
          <ProductList products={this.props.collection[name].collection.hits} />
        </div>
      );
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
