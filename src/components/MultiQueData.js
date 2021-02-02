import React from "react";

function MultiQueData({ multiQue }) {
  // const optionLength = Object.keys(multiQue).length;
  return (
    <div>
      {multiQue.map((que, index) => (
        <form key={index}>
          {/* <p>{que.question}</p> */}
          {/* <input type="radio" id="yes" name="option" value="yes"></input>
          <label>Yes</label>
          <br></br>
          <input type="radio" id="no" name="option" value="no"></input>
          <label>No</label> */}
        </form>
      ))}
    </div>
  );
}

export default MultiQueData;
