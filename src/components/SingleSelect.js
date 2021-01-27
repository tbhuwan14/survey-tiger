import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";
import Validator from "../utills/QuestionValidationError";

function SingleSelect({ props, setDropDownSelect }) {
  const { finalData, setFinalData, history } = props;
  const [queData, setQueData] = useState({
    key: "single",
    question: "",
  });

  const [errors, setErrors] = useState({});

  const handleAddQuestion = () => {
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length !== 0) return;

    const newFinalData = [...finalData];
    newFinalData.push(queData);
    setFinalData(newFinalData);
    setQueData({
      key: "single",
      question: "",
    });
    setDropDownSelect("Select Question Type");
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
    const { value, name } = input;
    const newQueData = { ...queData };
    newQueData[name] = value;
    setQueData(newQueData);

    const newErrors = { ...errors };
    newErrors[name] = Validator(name, value);
    setErrors(newErrors);
  };

  const handlePublish = () => {
    history.replace("/publish");
  };

  return (
    <div className="question-container">
      <InputGroup className="input-question">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input
          onChange={handleChange}
          name="question"
          id="question"
          placeholder="Enter Your Question"
          value={queData.question}
        />
      </InputGroup>
      {errors.question && (
        <div className="alert alert-danger">{errors.question}</div>
      )}
      <InputGroup className="input-question">
        <Input name="option1" id="yes" value="Yes" readOnly />
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="input-question">
        <Input name="option2" id="no" value="No" readOnly />
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <Button onClick={handleAddQuestion}>Add Question</Button>
      <Button onClick={handlePublish}>Publish</Button>
    </div>
  );
}

export default SingleSelect;
