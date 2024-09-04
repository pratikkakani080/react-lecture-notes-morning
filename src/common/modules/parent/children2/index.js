import React from "react";
import SubChild3 from "./subChildren/subChild3";
import SubChild4 from "./subChildren/subChild4";

function Children2(props) {
  return (
    <div>
      child 2
      <SubChild3 />
      <SubChild4 value={props.value} />
    </div>
  );
}

export default Children2;
