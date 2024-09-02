import React, { useState } from "react";
import Button from "../../components/button";
import { storeData } from "../../utils/storage";

function Login() {
  // const [email, setEmail] =useState('')
  // const [password, setPassword] =useState('')
  // const [userName, setUserName] =useState('')

  const [userInfo, setUserInfo] = useState({})


  // console.log('email****', email, 'password****', password, 'setUserName****', userName);

  const handleChange = (event) => {
    const userData = {
      ...userInfo,
      [event.target.name]: event.target.value
    }
    setUserInfo(userData)
    
    // Object.assign(userInfo, userData)
    // setUserInfo((pre) => {return {...pre, userData}})

  }
  console.log('user*****', userInfo);

  const handleSubmit = () => {
    storeData('userCreds', userInfo);
  }
  
  return (
    <div>
      <form>
        <label>
          User Name:
        </label>
        <input type="text" id="username" name="username" onChange={(e) => handleChange(e)} />
        <br></br>
        <label>
          Email:
        </label>
        <input type="text" name="email" onChange={handleChange} />
        <br></br>
        <label>
          Password:
        </label>
        <input type="password" name="password" onChange={handleChange} />
        <Button ButtonText="Login" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default Login;
