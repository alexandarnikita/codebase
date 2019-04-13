import styled from "styled-components";

export const CustomRadio = styled.label`
  display: block;
  position: relative;
  padding-left: 20px;
  font-size: 14px;
  font-weight: normal;
  color: #00395D;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  span {
    position: absolute;
    top: 3px;
    left: 0;
    height: 14px;
    width: 14px;
    background-color: #fff;
    border: 1px solid #bfbfbf;
    border-radius: 50%;
  }
  
  &:hover input ~ span {
    background-color: #ccc;
  }
  
  input:checked ~ span {
    background-color: #ffffff;
  }
  
  span:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  input:checked ~ span:after {
    display: block;
  }
  
  span:after {
    top: 3px;
    left: 3px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #0074A6;
  }
`;
