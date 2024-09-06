import React, { useCallback, useMemo, useRef, useState } from "react";
import Button from "../../components/button";

// Memo - to cache the component
// useMemo  - to cache expensive calculations || to cache value
// useCallback - to cache the function

function Blog() {
  const myRef = useRef(null);
  const [value, setValue] = useState("");
  const [buttonText, setButtonText] = useState("Click me");
  console.log("blog component re-rendering***");

  const memoizedValue = useMemo(() => {}, []);

  const handleOnChange = useCallback(() => {
    // myRef.current = e.target.value;
    myRef.current.style.backgroundColor = "red";
  }, [value]);

  return (
    <div>
      <p>This is blog component</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="text"
        value={buttonText}
        onChange={(e) => setButtonText(e.target.value)}
      />
      <Button ref={myRef} ButtonText={buttonText} onClick={handleOnChange} />
    </div>
  );
}

export default Blog;
