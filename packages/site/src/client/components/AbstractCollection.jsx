// @flow

import React from 'react';
import actions from 'Actions';
import { connect } from 'react-redux';
import { action } from 'Utils';
import ProductList from 'Components/ProductList';
import HeroHeader from 'Ui/HeroHeader';

const { REQUEST_COLLECTION } = actions;

const data = [
  {
    name: 'Large',
    ids: ['6x9_32394_29429', '6x9.1_32497_29459', '6x9.1_32929_3694', '6x9.1_321101_29427', '6x9.2_28800_26892', '6x9.2_32397_29426', '8x10.1_30321_27818', '6x9.2_32397_29426', '5.11x9_26602_24868', '5.11x9_33120_29736', '5.11x9.1_26990_25231', '5.11x9.2_27224_25241', '5x7_30659_2055', '5x7.1_31885_2854', '6.1x8.10_20041_19472', '6.1x8.10_20630_19657', '6.1x8.10_32602_29494', '6.1x8.11_32021_29374', '6.1x9_20657_19784', '6.1x9_29191_27299', '6.1x9_31318_29055-2', '6.1x9_32962_3823', '6x8.10_26316_24521', '6x8.11_31282_28930', '6x8.11_32194_29491', '6x9_26601_24867', '6x9_27217_25414', '6x9_31315_29036', '6x9_31747_29177', '6x9_32018_29362'],
  },
  {
    name: 'Medium',
    ids: ['4.1x6_32926_29603', '4.1x6_32984_29667', '4x6_30869_2090', '4x6_31742_2790', '4x6_32172_29284', '4x6_32407_3350', '4x6_32419_29399', '4x6_32653_3368'],
  },
  {
    name: 'Small',
    ids: ['2.11x4.9_32428_3187', '3.1x5.1_29980_27944', '3.1x5.2_29981_27946', '3.11x6.1_32418_29413', '3.11x6', '3x4.11_32429_3188'],
  },
];

class AbstractCollection extends React.Component {
  componentDidMount() {
    this.props.getCollection(data);
  }
  render() {
    return (
      <div className="global-padding">
        <HeroHeader
          title="The Abstract Collection"
          subtitle={(<span>These hand-knotted rugs are made with the finest Tibetan wool. <span className="desktop-break">They have the look of modern day abstract art that will bring any room to life.</span></span>)}
          src="https://assets.archadon.com/6x9.2_32397_29426_v2.jpg"
        />

        {data.map((obj = {}) => (
          <section key={obj.name}>
            <h2 className="title">{obj.name}</h2>
            {this.props.collections && <ProductList hideBtn hideFav products={this.props.collections[obj.name]} />}
          </section>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCollection(arr) {
    dispatch(action(REQUEST_COLLECTION, arr));
  },
});

const mapStateTopProps = state => ({
  collections: state.collections,
});

export default connect(mapStateTopProps, mapDispatchToProps)(AbstractCollection);

