export function createValidationObject(isValid = true, errorText = "") {
    return {
        isValid: isValid,
        errorText: errorText
    };
}