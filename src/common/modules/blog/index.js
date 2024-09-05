import React, { useRef } from "react";
import Button from "../../components/button";

function Blog() {
  const myRef = useRef(0);
  console.log("myRef*******", myRef);

  const handleOnChange = (e) => {
    myRef.current = e.target.value;
  };

  return (
    <div>
      This is blog component
      <input type="text" onChange={handleOnChange} />
      <Button
        ButtonText={"Click me"}
        onClick={() => console.log(myRef.current)}
      />
    </div>
  );
}

export default Blog;
