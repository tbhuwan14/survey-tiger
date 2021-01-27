import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";
import Validator from "../utills/QuestionValidationError";

function MultiSelect({ setDropDownSelect, props }) {
  const { finalData, setFinalData, history } = props;
  const [options, setOptions] = useState([""]);
  const [queData, setQueData] = useState({ key: "multi", question: "" });
  const [errors, setErrors] = useState({});
  const addOption = () => {
    if (options.length < 4) setOptions([...options, "1"]);
  };

  const removeOption = (ind) => {
    const newOption = options.filter((option, index) => index !== ind);
    setOptions(newOption);
  };

  const validate = () => {
    const newErrors = { ...errors };
    for (let key in queData) {
      newErrors[key] = Validator(key, queData[key]);
      if (!newErrors[key]) delete newErrors[key];
    }
    return newErrors;
  };

  const handleChange = ({ target: input }) => {
    const { id, value, name } = input;
    const newMultiQueData = { ...queData };
    newMultiQueData[id] = value;
    setQueData(newMultiQueData);

    const newErrors = { ...errors };
    newErrors[name] = Validator(name, value);
    setErrors(newErrors);
  };

  const handleAddQuestion = () => {
    const newErrors = validate();
    setErrors(newErrors);
    // console.log(newErrors);
    if (Object.keys(newErrors).length !== 0) return;

    const newFinalData = [...finalData];
    newFinalData.push(queData);
    setFinalData(newFinalData);
    setQueData({ key: "multi", question: "" });
    setDropDownSelect("Select Question Type");
  };

  const handlePublish = () => {
    console.log(finalData);
    history.replace("/publish");
  };

  return (
    <div className="question-container">
      <InputGroup className="input-question">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input
          id="question"
          name="question"
          onChange={handleChange}
          value={queData.question}
          placeholder="Enter Your Question"
        />
      </InputGroup>
      {errors.question && (
        <div className="alert alert-danger">{errors.question}</div>
      )}
      {options.map((option, index) => (
        <div key={index}>
          <InputGroup className="input-question">
            <Input
              name={`option${index + 1}`}
              id={`option${index + 1}`}
              onChange={handleChange}
              placeholder={`Option ${index + 1}`}
            />
            <InputGroupAddon addonType="append">
              <Button
                onClick={addOption}
                className="btn-survey"
                disabled={options.length === 4}
              >
                +
              </Button>
              <Button
                onClick={() => removeOption(index)}
                className="btn-survey"
                disabled={options.length === 1}
              >
                -
              </Button>
            </InputGroupAddon>
          </InputGroup>
          {errors[`option${index + 1}`] && (
            <div className="alert alert-danger">
              {errors[`option${index + 1}`]}
            </div>
          )}
        </div>
      ))}
      <Button onClick={handleAddQuestion}>Add Question</Button>
      <Button onClick={handlePublish}>Publish</Button>
    </div>
  );
}

export default MultiSelect;
