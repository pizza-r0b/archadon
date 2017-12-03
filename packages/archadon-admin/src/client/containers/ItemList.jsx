import React from 'react';
import { connect } from 'react-redux';
import ItemRow from '../components/ItemRow';
import { action } from '../utils/common';
import actions from '../constants';

const { IMAGE_PREVIEW, EDIT_ITEM, DELETE_ITEM_START } = actions;

class ItemList extends React.Component {
  render() {
    const { data = [], onImageClick, edit } = this.props;
    return (
      <div>
        <h2>{data && data.length} total items</h2>
        {
          data && data.map(item => (
            <ItemRow key={item.ID} edit={edit} onImageClick={onImageClick} item={item} />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  onImageClick(src) {
    dispatch(action(IMAGE_PREVIEW, src));
  },
  edit(item) {
    dispatch(action(EDIT_ITEM, item));
  },
  deleteItem(id) {
    dispatch(action(DELETE_ITEM_START, id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
