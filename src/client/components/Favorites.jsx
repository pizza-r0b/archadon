import React, { Component } from 'react';
import actions from 'Actions';
import { action } from 'Utils';
import ProductList from 'Components/ProductList';
import { connect } from 'react-redux';

const { LOAD_FAVORITES } = actions;

class Favorites extends Component {
  componentDidMount() {
    this.props.loadFavorites();
  }
  render() {
    return (
      <div className="flex-parent flex-grow-1">
        {this.props.loading.page === 'favorites' ?
          (
            <div className="flex-parent flex-grow-1 flex-align-center flex-justify-center">
              <h2>Loading Favorites</h2>
            </div>
          )
          :
          (
            <div>
              <h2 className="title">Favorites</h2>
              <div className="favorites">
                <ProductList className="flex-justify-start" hideBtn products={this.props.favorites} />
              </div>
            </div>
          )
        }

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadFavorites() {
    dispatch(action(LOAD_FAVORITES));
  },
});

const mapStateToProps = state => ({
  favorites: state.user.FavoritesDetail || [],
  loading: state.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
