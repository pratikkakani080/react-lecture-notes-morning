import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "..";

function BlogDetails() {
  const params = useParams();
  const [blogdDetails, setBlogDetails] = useState({});

  useEffect(() => {
    setBlogDetails(blogData.find((el) => el.slug === params.blogId));
  }, [params]);

  return (
    <div>
      This is blog details component rendering blog related to {params.blogId}
      <br></br>
      <h4>{blogdDetails.name}</h4>
      <span>{blogdDetails.desc}</span>
    </div>
  );
}

export default BlogDetails;
