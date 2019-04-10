import styled from 'styled-components';
import { FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

export const DatePickerContainer = styled.div`
  position: relative;
  height:30px;
`;

export const DatePickerFormGroup = styled(FormGroup)`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 136px;
  height: 100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  overflow: hidden;
`;

export const DatePickerLabel = styled(Label)`
  margin: 0;
  width: 30px;
  font-size:16px;

  padding-left:6px;
  padding-right:6px;
  
  //padding-right: 6px;
  font-weight: 600;

  letter-spacing: 2px;
  text-transform: uppercase;
  color: #06c;
  border-left: 1px solid lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 102, 204, 0.05);
`;

export const DatePickerInput = styled(Input)`
  font-weight: 500;
  font-size: 14px;
  margin-left: 0px;
  color: #333;
  width:104px;
  height:30px;
  padding-left:9px;
  padding-right:9px;
  box-shadow: none;
  border: none;
  text-align: center;
  margin-top: 0px;
  //letter-spacing: 1px;
  background: transparent !important;
  display: flex;
  align-items: center;
  ::placeholder {
    color: #999;
    font-size: 12px;
  }
`;

export const DatePickerDropdown = styled(Dropdown)`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;

export const DatePickerDropdownToggle = styled(DropdownToggle)`
  position: relative;
  width: 106px;
  height:30px;
  padding-left:9px;
  padding-right:9px;
  background: transparent;
  opacity: 0;
  filter: alpha(opacity=0);
`;

export const DatePickerDropdownMenu = styled(DropdownMenu)`
  position: relative;
  top: 0;
  left: 0;
  width: 220px;
  border: none;
  padding: 0;
  margin: 0;
  transform: none !important;
`;