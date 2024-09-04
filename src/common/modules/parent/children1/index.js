import React from "react";
import SubChild1 from "./subChildren/subChild1";
import SubChild2 from "./subChildren/subChild2";

function Children1(props) {
  return (
    <div>
      child 1
      <SubChild1 setValue={props.setValue} />
      <SubChild2 />
    </div>
  );
}

export default Children1;
