import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Actions';
import ClearFilterButton from 'Ui/ClearFilterButton';
import { action } from 'Utils';

const { ON_FILTER_UPDATE } = actions;

const FILTERS_ARR = [
  {
    name: 'Sort',
    options: [
      {
        copy: 'Price: Highest to Lowest',
        queries: ['product_desc'],
        type: 'r',
      },
      {
        copy: 'Price: Lowest to Highest',
        queries: ['product_asc'],
        type: 'r',
      },
    ],
  },
  {
    name: 'Price',
    options: [
      {
        copy: 'Under $80',
        queries: ['< 80'],
        type: 'p',
      },
      {
        copy: '$80 - $150',
        queries: ['>= 80', '<= 150'],
        type: 'p',
      },
      {
        copy: '$150 - $300',
        queries: ['>= 150', '<= 300'],
        type: 'p',
      },
      {
        copy: '$300 - $800',
        queries: ['>= 300', '<= 800'],
        type: 'p',
      },
      {
        copy: '$800+',
        queries: ['>= 800'],
        type: 'p',
      },
    ],
  },
  {
    name: 'Size',
    options: [
      {
        copy: `2 x 3 - 2 x 4`,
        queries: ['Width >= 1 AND Width <= 2.9 AND Height >= 3 AND Height <= 4.9'],
        type: 'raw',
      },
      {
        copy: `3 x 4 - 3 x 5`,
        queries: ['Width >= 3 AND Width <= 4.9 AND Height >= 4 AND Height <= 5.9'],
        type: 'raw',
      },
      {
        copy: `4 x 5 - 4 x 6`,
        queries: ['Width >= 4 AND Width <= 4.9 AND Height >= 5 AND Height <= 6.9'],
        type: 'raw',
      },
      {
        copy: `5 x 7 - 5 x 9`,
        queries: ['Width >= 5 AND Width <= 5.9 AND Height >= 7 AND Height <= 9.9'],
        type: 'raw',
      },
      {
        copy: `6 x 6 - 6 x 9`,
        queries: ['Width >= 6 AND Width <= 6.9 AND Height >= 6 AND Height <= 9.9'],
        type: 'raw',
      },
      {
        copy: `7 x 9 - 8 x 10`,
        queries: ['Width >= 7 AND Width <= 8.9 AND Height >= 9 AND Height <= 10.9'],
        type: 'raw',
      },
    ],
  },
];

FILTERS_ARR.reverse();

type FilterProps = {
  filter: Object,
  onChange: Function,
  defaultIndex: number,
  filters: Array<*>,
}

function FilterOption({ filter, onChange, filters, defaultIndex }: FilterProps) {
  const selectProps = {};
  if (defaultIndex === 0) {
    selectProps.value = 0;
  }

  const [selectedOfType] = filters.filter(f => f.field === filter.name);
  if (selectedOfType) {
    selectProps.value = filter.options[selectedOfType.optionindex].copy;
  }
  return (
    <div className="filter-option">
      <label className="small-caps margin--bottom-1" htmlFor={filter.name}>{filter.name}</label>
      <select name={filter.name} {...selectProps} onChange={onChange}>
        <option>Select {filter.name}</option>
        {filter.options.map((option, i) => (
          <option key={i} data-filterindex={filter.index} data-optionindex={i}>{option.copy}</option>
        ))}
      </select>
    </div>
  );
}

class Filters extends Component {

  props: {
    updateFilter: Function,
    filters: Array<Object>,
  }

  onChange = (e) => {
    const select = e.currentTarget;
    const option = select.options[select.selectedIndex];
    const { filterindex, optionindex } = option.dataset;
    if (typeof filterindex === 'undefined' || typeof optionindex === 'undefined') {
      return;
    }
    const { queries, type } = FILTERS_ARR[filterindex].options[optionindex];
    const field = FILTERS_ARR[filterindex].name;

    this.props.updateFilter({
      queries, type, field, filterindex, optionindex,
    });
  }
  render() {
    return (

      <div className="filter-wrap wrap">
        <div className="margin--bottom-3">
          {this.props.filters.length > 0 && <ClearFilterButton />}
        </div>
        <div className="filters">
          {FILTERS_ARR.map((filter, i) => {
            filter.index = i;
            return <FilterOption filters={this.props.filters} defaultIndex={this.props.filters.length} key={i} onChange={this.onChange} filter={filter} />;
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateFilter(filter) {
    dispatch(action(ON_FILTER_UPDATE, { filter }));
  },
});

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
