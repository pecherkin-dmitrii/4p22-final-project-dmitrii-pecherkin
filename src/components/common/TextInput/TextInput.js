import {useState} from "react";
import {REQUIRED_FIELD_ERROR_TEXT, StyledInput, StyledInputLabel, StyledValidationErrorElement} from "../CommonStyles";
import {createValidationObject} from "../../../utils/utils";
import {useDispatch} from "react-redux";
import {setNameValid} from "../../../store/formValidationSlice";

function TextInput({text, id, name, placeholder, required}) {
    const [validation, setValidation] = useState(createValidationObject());

    const dispatch = useDispatch();

    const handleInput = (event) => {
        const nameString = event.target.value.trim();
        if (nameString.length === 0) {
            setValidation(createValidationObject(false, REQUIRED_FIELD_ERROR_TEXT));
            dispatch(setNameValid(false));
        } else {
            setValidation(createValidationObject());
            dispatch(setNameValid(true));
        }
    };

    return (
        <>
            <StyledInputLabel>{text}</StyledInputLabel>
            <StyledInput id={id} type="text" name={name} aria-label={text} placeholder={placeholder} validation={validation}
                         onChange={handleInput} required={required}/>
            <StyledValidationErrorElement validation={validation}>{validation.errorText}</StyledValidationErrorElement>
        </>
    );
}

export default TextInput;