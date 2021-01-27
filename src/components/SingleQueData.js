import React from "react";

function SingleQueData({ singleQue, setSingleRadioData, singleRadioData }) {
  const onChangeValue = (e, que, ind) => {
    const queSet = {};
    queSet.question = que;
    queSet.answer = e.target.value;

    const newSingleRadioData = [...singleRadioData];
    newSingleRadioData[ind] = queSet;
    setSingleRadioData(newSingleRadioData);
  };
  return (
    <div>
      {singleQue.map((que, index) => (
        <form
          key={index}
          onChange={(e) => onChangeValue(e, que.question, index)}
        >
          <p>{que.question}</p>
          <input type="radio" id="yes" name="option" value="yes"></input>
          <label>Yes</label>
          <br></br>
          <input type="radio" id="no" name="option" value="no"></input>
          <label>No</label>
        </form>
      ))}
    </div>
  );
}

export default SingleQueData;
