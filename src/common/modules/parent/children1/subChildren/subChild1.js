import React, { useState } from "react";
import Button from "../../../../components/button";
import { storeData } from "../../../../utils/storage";

function SubChild1(props) {
  const [data, setData] = useState("");
  return (
    <div>
      SubChild1
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <Button ButtonText={"click me"} onClick={() => props.setValue(data)} />
    </div>
  );
}

export default SubChild1;
