import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { getStoredData, storeData } from "../../utils/storage";

function Dashboard() {
  const navigate = useNavigate();
  const [bgColor, setBgColor] = useState("pink");
  const [recipes, setRecipes] = useState({});
  const className_bgColor = "bgColor";

  useEffect(() => {
    // write your logic here to execute on load
    fetch("https://dummyjson.com/recipes?limit=50")
      .then((res) => res.json())
      .then((result) => setRecipes(result))
      .catch((err) => console.log(err));
    console.log("component mounted*****", getStoredData("this is testing"));

    // clean up function
    return () => {
      // write your logic here to execute while unloading
      console.log("component unmounted*****");
      // localStorage.clear();
    };
  }, [bgColor]);

  const handleClick = () => {
    // navigate("/login");
    storeData("this is testing", { key1: 3 });
    // sessionStorage.setItem
    // sessionStorage.getItem
    // sessionStorage.clear()
    setBgColor(bgColor === "green" ? "pink" : "green");
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
        bgColor={bgColor}
        className={className_bgColor}
        onClick={() => navigate(`/login`)}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {recipes.recipes?.map((el) => {
          return (
            <div key={el.id} style={{ padding: "0 10px" }}>
              <h4>{el.name}</h4>
              <img src={el.image} alt="recipe_image" height={150} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
