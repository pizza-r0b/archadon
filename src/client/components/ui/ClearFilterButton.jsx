import React from 'react';
import actions from 'Actions';
import { action } from 'Utils';
import { connect } from 'react-redux';

const { ON_CLEAR_FILTERS } = actions;

function ClearFilterButton({ clear }) {
  return (
    <div onClick={() => { clear(); }} className="btn btn--primary">Clear Filters</div>
  );
}

const mapDispatchToProps = dispatch => ({
  clear() {
    dispatch(action(ON_CLEAR_FILTERS));
  },
});

export default connect(null, mapDispatchToProps)(ClearFilterButton);

