import React, { Component } from 'react';
import actions from 'Actions';
import { action } from 'Utils';
import ProductList from 'Components/ProductList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const { LOAD_FAVORITES } = actions;

class Favorites extends Component {
  props: {
    loadFavorites: Function,
    favorites: Array<Object>,
    loading: {
      page: string,
    }
  }

  componentDidMount() {
    this.props.loadFavorites();
  }
  render() {
    return (
      <div className="full-width">
        {this.props.loading.page === 'favorites' ?
          (
            <div className="flex-parent flex-grow-1 flex-align-center flex-justify-center">
              <h2>Loading Favorites</h2>
            </div>
          )
          :
          (
            <div className="wrap">
              <h1 className="margin--bottom-1">All Your Faves</h1>
              <h2 className="margin--bottom-6">{this.props.favorites.length > 0 ? `Here's what you love` : `Here's where we'll save the rugs you love` }</h2>
              {
                this.props.favorites.length > 0 ? <ProductList products={this.props.favorites} /> : (
                  <div className="flex-grow-1">
                    <p>Saving your faves is easy. All you need to do is click the heart icon when browsing rugs, or on the rug detail page.</p>
                    <p className="margin--top-3 margin--bottom-5">So what are you waiting for? Go find rugs you love.</p>
                    <Link to="/shop" className="btn--primary">Browse Rugs</Link>
                  </div>
                )
              }
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
