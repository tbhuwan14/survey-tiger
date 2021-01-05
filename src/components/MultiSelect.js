import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";

function MultiSelect() {
  const [options, setOptions] = useState([""]);
  const [multiQueData, setMultiQueData] = useState({ question: "" });
  const addOption = () => {
    if (options.length < 4) setOptions([...options, "1"]);
  };

  const removeOption = (ind) => {
    const newOption = options.filter((option, index) => index !== ind);
    setOptions(newOption);
  };

  const handleChange = ({ target }) => {
    const newMultiQueData = { ...multiQueData };
    if (target.id === "question") {
      newMultiQueData.question = target.value;
    }
    setMultiQueData(newMultiQueData);
  };

  return (
    <div className="question-container">
      <InputGroup className="input-question">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input
          id="question"
          onChange={handleChange}
          value={multiQueData.question}
          placeholder="Enter Your Question"
        />
      </InputGroup>
      {options.map((option, index) => (
        <InputGroup className="input-question">
          <Input
            onChange={() => handleChange(index)}
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
      ))}
      <Button>Add Question</Button>
      <Button>Publish</Button>
    </div>
  );
}

export default MultiSelect;
