import React from 'react';
import { connect } from 'react-redux';
import actions from '../constants';
import { action } from '../utils/common';

const { EDIT_ITEM, UPDATE_PRODUCT_START } = actions;


class Edit extends React.Component {

  state = {
    item: this.props.item || {},
    currentTag: '',
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item && nextProps.item._id !== this.state.item._id) {
      this.currentItem = nextProps.item;
      this.currentItem.Tags = this.currentItem.Tags || [];
      this.setState({ item: nextProps.item });
    }
  }

  onChange = ({ currentTarget }) => {
    this.setState({
      item: {
        ...this.state.item,
        [currentTarget.name]: currentTarget.name === 'Qty' && currentTarget.value !== '' ? +currentTarget.value : currentTarget.value,
      },
    });
  }

  onChangeTag = ({ currentTarget }) => {
    this.setState({
      currentTag: currentTarget.value,
    });
  }

  onAddTag = (e) => {
    e.preventDefault();
    if (this.state.currentTag.trim()) {
      const tags = this.state.item.Tags || [];
      tags.push(this.state.currentTag.trim());
      this.setState({
        item: {
          ...this.state.item,
          Tags: tags,
        },
      });
    }
  }

  onSave = (e) => {
    e.preventDefault();
    const diff = Object.entries(this.state.item).reduce((a, [key, value]) => {
      console.log(this.currentItem[key], value);
      // if (
      //   key === 'Tags' &&
      //   !(value.length === this.currentItem[key].length && value.every((v, i) => v === this.currentItem[key][i]))
      // ) {
      //   a[key] = value;
      // }
      if (key !== 'Tags' && value !== this.currentItem[key]) {
        a[key] = value;
      }
      return a;
    }, {});

    diff.Tags = this.state.item.Tags;

    console.log(diff);

    this.props.update(this.state.item._id, diff);
  }

  removeTag = tag => () => {
    let tags = this.state.item.Tags || [];
    tags = tags.filter(t => t !== tag);
    this.setTags(tags);
  }

  setTags = tags => {
    this.setState({
      item: {
        ...this.state.item,
        Tags: tags,
      },
    });
  }

  currentItem = {}

  render() {
    if (!this.props.item) {
      return null;
    }

    return (
      <div className="edit-form">
        <form>

          <div>
            <label>Name</label>
            <input type="text" name="Name" onChange={this.onChange} value={this.state.item.Name} />
          </div>
          <div>
            <label>Price</label>
            <input type="text" name="Price" onChange={this.onChange} value={this.state.item.Price} />
          </div>
          <div>
            <label>Short Description</label>
            <input type="text" name="ShortDescription" onChange={this.onChange} value={this.state.item.ShortDescription} />
          </div>
          <div>
            <label>Long Description</label>
            <input type="text" name="LongDescription" onChange={this.onChange} value={this.state.item.LongDescription} />
          </div>
          <div>
            <label>Width</label>
            <input type="text" name="Width" onChange={this.onChange} value={this.state.item.Width} />
          </div>
          <div>
            <label>Height</label>
            <input type="text" name="Height" onChange={this.onChange} value={this.state.item.Height} />
          </div>
          <div>
            <label>Qty</label>
            <input type="text" name="Qty" onChange={this.onChange} value={this.state.item.Qty} />
          </div>
          <div>
            <label>Tags</label>
            <input type="text" name="Tags" onChange={this.onChangeTag} value={this.state.currentTag} />
            <button onClick={this.onAddTag}>Add Tag</button>
          </div>
          {this.state.item.Tags && this.state.item.Tags.map(tag => {
            return (
              <li>{tag} - <span onClick={this.removeTag(tag)}>REMOVE</span></li>
            );
          })}
          <div className="button-group">
            <button onClick={this.onSave}>Save</button>
            <button onClick={this.props.cancel()}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  cancel() {
    return function (e) {
      e.preventDefault();
      dispatch(action(EDIT_ITEM, null));
    };
  },
  update(_id, attrs) {
    dispatch(action(UPDATE_PRODUCT_START, { _id, ...attrs }));
  },
});

const mapStateToProps = state => ({
  item: state.ui.item,
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
