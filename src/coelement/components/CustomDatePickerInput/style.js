import styled from 'styled-components';

export const CalendarInputSpan = styled.span.attrs({ className: 'icon-calendar' })`
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
      color: #666666;
  z-index: 2;
`;
export const CalendarInput = styled.input.attrs({ className: 'form-control' })`
  
`;
