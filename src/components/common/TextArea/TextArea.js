import {useState} from "react";
import {
    ACCENT_COLOR,
    ERROR_COLOR,
    GREY_COLOR,
    REQUIRED_FIELD_ERROR_TEXT,
    StyledInputLabel,
    StyledValidationErrorElement
} from "../CommonStyles";
import {createValidationObject} from "../../../utils/utils";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {setTextareaValid} from "../../../store/formValidationSlice";

const StyledTextArea = styled.textarea`
  border: 1.5px solid ${props => props.validation.isValid ? GREY_COLOR : ERROR_COLOR};
  outline: none;
  font-size: 1.2rem;
  margin-bottom: ${props => props.validation.isValid ? "13px" : "2px"};
  transition: .3s border-color;

  &:focus {
    border-color: ${props => props.validation.isValid ? ACCENT_COLOR : ERROR_COLOR};
  }
`;

function TextArea({text, name, cols, rows, required}) {
    const [validation, setValidation] = useState(createValidationObject());

    const dispatch = useDispatch();

    const handleInput = (event) => {
        const messageString = event.target.value.trim();
        if (messageString.length === 0) {
            setValidation(createValidationObject(false, REQUIRED_FIELD_ERROR_TEXT));
            dispatch(setTextareaValid(false));
        } else {
            setValidation(createValidationObject());
            dispatch(setTextareaValid(true));
        }
    };

    return (
        <>
            <StyledInputLabel>{text}</StyledInputLabel>
            <StyledTextArea name={name} area-label={text} cols={cols} rows={rows} validation={validation}
                            onChange={handleInput} required={required}></StyledTextArea>
            <StyledValidationErrorElement validation={validation}>{validation.errorText}</StyledValidationErrorElement>
        </>
    );
}

export default TextArea;