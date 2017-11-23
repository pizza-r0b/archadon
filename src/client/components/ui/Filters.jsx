import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Actions';
import ClearFilterButton from 'Ui/ClearFilterButton';
import { action } from 'Utils';
import { FILTERS_ARR as filtersArr } from 'Constants';

const { ON_FILTER_UPDATE } = actions;

const FILTERS_ARR = [...filtersArr];

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

  console.log(filter);

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
