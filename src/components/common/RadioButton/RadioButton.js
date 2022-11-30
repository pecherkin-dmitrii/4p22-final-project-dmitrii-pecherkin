import styled from "styled-components";
import {ACCENT_COLOR, GREY_COLOR, WHITE_COLOR} from "../CommonStyles";

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: ${GREY_COLOR};

  padding-left: 25px;
  margin-bottom: 9px;
  height: 20px;

  &:hover span {
    background-color: ${ACCENT_COLOR};
  }
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ span:after {
    display: block;
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${WHITE_COLOR};
  border-radius: 50%;
  border: 2px solid ${ACCENT_COLOR};
  height: 20px;
  width: 20px;
  transition: .3s background-color;

  &:after {
    content: "";
    position: absolute;
    display: none;
    border-radius: 50%;
    background-color: ${ACCENT_COLOR};
    width: 12px;
    height: 12px;
    top: 2px;
    left: 2px;
  }
`;

function RadioButton({text, name, value, checked}) {
    return (
        <StyledLabel>
            <StyledInput type="radio" name={name} value={value} defaultChecked={checked}/>
            <StyledSpan/>
            {text}
        </StyledLabel>
    );
}

export default RadioButton;