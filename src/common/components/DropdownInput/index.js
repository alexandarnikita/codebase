import React from "react";
import Select from "react-select";

// const valuelist={[
//     { label: "Sweep Transactions1", vlaue: 1 },
//     { label: "Account Statements2", value: 2 }
// ]}

const indicatorNormalStyle = "linear-gradient(#f2f2f2, #FFF)";
const indicatorHoverStyle = "linear-gradient(#f5f7fa, #e2e9f0)";
const indicatorPressedStyle = "linear-gradient(#99cbe1, #eff6fa)";

const style = {
  container: base => ({
    ...base,
    fontSize: "14px!important",
    padding: "0px"
  }),
  option: base => ({
    ...base,
    color: "#595959",
    padding: "0px!important"
  }),
  control: base => ({
    ...base,
    padding: "0px",
    "&:focus": {
      borderColor: "#007eb6",
      boxShadow: "inset 5x 7px 3px 2px #007eb6 !important"
    }
  }),
  groupHeading: base => ({
    ...base,
    background: "red"
  }),
  input: base => ({
    ...base,
    padding: "0px",
    paddingLeft: "1px",
    margin: "0px",
    "&:hover": {
      borderColor: "#007eb6",
      boxShadow: "inset 5x 7px 3px 2px #007eb6"
    }
  }),
  loadingIndicator: base => ({
    ...base,
    background: "red"
  }),
  menu: base => ({
    ...base,
    paddingLeft: "10px",
    paddingRight: "10px"
  }),
  dropdownIndicator: base => ({
    ...base,
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    background: indicatorNormalStyle,
    "&:hover": {
      background: indicatorHoverStyle
    },
    "&:active": {
      background: indicatorPressedStyle
    }
  }),

  indicatorSeparator: base => ({
    ...base,
    margin: "0px"
  })
};

const theme = theme => ({
  ...theme,
  borderRadius: "8px",
  border: "1px solid #d5d5d6",
  colors: {
    ...theme.colors,
    text: "#595959",
    primary25: "#eff6fa",
    primary: "#7fbeda"
  }
});

const DropdownInput = props => (
  <div className="DropdownInput">
    <Select
      options={props.valuelist}
      styles={style}
      placeholder=""
      theme={theme}
    />
  </div>
);

export default DropdownInput;
