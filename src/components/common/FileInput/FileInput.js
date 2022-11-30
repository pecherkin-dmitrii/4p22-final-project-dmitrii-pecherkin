import styled from "styled-components";
import {
    ACCENT_COLOR,
    BUTTON_ACTIVE_ACCENT_COLOR,
    BUTTON_HOVER_ACCENT_COLOR,
    ERROR_COLOR,
    NOT_A_PICTURE_ERROR_TEXT,
    StyledValidationErrorElement,
    WHITE_COLOR
} from "../CommonStyles";
import {useState} from "react";
import {createValidationObject} from "../../../utils/utils";
import {setFileAdded, setFileValid} from "../../../store/formValidationSlice";
import {useDispatch} from "react-redux";

const ALLOWED_FILE_EXTENSIONS = ["jpg", "png"];
const MAX_FILE_SIZE = 5242880;
const BIG_FILE_ERROR_TEXT = `Размер файла не должен превышать ${(MAX_FILE_SIZE / 1048576).toFixed(0)}Mb`;

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  margin-bottom: ${props => props.validation.isValid ? "25px" : "2px"};
  width: 190px;

  &:hover span {
    background-color: ${BUTTON_HOVER_ACCENT_COLOR};
  }

  &:active span {
    background-color: ${BUTTON_ACTIVE_ACCENT_COLOR};
  }
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
`;

const StyledSpan = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  font-size: 14px;
  color: ${WHITE_COLOR};
  text-align: center;
  border-radius: 5px;
  background-color: ${props => props.validation.isValid ? ACCENT_COLOR : ERROR_COLOR};
  height: 35px;
  padding: 10px 20px;
  border: none;
  transition: .3s background-color;
`;

function FileInput({text, name}) {
    const [buttonTitle, setButtonTitle] = useState(text);
    const [validation, setValidation] = useState(createValidationObject());

    const dispatch = useDispatch();

    const handleFileInputChange = (event) => {
        dispatch(setFileAdded(true));
        const currentFile = event.target.files[0];
        setButtonTitle(currentFile.name)

        if (!ALLOWED_FILE_EXTENSIONS.includes(currentFile.name.split(".")[1].toLowerCase())) {
            setValidation(createValidationObject(false, NOT_A_PICTURE_ERROR_TEXT));
            dispatch(setFileValid(false));
        } else if (currentFile.size > MAX_FILE_SIZE) {
            setValidation(createValidationObject(false, BIG_FILE_ERROR_TEXT));
            dispatch(setFileValid(false));
        } else {
            setValidation(createValidationObject());
            dispatch(setFileValid(true));
        }
    };

    return (
        <>
            <StyledLabel validation={validation}>
                <StyledInput type="file" name={name} aria-label={text} onChange={handleFileInputChange}/>
                <StyledSpan validation={validation}>{buttonTitle}</StyledSpan>
            </StyledLabel>
            <StyledValidationErrorElement validation={validation}>{validation.errorText}</StyledValidationErrorElement>
        </>
    );
}

export default FileInput;