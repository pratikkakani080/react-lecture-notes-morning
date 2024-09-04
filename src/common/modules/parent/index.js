import React from "react";
import Children1 from "./children1";
import Children2 from "./children2";

function Parent() {
  const [value, setValue] = React.useState("");
  console.log("value***", value);

  return (
    <div>
      this is parent comp
      <Children1 setValue={setValue} />
      <Children2 value={value} />
    </div>
  );
}

export default Parent;
