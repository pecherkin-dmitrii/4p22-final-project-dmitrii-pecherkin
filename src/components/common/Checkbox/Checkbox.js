import styled from "styled-components";
import {ACCENT_COLOR, GREY_COLOR, WHITE_COLOR} from "../CommonStyles";

const StyledLabel = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 20px;
  padding-left: 25px;
  margin-bottom: 25px;
  color: ${GREY_COLOR};

  &:hover span {
    background-color: ${ACCENT_COLOR};
  }
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:checked ~ span:after {
    display: block;
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: ${WHITE_COLOR};
  border: 2px solid ${ACCENT_COLOR};
  transition: .3s background-color;

  &:after {
    content: "";
    position: absolute;
    display: none;

    width: 12px;
    height: 12px;
    left: 2px;
    top: 2px;
    background-color: ${ACCENT_COLOR};
  }
`;

function Checkbox({text, name, value}) {
    return (
        <StyledLabel>
            <StyledInput type="checkbox" name={name} aria-label={text} value={value}/>
            <StyledSpan/>
            {text}
        </StyledLabel>
    );
}

export default Checkbox;