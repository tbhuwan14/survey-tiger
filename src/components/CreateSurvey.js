import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import MultiSelect from "./MultiSelect.js";
import SingleSelect from "./SingleSelect.js";

function CreateSurvey(props) {
  const [dropdownOpen, setOpen] = useState(false);
  const [dropDownSelect, setDropDownSelect] = useState("Select Question Type");

  const toggle = () => setOpen(!dropdownOpen);

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
        <SingleSelect props={props} setDropDownSelect={setDropDownSelect} />
      ) : null}
      {dropDownSelect === "Multi-Type" ? (
        <MultiSelect props={props} setDropDownSelect={setDropDownSelect} />
      ) : null}
    </>
  );
}

export default CreateSurvey;
