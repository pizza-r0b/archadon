// @flow
import React from 'react';
import { action } from 'Utils';
import actions from 'Actions';
import { connect } from 'react-redux';
import Svg from 'Ui/Svg';
import classnames from 'classnames';

const { TOGGLE_FAVORITE } = actions;

type FavoriteBtnProps = {
  favorites: Array<*>,
  toggleFavorite: Function,
  id: string,
  className?: string,
};

function FavoriteBtn({ favorites, toggleFavorite, id, className }: FavoriteBtnProps) {
  return (
    <div style={{ cursor: 'pointer' }} onClick={toggleFavorite(id)} className={classnames('heart', className)}>
      <Svg color="#bf9b30" variant={favorites.includes(id) ? 'icon-heart-filled' : 'icon-heart'} />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleFavorite: (ID) => () => dispatch((action(TOGGLE_FAVORITE, ID))),
});

const mapStateToProps = (state) => (
  {
    favorites: state.user.Favorites || [],
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteBtn);
