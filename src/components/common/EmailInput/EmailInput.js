import {useState} from "react";
import {
    INCORRECT_EMAIL_ERROR_TEXT,
    REQUIRED_FIELD_ERROR_TEXT,
    StyledInput,
    StyledInputLabel,
    StyledValidationErrorElement
} from "../CommonStyles";
import {createValidationObject} from "../../../utils/utils";
import {useDispatch} from "react-redux";
import {setEmailValid} from "../../../store/formValidationSlice";

const VALID_EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function EmailInput({text, id, name, placeholder, required}) {
    const [validation, setValidation] = useState(createValidationObject());

    const dispatch = useDispatch();

    const handleInput = (event) => {
        const emailString = event.target.value.trim();
        if (emailString.length === 0) {
            setValidation(createValidationObject(false, REQUIRED_FIELD_ERROR_TEXT));
            dispatch(setEmailValid(false));
        } else if (!VALID_EMAIL_REGEX.test(emailString)) {
            setValidation(createValidationObject(false, INCORRECT_EMAIL_ERROR_TEXT));
            dispatch(setEmailValid(false));
        } else {
            setValidation(createValidationObject());
            dispatch(setEmailValid(true));
        }
    };

    return (
        <>
            <StyledInputLabel>{text}</StyledInputLabel>
            <StyledInput id={id} type="email" name={name} aria-label={text} placeholder={placeholder} validation={validation}
                         onChange={handleInput} required={required}/>
            <StyledValidationErrorElement validation={validation}>{validation.errorText}</StyledValidationErrorElement>
        </>
    );
}

export default EmailInput;