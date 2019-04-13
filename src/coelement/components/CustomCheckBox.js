import styled from "styled-components";

export const CustomCheckBox = styled.label`
  display: block;
  position: relative;
  padding-left: 20px;
  cursor: pointer;
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
    border-radius: 2px;
  }
  
  &:hover input ~ span {
    background-color: #ccc;
  }
  
  input:checked ~ span {
    background-color: #fff;
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
    left: 4px;
    top: 0px;
    width: 4px;
    height: 10px;
    border: solid #0074A6;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

`;
