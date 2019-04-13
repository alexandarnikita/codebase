import 'react-datepicker/dist/react-datepicker.css'
import styled from "styled-components";

export const ReactDatePicker = styled.div.attrs({ className: 'react-date-styles' })`
  .react-datepicker {
    padding: 12px;
  }
  .react-datepicker__navigation {
  
    border: 0.3rem solid transparent;
  
    &.react-datepicker__navigation--next {
      top: 18px;
      right: 12px;
      width: 10px;
      height: 10px;
      border-left-color: #0074A6;
    }
    &.react-datepicker__navigation--previous {
      top: 18px;
      right: 28px;
      width: 10px;
      height: 10px;
      left: auto;
      border-right-color: #0074A6;
    }
  }
  
  .react-datepicker__month-wrapper {
    margin-top: 9px;
    margin-bottom: 9px;
    
    .react-datepicker__month-text {
      font-weight: 500;
      font-size: 15px;
      height: 28px;
      width: 56px;
      cursor: pointer;
      flex: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #666666;
    }
  }
  
  .react-datepicker-ignore-onclickoutside {
    border: 1px solid #0074a6;
    box-shadow: none;
  }
  
  
  .react-datepicker__header {
    padding-top: 0px;
    background: none;
    border: none;
    
    .react-datepicker__current-month {
      text-align: left;
      font-size: 16px;
      color: #0074A6;
      padding-bottom: 12px;
      border-bottom: 1px solid #d5d5d6;
      font-weight: normal;
    }
  }
  
  .react-datepicker-year-header {
      text-align: left;
      font-size: 16px;
      color: #0074A6;
      padding-bottom: 12px;
      border-bottom: 1px solid #d5d5d6;
      font-weight: normal;
  }
  
  .react-datepicker__month {
    margin: 0;
  }
  
  .react-datepicker__monthPicker {
    padding-top: 12px;
    
    .react-datepicker__month-1, .react-datepicker__month-4, .react-datepicker__month-7, .react-datepicker__month-10 {
      margin-left:14px;
      margin-right: 14px;
    }
  }
  
  .react-datepicker__day-names {
    margin-bottom: 1px;
  }
  
  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
    width: 28px;
    line-height: 28px;
    margin: 0;
    font-size: 14px;
    color: #666666;
  }
  
  .react-datepicker__day--today {
    border-bottom: 3px solid;
    color: #00395d;
  }
  
  .react-datepicker__day--outside-month {
    color: #d5d5d6;
  }
  
  .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range {
    border-radius: 0px;
    background-color: #0074A6 !important;
    color: white;
    border-bottom: 0px;
  }
  
  .react-datepicker__day:hover, .react-datepicker__month-text:hover {
    border-radius: 0px;
    background-color: #e5f2f8;
  }
  
  .react-datepicker__day-names {
    .react-datepicker__day-name {
      font-size: 12px;
      color: #4097bc;
    }
  }
  
  .react-datepicker-popper[data-placement^="bottom"] {
    margin-top: 6px;
  }
  
  .react-datepicker__triangle {
    display: none;
  }
  
  .react-datepicker__input-container {
    .form-group {
      margin: 0px;
    }
  
    input {
      padding: 9px;
      width: 122px;
      
      &:focus {
        border: 1px solid #0074A6;
        box-shadow: none;
        
        & + span {
          color: #0074A6;
          border-color: #0074A6;
        }
      }
    }
    
    p {
      font-family: 'codebase' !important;
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      content: "\\e900";
      position: absolute;
      right: 0;
      top: 0;
      font-size: 16px;
      border-left: 1px solid #cccccc;
      padding: 9px 6px;
      color: #0074A6;
    }
    
  }
  
  div < input.form-control.react-datepicker-ignore-onclickoutside {
      display: none !important;
  }
  
  div < div.react-datepicker__input-container {
    width: 100% !important;
  }
  
  $div.react-datepicker__input-container input.form-control.react-datepicker-ignore-onclickoutside {
    background-color: red;
  } 
  
`;
