import styled from "styled-components";

export const ACCENT_COLOR = "#FF8F52";
export const BUTTON_HOVER_ACCENT_COLOR = "#ffaa7d";
export const BUTTON_ACTIVE_ACCENT_COLOR = "#cf7342";
export const BLACK_COLOR = "#000000";
export const WHITE_COLOR = "#FFFFFF";
export const GREY_COLOR = "#838383";
export const ERROR_COLOR = "red";

export const CURRENCY = "$";
export const REQUIRED_FIELD_ERROR_TEXT = "Поле обязательно для заполнения";
export const INCORRECT_EMAIL_ERROR_TEXT = "Введите корректный email";
export const NOT_A_PICTURE_ERROR_TEXT = "К загрузке возможны только изображения";

export const StyledContainer = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 699px) {
    width: 285px;
  }
  
  @media screen and (min-width: 700px) and (max-width: 1023px) {
    width: 590px;
  }
  
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    width: 900px;
  }
`;

export const StyledInput = styled.input`
  border: 1.5px solid ${props => props.validation.isValid ? GREY_COLOR : ERROR_COLOR};
  color: ${BLACK_COLOR};
  outline: none;
  padding: 10px;
  height: 35px;
  font-size: 1.3rem;
  margin-bottom: ${props => props.validation.isValid ? "13px" : "2px"};
  transition: .3s border-color;

  &::placeholder {
    color: ${GREY_COLOR};
  }

  &:focus {
    border-color: ${props => props.validation.isValid ? ACCENT_COLOR : ERROR_COLOR};
  }
`;

export const StyledInputLabel = styled.label`
  position: relative;
  color: ${GREY_COLOR};
  font-size: 0.9rem;
  margin-bottom: 2px;

  &::before {
    position: absolute;
    content: "*";
    left: -7px;
    color: ${ACCENT_COLOR};
  }
`;

export const StyledValidationErrorElement = styled.div`
  display: ${props => props.validation.isValid ? "none" : "block"};
  margin-bottom: 13px;
  font-size: 0.9rem;
  color: ${ERROR_COLOR};
`