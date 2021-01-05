import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import MultiSelect from "./MultiSelect.js";
import SingleSelect from "./SingleSelect.js";

function CreateSurvey({ finalData }) {
  const [dropdownOpen, setOpen] = useState(false);
  const [dropDownSelect, setDropDownSelect] = useState("Select Question Type");

  const toggle = () => setOpen(!dropdownOpen);

  const [singleQueData, setSingleQueData] = useState({
    question: "",
    option1: "",
    option2: "",
  });

  const handleAddQuestion = () => {
    finalData.push(singleQueData);
    setSingleQueData({
      question: "",
      option1: "",
      option2: "",
    });
    setDropDownSelect("Select Question Type");
    console.log(finalData);
  };

  return (
    <>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="dropdown-bar" caret>
          {dropDownSelect}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => setDropDownSelect("Single-Type")}>
            Single-Type
          </DropdownItem>
          <DropdownItem onClick={() => setDropDownSelect("Multi-Type")}>
            Multi-Type
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      {dropDownSelect === "Single-Type" ? (
        <SingleSelect
          queData={singleQueData}
          setQueData={setSingleQueData}
          handleAddQuestion={handleAddQuestion}
        />
      ) : null}
      {dropDownSelect === "Multi-Type" ? <MultiSelect /> : null}
    </>
  );
}

export default CreateSurvey;
