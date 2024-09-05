import React, { useContext, useState } from "react";
import Button from "../../../../components/button";
import MyContext from "../../../../lib/context";

function SubChild1(props) {
  const [data, setData] = useState("");
  const { count, setCount } = useContext(MyContext);
  return (
    <div>
      SubChild1
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <Button
        ButtonText={"click me"}
        onClick={() => {
          props.setValue(data);
          setCount(count + 1);
        }}
      />
    </div>
  );
}

export default SubChild1;
