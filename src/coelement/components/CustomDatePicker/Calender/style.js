import styled from "styled-components";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

export const Arrow = styled.button`
  appearance: none;
  user-select: none;
  outline: none !important;
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: 0;
  border: none;
  border-top: 1.6em solid transparent;
  border-bottom: 1.6em solid transparent;
  transition: all 0.25s ease-out;
`;

export const ArrowLeft = styled(Arrow)`
  border-right: 2.4em solid #ccc;
  left: 140px;
  :hover {
    border-right-color: #06c;
  }
`;

export const ArrowRight = styled(Arrow)`
  border-left: 2.4em solid #ccc;
  right: 1.5rem;
  :hover {
    border-left-color: #06c;
  }
`;

export const ArrowSvgLeft = styled(ChevronLeft)`
  color: #0074a6;
  width: 10px !important;
  height: 10px !important;
  :hover {
    color: #4097bc;
    cursor: default;
  }
  :active {
    color: #00395d;
    cursor: pointer;
  }
`;

export const ArrowSvgRight = styled(ChevronRight)`
  color: #0074a6;
  width: 10px !important;
  height: 10px !important;
  margin-left: 6px;
  :hover {
    color: #4097bc;
    cursor: default;
  }
  :active {
    color: #00395d;
    cursor: pointer;
  }
`;

export const CalendarContainer = styled.div`
  font-size: 5px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  overflow: hidden;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template: repeat(7, auto) / repeat(7, auto);
`;

export const CalendarMonthGrid = styled.div`
  display: grid;
  grid-template: repeat(3, auto) / repeat(3, auto);
`;

export const CalendarMonth = styled.div`
  font-weight: 700;
  /* margin-left: -70px; */
  font-size: 16px;
  color: #0074a6;
  text-align: left;
  word-spacing: 5px;
  user-select: none;
`;

export const CalendarCell = styled.div`
  text-align: center;
  align-self: center;
  letter-spacing: 0.1rem;
  padding: 0.6em 0.25em;
  user-select: none;
  grid-column: ${props => (props.index % 7) + 1} / span 1;
`;

export const CalendarDay = styled(CalendarCell)`
  font-weight: 600;
  font-size: 12px;
  color: #4097bc;
  border-top: 1px solid lightgrey;
  border-bottom: 0px solid #06c;
  border-right: ${props =>
    (props.index % 7) + 1 === 7 ? `none` : `0px solid #06c`};
`;

export const CalendarDate = styled(CalendarCell)`
  font-weight: ${props => (props.inMonth ? 500 : 300)};
  font-size: 14px;
  height: 28px;
  width: 28px;
  cursor: pointer;
  border-bottom: ${props =>
    (props.index + 1) / 7 <= 5 ? `0px solid #ddd` : `none`};
  border-right: ${props =>
    (props.index % 7) + 1 === 7 ? `none` : `0px solid #ddd`};
  color: ${props => (props.inMonth ? `#666666` : `#ddd`)};
  grid-row: ${props => Math.floor(props.index / 7) + 2} / span 1;
  transition: all 0.4s ease-out;
  :hover {
    color: #06c;
    background: rgba(0, 102, 204, 0.075);
  }
`;

export const HighlightedCalendarDate = styled(CalendarDate)`
  color: #fff !important;
  background: #0074a6 !important;
  position: relative;
  top: 0px;
  ::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100%);
    height: calc(100%);
    border: 0px solid #06c;
  }
`;

export const DeactivatedCalendarDate = styled(CalendarDate)`
  color: #d5d5d6 !important;
`;

export const TodayCalendarDate = styled(HighlightedCalendarDate)`
  color: #00395d !important;
  width: 28px;
  background: transparent !important;
  border-bottom: 3px solid #00395d;
  p {
    color: #00395d;
  }
  :hover {
    color: #06c !important;
    background: rgba(0, 102, 204, 0.075) !important;
  }
`;

export const CalendarMonthCell = styled.div`
  text-align: center;
  align-self: center;
  letter-spacing: 0.1rem;
  padding: 0.6em 0.25em;
  user-select: none;
  grid-column: ${props => (props.index % 3) + 1} / span 1;
`;

export const CalendarMonthItem = styled(CalendarMonthCell)`
  font-weight: 500;
  font-size: 15px;
  height: 28px;
  cursor: pointer;
  border-bottom: ${props =>
    (props.index + 1) / 3 <= 1 ? `0px solid #ddd` : `none`};
  border-right: ${props =>
    (props.index % 3) + 1 === 3 ? `none` : `0px solid #ddd`};
  color: #666;
  grid-row: ${props => Math.floor(props.index / 3) + 2} / span 1;
  transition: all 0.4s ease-out;
  :hover {
    color: #06c;
    background: rgba(0, 102, 204, 0.075);
  }
`;

export const HighlightedCalendarMonth = styled(CalendarMonthItem)`
  color: #fff !important;
  background: #0074a6 !important;
  position: relative;
  top: 0px;
  ::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100%);
    height: calc(100%);
    border: 0px solid #06c;
  }
`;

export const CurrentCalendarMonth = styled(CalendarMonthItem)`
  color: #fff !important;
  background: #0074a6 !important;
  margin: 0 0.2em;
  padding: 0.6em 0;
  ::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    border-bottom: 10px solid #06c;
    border-left: 10px solid transparent;
    border-top: 10px solid transparent;
  }
  :hover {
    color: #06c !important;
    background: rgba(0, 102, 204, 0.075) !important;
  }
  p {
    border-bottom: 3px solid #00395d;
  }
`;
