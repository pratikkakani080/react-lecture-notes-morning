import React, { useState } from "react";
import Button from "../../components/button";
import { getStoredData, storeData } from "../../utils/storage";
import { useNavigate } from "react-router-dom";

function Login() {
  // const [email, setEmail] =useState('')
  // const [password, setPassword] =useState('')
  // const [userName, setUserName] =useState('')

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    const userData = {
      ...userInfo,
      [name]: name === "rememberMe" ? checked : value,
    };
    setUserInfo(userData);
    setErrors({ ...errors, [name]: "" });
    // Object.assign(userInfo, userData)
    // setUserInfo((pre) => {return {...pre, userData}})
  };

  const validateForm = () => {
    let isFormValid = true;
    let errors = {};

    if (!userInfo.email || userInfo.email.trim() === "") {
      isFormValid = false;
      errors.email = "* Email is required";
    }

    if (!userInfo.password || userInfo.password.trim() === "") {
      isFormValid = false;
      errors.password = "* Password is required";
    }

    setErrors(errors);
    return isFormValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const users = getStoredData("users");
      if (
        users.find(
          (user) =>
            user.email === userInfo.email && user.password === userInfo.password
        )
      ) {
        storeData("userCreds", userInfo);
        navigate("/dashboard");
      } else {
        alert("User not found");
      }
    }
  };

  return (
    <div>
      {/* <form> */}
      <label>User Name:</label>
      <input
        type="text"
        id="username"
        name="username"
        onChange={(e) => handleChange(e)}
      />

      <br></br>
      <label>Email:</label>
      <input type="text" name="email" onChange={handleChange} />
      <br></br>
      {errors.email && (
        <span style={{ color: "red", fontSize: "10px" }}>{errors.email}</span>
      )}

      <br></br>
      <label>Password:</label>
      <input type="password" name="password" onChange={handleChange} />
      <br></br>
      {errors.password && (
        <span style={{ color: "red", fontSize: "10px" }}>
          {errors.password}
        </span>
      )}
      <br></br>

      <input type="checkbox" name="rememberMe" onChange={handleChange} />
      <label htmlFor="checkbox">Remember me</label>

      <Button ButtonText="Login" onClick={handleSubmit} />
      {/* </form> */}
    </div>
  );
}

export default Login;
