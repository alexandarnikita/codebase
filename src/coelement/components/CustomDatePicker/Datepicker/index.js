import React from "react";
import PropTypes from "prop-types";
import Calendar from "../Calender";
import * as Styled from "./style";
import { isDate, getDateISO, CALENDAR_MODE } from "../helpers/calendar";

class CustomDatepicker extends React.Component {
  state = { date: null, calendarOpen: false, mode: CALENDAR_MODE.day };

  toggleCalendar = () =>
    this.setState({ calendarOpen: !this.state.calendarOpen });

  handleChange = evt => evt.preventDefault();

  handleDateChange = date => {
    const { onDateChanged } = this.props;
    const { date: currentDate, mode } = this.state;
    const newDate = date ? getDateISO(date) : null;
    if (mode === CALENDAR_MODE.month) {
      this.setState({ date: currentDate, mode: CALENDAR_MODE.day }, () => {
        typeof onDateChanged === "function" && onDateChanged(this.state.date);
      });
    } else {
      currentDate !== newDate &&
        this.setState({ date: newDate, calendarOpen: false }, () => {
          typeof onDateChanged === "function" && onDateChanged(this.state.date);
        });
    }
  };

  componentDidMount() {
    const { value: date } = this.props;
    const newDate = date && new Date(date);

    isDate(newDate) && this.setState({ date: getDateISO(newDate) });
  }

  componentDidUpdate(prevProps) {
    const { value: date } = this.props;
    const { value: prevDate } = prevProps;
    const dateISO = getDateISO(new Date(date));
    const prevDateISO = getDateISO(new Date(prevDate));

    dateISO !== prevDateISO && this.setState({ date: dateISO });
  }

  changeViewMode = () => {
    this.setState({
      mode: CALENDAR_MODE.month
    });
  };

  render() {
    const { label } = this.props;
    const { date, calendarOpen, mode } = this.state;

    return (
      <Styled.DatePickerContainer>
        <Styled.DatePickerFormGroup>
          <Styled.DatePickerInput
            type="text"
            style={{ borderRadius: 0, border: 0, color: '#595959' }}
            value={date ? date.split("-").join(" / ") : ""}
            onChange={this.handleChange}
            readOnly="readonly"
            placeholder="DD/MM/YYYY"
          />
          <Styled.DatePickerLabel>
            <span className="icon-calendar" style={{ fontSize: 16, padding:0, width: 16, height: 16 }}></span>
          </Styled.DatePickerLabel>
        </Styled.DatePickerFormGroup>
        <Styled.DatePickerDropdown
          isOpen={calendarOpen}
          toggle={this.toggleCalendar}
        >
          <Styled.DatePickerDropdownToggle color="transparent" />
          <Styled.DatePickerDropdownMenu style={{ marginTop: 6 }}>
            {calendarOpen && (
              <Calendar
                date={date && new Date(date)}
                onDateChanged={this.handleDateChange}
                onChangeViewMode={this.changeViewMode}
                mode={mode}
              />
            )}
          </Styled.DatePickerDropdownMenu>
        </Styled.DatePickerDropdown>
      </Styled.DatePickerContainer>
    );
  }
}

CustomDatepicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onDateChanged: PropTypes.func
};

export default CustomDatepicker;
