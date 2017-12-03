import React from 'react';
import { LazyLoad } from 'archadon-utils';

class ItemRow extends React.Component {

  render() {
    const { item, onImageClick, edit, deleteItem } = this.props;
    const img = item.Images && `https://assets.archadon.com/${item.Images[0]}`;
    return (
      <div className="flex-parent item-row">
        <div>
          <LazyLoad>
            <img onClick={() => { onImageClick(img) }} data-src={img} />
          </LazyLoad>
        </div>
        <div className="flex-parent flex-col">
          <div>Name: {item.Name} | Width: {item.Hidth} | Height: {item.Height} | Price: {item.Price} | Qty: {item.Qty}</div>
          <div>
            <p>Short Description: {item.ShortDescription}</p>
            <p>Long Description: {item.LongDescription}</p>
            <small>ID: {item._id}</small>
            <div><small>SKU: {item.SKU}</small></div>
            <div>
            <p>Tags</p>
            {item.Tags && item.Tags.map(tag => {
              return (
                <li>{tag}</li>
              );
              })}
            </div>
            <button onClick={() => { edit(item); }}>Edit</button>
            <button style={{ color: 'red', marginTop: '10px' }} onClick={() => { deleteItem(item._id); }}>Delete</button>
          </div>
        </div>
      </div>
    );
  }

}

export default ItemRow;
