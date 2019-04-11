import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./style";

class CustomDatePickerInput extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
  }
  render() {
    const {value, onClick} = this.props;

    return (
      <div className="form-group">
        <Styled.CalendarInput type="text" value={value} onClick={onClick}/>
        <Styled.CalendarInputSpan onClick={onClick}></Styled.CalendarInputSpan>
      </div>
    );
  }
}

export default CustomDatePickerInput;
