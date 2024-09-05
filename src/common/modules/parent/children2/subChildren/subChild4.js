import React, { useContext } from "react";
import MyContext from "../../../../lib/context";

function SubChild4(props) {
  const { count } = useContext(MyContext);
  return (
    <div>
      SubChild4
      <br />
      {props.value}
      <br />
      {count}
    </div>
  );
}

export default SubChild4;
