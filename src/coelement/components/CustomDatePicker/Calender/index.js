import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import * as Styled from "./style";
import calendar, {
  isDate,
  isSameDay,
  isSameMonth,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAYS,
  CALENDAR_MONTHS,
  CALENDAR_MODE,
  THIS_MONTH
} from "../helpers/calendar";

class Calendar extends Component {
  state = {
    ...this.resolveStateFromProp(),
    today: new Date(),
    mode: CALENDAR_MODE.day
  };

  componentDidMount() {
    const now = new Date();
    const tomorrow = new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000;
    const ms = tomorrow - now;

    this.dayTimeout = setTimeout(() => {
      this.setState({ today: new Date() }, this.clearDayTimeout);
    }, ms);
  }

  componentDidUpdate(prevProps) {
    const { date, onDateChanged } = this.props;
    const { date: prevDate } = prevProps;
    const dateMatch = date == prevDate || isSameDay(date, prevDate);

    !dateMatch &&
      this.setState(this.resolveStateFromDate(date), () => {
        typeof onDateChanged === "function" && onDateChanged(date);
      });
  }

  clearDayTimeout = () => {
    this.dayTimeout && clearTimeout(this.dayTimeout);
  };

  componentWillUnmount() {
    this.clearPressureTimer();
    this.clearDayTimeout();
  }

  resolveStateFromDate(date) {
    const isDateObject = isDate(date);
    const _date = isDateObject ? date : new Date();

    return {
      current: isDateObject ? date : null,
      month: +_date.getMonth() + 1,
      year: _date.getFullYear()
    };
  }

  resolveStateFromProp() {
    return this.resolveStateFromDate(this.props.date);
  }

  gotoDate = date => evt => {
    evt && evt.preventDefault();
    const { current } = this.state;
    const { onDateChanged } = this.props;

    !(current && isSameDay(date, current)) &&
      this.setState(this.resolveStateFromDate(date), () => {
        typeof onDateChanged === "function" && onDateChanged(date);
      });
  };

  gotoPreviousMonth = () => {
    const { month, year } = this.state;
    this.setState(getPreviousMonth(month, year));
  };

  gotoNextMonth = () => {
    const { month, year } = this.state;
    this.setState(getNextMonth(month, year));
  };

  gotoPreviousYear = () => {
    const { year } = this.state;
    this.setState({ year: year - 1 });
  };

  gotoNextYear = () => {
    const { year } = this.state;
    this.setState({ year: year + 1 });
  };

  handlePressure = fn => {
    if (typeof fn === "function") {
      fn();
      this.pressureTimeout = setTimeout(() => {
        this.pressureTimer = setInterval(fn, 100);
      }, 500);
    }
  };

  clearPressureTimer = () => {
    this.pressureTimer && clearInterval(this.pressureTimer);
    this.pressureTimeout && clearTimeout(this.pressureTimeout);
  };

  handlePrevious = evt => {
    evt && evt.preventDefault();
    const fn = evt.shiftKey ? this.gotoPreviousYear : this.gotoPreviousMonth;
    this.handlePressure(fn);
  };

  handleNext = evt => {
    evt && evt.preventDefault();
    const fn = evt.shiftKey ? this.gotoNextYear : this.gotoNextMonth;
    this.handlePressure(fn);
  };

  getCalendarDates = () => {
    const { current, month, year } = this.state;
    const calendarMonth = month || +current.getMonth() + 1;
    const calendarYear = year || current.getFullYear();

    return calendar(calendarMonth, calendarYear);
  };

  renderMonth = (monthKey, index) => {
    const { current, month, year, today } = this.state;
    const _date = new Date(year, index, current.getDay());

    // Check if calendar date is same day as today
    const isToday = isSameDay(_date, today);

    // Check if calendar date is same day as currently selected date
    const isCurrent = current && isSameDay(_date, current);

    // Check if calendar date is in the same month as the state month and year
    const inMonth =
      month && year && isSameMonth(_date, new Date([year, month, 1].join("-")));

    // The click handler
    const onClick = this.gotoDate(_date);

    const props = { index, inMonth, onClick, title: _date.toDateString() };
    // Conditionally render a styled date component
    // const DateComponent = isCurrent
    //   ? Styled.HighlightedCalendarMonth
    //   : isToday
    //   ? Styled.TodayCalendarMonth
    //   : Styled.CalendarMonthItem;
    const isCurrentMonth = index + 1 === THIS_MONTH;
    const MonthComponent = isCurrentMonth
      ? Styled.CurrentCalendarMonth
      : isToday
      ? Styled.CurrentCalendarMonth
      : Styled.CalendarMonthItem;
    return (
      <MonthComponent key={getDateISO(_date)} {...props}>
        <p style={{ marginTop: -6 }}>{CALENDAR_MONTHS[monthKey]}</p>
      </MonthComponent>
    );
  };
  // Render the month and year header with arrow controls
  // for navigating through months and years
  renderMonthAndYear = () => {
    const { mode, month, year } = this.state;

    // Resolve the month name from the CALENDAR_MONTHS object map
    const monthname = Object.keys(CALENDAR_MONTHS)[
      Math.max(0, Math.min(month - 1, 11))
    ];

    return (
      <Styled.CalendarHeader>
        <Styled.CalendarMonth>
          {mode === CALENDAR_MODE.day && monthname}{" "}
          <span onClick={this.props.onChangeViewMode}>{year}</span>
        </Styled.CalendarMonth>

        <div>
          <Styled.ArrowSvgLeft
            onMouseDown={this.handlePrevious}
            onMouseUp={this.clearPressureTimer}
            title="Previous Month"
            style={{ left: "140px" }}
          />
          <Styled.ArrowSvgRight
            onMouseDown={this.handleNext}
            onMouseUp={this.clearPressureTimer}
            title="Next Month"
          />
        </div>
      </Styled.CalendarHeader>
    );
  };

  // Render the label for day of the week
  // This method is used as a map callback as seen in render()
  renderDayLabel = (day, index) => {
    // Resolve the day of the week label from the WEEK_DAYS object map
    const daylabel = WEEK_DAYS[day].toUpperCase();

    return (
      <Styled.CalendarDay key={index} index={index}>
        {daylabel}
      </Styled.CalendarDay>
    );
  };

  // Render a calendar date as returned from the calendar builder function
  // This method is used as a map callback as seen in render()
  renderCalendarDate = (date, index) => {
    const { current, month, year, today } = this.state;
    const _date = new Date(date.join("-"));

    // Check if calendar date is same day as today
    const isToday = isSameDay(_date, today);

    // Check if calendar date is same day as currently selected date
    const isCurrent = current && isSameDay(_date, current);

    // Check if calendar date is in the same month as the state month and year
    const inMonth =
      month && year && isSameMonth(_date, new Date([year, month, 1].join("-")));

    // The click handler
    const onClick = this.gotoDate(_date);

    const props = { index, inMonth, onClick, title: _date.toDateString() };

    // Conditionally render a styled date component
    const DateComponent = inMonth
      ? isCurrent
        ? Styled.HighlightedCalendarDate
        : isToday
        ? Styled.TodayCalendarDate
        : Styled.CalendarDate
      : Styled.DeactivatedCalendarDate;

    return (
      <DateComponent key={getDateISO(_date)} {...props}>
        <p
          style={{
            marginTop: -6,
            color: inMonth
              ? isCurrent
                ? "#fff"
                : isToday
                ? "#00395d"
                : "#666600"
              : "#d5d5d6"
          }}
        >
          {_date.getDate()}
        </p>
      </DateComponent>
    );
  };

  render() {
    const { mode } = this.props;

    return (
      <Styled.CalendarContainer style={{ padding: 12 }}>
        {this.renderMonthAndYear()}
        {mode === CALENDAR_MODE.day && (
          <Styled.CalendarGrid>
            <Fragment>
              {Object.keys(WEEK_DAYS).map(this.renderDayLabel)}
            </Fragment>

            <Fragment>
              {this.getCalendarDates().map(this.renderCalendarDate)}
            </Fragment>
          </Styled.CalendarGrid>
        )}
        {mode === CALENDAR_MODE.month && (
          <Styled.CalendarMonthGrid>
            <Fragment>
              {Object.keys(CALENDAR_MONTHS).map(this.renderMonth)}
            </Fragment>
          </Styled.CalendarMonthGrid>
        )}
      </Styled.CalendarContainer>
    );
  }
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  onDateChanged: PropTypes.func
};

export default Calendar;