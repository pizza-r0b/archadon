import React from 'react';
import classnames from 'classnames';

const colors = ["#95918C", "#6E5160", "#714B23", "#E7C697", "#000000", "#A5694F", "#8A795D", "#9F8170", "#FDDDE6", "#414A4C", "#EFCDB8", "#CDC5C2", "#DBD7D2", "#DEAA88", "#CD9575", "#B4674D", "#EFDECD", "#BAB86C", "#D68A59", "#B0B7C6", "#979AAA", "#6DAE81", "#DD9475", "#CD4A4C", "#87A96B", "#17806D"];

class ColorPicker extends React.Component {

  state = {
    selectedColors: [],
  }

  selectColor = color => () => {
    const selectedColors = this.state.selectedColors.includes(color) ? this.state.selectedColors.filter(c => c !== color) : [color, ...this.state.selectedColors];
    this.setState({
      selectedColors,
    });
  }

  applyFilter = () => {
    this.props.applyColorFilter({
      type: 'raw',
      field: 'Color',
      queries: [this.state.selectedColors.map(color => `Colors:${color}`).join(' OR ')],
    });
    this.props.toggle();
  }

  render() {
    return (
      <div className="color-picker">
        <div className="color-picker-inner">
          <div>
          {colors.map(color => (
            <div
              onClick={this.selectColor(color)}
              className={classnames('color-box', { selected: this.state.selectedColors.includes(color) })}
              style={{ backgroundColor: color }}
            />
            ))}
          </div>
          <div className="padding--left-1 margin--top-3">
            <div onClick={this.applyFilter} className="btn--primary--inverse" {...{ disabled: this.state.selectedColors.length === 0 }}>Apply</div>
            <div onClick={this.props.toggle} className="btn--primary margin--left-3">Close</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
