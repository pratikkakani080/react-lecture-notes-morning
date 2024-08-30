import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { LOGIN_PAGE_NAME } from "../../utils";

function Dashboard() {
  const navigate = useNavigate();
  const [bgColor, setBgColor] = useState("pink");
  const [recipes, setRecipes] = useState({});
  const className_bgColor = "bgColor";

  const handleClick = () => {
    // navigate("/login");
    setBgColor(bgColor === "green" ? "pink" : "green");
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((result) => setRecipes(result))
      .catch();
  };

  return (
    <div>
      this is dashboard
      <br />
      <a href="/users">To Users</a>
      <br />
      <Link to="/blog">To Blog</Link>
      <br />
      <button onClick={handleClick}>Redirect to login</button>
      <Button
        redirectPageName={LOGIN_PAGE_NAME}
        bgColor={bgColor}
        className={className_bgColor}
      />
      {recipes.recipes?.map((el) => {
        return <div key={el.id}>{el.name}</div>;
      })}
    </div>
  );
}

export default Dashboard;
