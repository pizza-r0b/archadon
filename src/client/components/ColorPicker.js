import React from 'react';
import classnames from 'classnames';

const colors = ["#95918C", "#FFFFFF", "#6E5160", "#DBD7D2", "#714B23", "#E7C697", "#000000", "#A5694F", "#CD9575", "#DEAA88", "#8A795D", "#B0B7C6", "#9F8170", "#CDC5C2", "#FDDDE6", "#414A4C", "#EFCDB8", "#979AAA", "#B4674D", "#D68A59", "#EFDECD", "#BAB86C", "#6699CC", "#FAA76C", "#1A4876", "#A8E4A0", "#6DAE81", "#A2ADD0", "#DD9475", "#EDD19C", "#CC6666", "#CD4A4C", "#FFA089", "#87A96B", "#EA7E5D", "#17806D", "#C5E384"];

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
