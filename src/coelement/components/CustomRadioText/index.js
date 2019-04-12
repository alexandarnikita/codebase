
import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./style";


class CustomRadioText extends React.Component {
    static propTypes = {
        onClick: PropTypes.func,
        value: PropTypes.string
    }

    render() {
        const {value, onClick} = this.props;

        return (

          <div className="form-group" id="formRadio">
              <Styled.RadioContent type="radio" style={{marginTop:-6}}  classname='radiotext_1' value={value} onClick={{onClick}}/>
              <Styled.LabelText className="TextFileLabel" >Option</Styled.LabelText>


          </div>

        );
    }
}
export default CustomRadioText;
