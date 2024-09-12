import React, { useCallback, useMemo, useRef, useState } from "react";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

// Memo - to cache the component
// useMemo  - to cache expensive calculations || to cache value
// useCallback - to cache the function

export const blogData = [
  {
    name: "test 1",
    slug: "123",
    desc: "this is test 1 blog",
  },
  {
    name: "test 2",
    slug: "234",
    desc: "this is test 2 blog",
  },
  {
    name: "test 3",
    slug: "345",
    desc: "this is test 3 blog",
  },
];

function Blog() {
  const myRef = useRef(null);
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [buttonText, setButtonText] = useState("Click me");
  console.log("blog component re-rendering***");

  const memoizedValue = useMemo(() => {}, []);

  const handleOnChange = useCallback(() => {
    // myRef.current = e.target.value;
    myRef.current.style.backgroundColor = "red";
  }, [value]);

  const handleBlogDetails = (data) => {
    navigate("/blog/blog-details/" + data.slug);
  };

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
      <br></br>
      {blogData.map((data, index) => (
        <div onClick={() => handleBlogDetails(data)}>
          <h5>{data.name}</h5>
          <span>{data.desc}</span>
        </div>
      ))}
    </div>
  );
}

export default Blog;
