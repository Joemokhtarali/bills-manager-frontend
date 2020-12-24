import { React, useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Login() {
  const classes = useStyles();
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
    let data = {user_name: userName, password: password}

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
    .then(response => {
      if(response.errors){
        alert(response.errors)
      }else {
        console.log(response);
        console.log('signed in')
        // assign current user 
        // redirect page  
      }
    })
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    let data = {user_name: userName, password: password}
    

    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
      .then(response => {
      if(response.errors){
        alert(response.errors)
      }else{
        console.log(response);
        console.log('signed up')
      }
    })
  };

  return (
    <div style={{ height: "400px", width: "400px" }}>
      <FormControl className={classes.margin} style={{ marginLeft: "50px" }}>
        <TextField
          required
          type="text"
          id="login-name"
          label="Username"
          // value={name}
          onChange={changeUserName}
        />
        <TextField
          required
          id="login-password"
          type="password"
          value={password}
          label="password"
          onChange={changepassword}
        />
        <div style={{ width: "200px", display: "flex", margin: '10px' }}>
          <button style={{ width: "200px" }} onClick={handleSignupSubmit}>
            Signup
          </button>
          <button style={{ width: "200px" }} onClick={handleLoginSubmit}>
            Login
          </button>
        </div>
      </FormControl>
      {/* <form
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
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
          <button
            style={{ width: "100px" }}
            type="submit"
            onClick={handleLoginSubmit}
          >
            Login
          </button>
          <button style={{ width: "100px" }} onClick={handleSignupSubmit}>
            Signup
          </button>
        </div>
      </form> */}
    </div>
  );
}
