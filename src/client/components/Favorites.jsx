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
    loading: {
      page: string,
    }
  }

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
              <h2 className="title margin--bottom-5">Favorites</h2>
              {
                this.props.favorites.length > 0 ?
                  (
                    <div className="favorites">
                      <ProductList className="flex-justify-start" hideBtn products={this.props.favorites} />
                    </div>
                  )
                  :
                  (
                    <div className="flex-grow-1">
                      <p className="margin--bottom-8">Aww. You haven't favorited anything yet.</p>
                      <Link to="/shop" className="btn btn--first">Shop Now</Link>
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
