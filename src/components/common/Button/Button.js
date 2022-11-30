import styled from "styled-components";
import {ACCENT_COLOR, BUTTON_ACTIVE_ACCENT_COLOR, BUTTON_HOVER_ACCENT_COLOR, WHITE_COLOR} from "../CommonStyles";

const StyledButton = styled.button`
  background-color: ${ACCENT_COLOR};
  color: ${WHITE_COLOR};
  border-radius: 5px;
  padding: 7px 10px;
  font-size: 16px;
  transition: .3s background-color;

  &:hover {
    background-color: ${BUTTON_HOVER_ACCENT_COLOR};
  }

  &:active {
    background-color: ${BUTTON_ACTIVE_ACCENT_COLOR};
  }

  &:disabled {
    background-color: ${BUTTON_HOVER_ACCENT_COLOR};
    cursor: default;
  }
`;

function Button(props) {
    return (
        <StyledButton onClick={props.onClick} disabled={props.disabled}>{props.text}</StyledButton>
    );
}

export default Button;