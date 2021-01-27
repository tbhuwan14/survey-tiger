import errorObj from "./Errors";

export default function Validator(name, value) {
  if (name === "question" && !value.trim()) {
    return errorObj.queInputValidation;
  }
  if (name === "option1" && !value.trim()) {
    return errorObj.optionInputValidationError;
  }
  if (name === "option2" && !value.trim()) {
    return errorObj.optionInputValidationError;
  }
  if (name === "option3" && !value.trim()) {
    return errorObj.optionInputValidationError;
  }
  if (name === "option4" && !value.trim()) {
    return errorObj.optionInputValidationError;
  }
  return;
}
