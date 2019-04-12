
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';


export const RadioContent = styled(TextField).attrs({className: 'RadioText' })`

        width:14px;
        height:14px; 
        margin-top:-5px;             
        z-index: 2;
        color:#00ff00;

`;
export const LabelText = styled.span.attrs({className: 'RadioLabel' })`
       margin-left:6px;
       margin-top:3px;
       font-size:12px;
       font-weight:bolder;

`;


