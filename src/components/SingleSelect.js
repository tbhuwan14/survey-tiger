import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";

function SingleSelect({ queData, setQueData, handleAddQuestion }) {
  const handleChange = ({ target }) => {
    const newQueData = { ...queData };
    if (target.id === "question") {
      newQueData.question = target.value;
    }
    if (target.id === "yes") {
      newQueData.option1 = target.value;
    }
    if (target.id === "no") {
      newQueData.option2 = target.value;
    }
    setQueData(newQueData);
  };
  return (
    <div className="question-container">
      <InputGroup className="input-question">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input
          onChange={handleChange}
          id="question"
          placeholder="Enter Your Question"
          value={queData.question}
        />
      </InputGroup>
      <InputGroup className="input-question">
        <Input
          onChange={handleChange}
          id="yes"
          placeholder="Yes"
          value={queData.option1}
        />
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="input-question">
        <Input
          onChange={handleChange}
          id="no"
          placeholder="No"
          value={queData.option2}
        />
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <Button onClick={handleAddQuestion}>Add Question</Button>
      <Button>Publish</Button>
    </div>
  );
}

export default SingleSelect;
