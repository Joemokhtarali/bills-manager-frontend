import { React, useState } from "react";

export default function Login() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const changeUserName = (e) => {
    setuserName(e.target.value);
  };

  const changepassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login', userName, password);
  };
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup', userName, password);
  };

  return (
    <div style={{ height: "400px", width: "200px"}}>
      
      <form
        style={{ display: "flex", flexDirection: "column" , textAlign: 'center'}}
      >
        <input
          type="text"
          onChange={changeUserName}
          value={userName}
          placeholder="User Name"
        />
        <input
          type="password"
          onChange={changepassword}
          value={password}
          placeholder="Password"
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button style={{ width: "100px" }} type="submit" onClick={handleLoginSubmit}>
            Login
          </button>
          <button style={{ width: "100px" }} onClick={handleSignupSubmit}>Signup</button>
        </div>
      </form>
    </div>
  );
}
