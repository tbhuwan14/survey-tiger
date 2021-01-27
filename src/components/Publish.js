import React, { useState } from "react";
import { Button } from "reactstrap";
import MultiQueData from "./MultiQueData";
import SingleQueData from "./SingleQueData";

function Publish({ finalData, history }) {
  const [singleRadioData, setSingleRadioData] = useState([]);
  const [multiRadioData, setMultiRadioData] = useState([]);

  const singleQue = finalData.filter((data) => data.key === "single");
  const multiQue = finalData.filter((data) => data.key === "multi");

  const handlePublishToServer = () => {
    console.log("Sending Data To Server");
    setTimeout(() => {
      console.log("Sent!!!");
    }, 2000);
    history.replace("/");
  };

  return (
    <div>
      <SingleQueData
        singleQue={singleQue}
        setSingleRadioData={setSingleRadioData}
        singleRadioData={singleRadioData}
      />
      <MultiQueData
        multiQue={multiQue}
        multiRadioData={multiRadioData}
        setMultiRadioData={setMultiRadioData}
      />
      <Button disabled={finalData.length <= 0} onClick={handlePublishToServer}>
        Confirm
      </Button>
    </div>
  );
}

export default Publish;
