import { React, useState } from "react";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
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
    console.log("Login", userName, password);
  };
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Signup", userName, password);
  };

  return (
    <div style={{ height: "400px", width: "200px" }}>
      <FormControl
        className={classes.margin}
        style={{ "margin-left": "100px" }}
      >
        <TextField
          required
          type="text"
          id="standard-required"
          label="name"
          placeholder="User Name"
          // value={name}
          onChange={changeUserName}
        />
        <TextField
          required
          id="standard-required"
          type="password"
          value={password}
          label="password"
          placeholder="Password"
          onChange={changepassword}
        />
        <button style={{ width: "100px" }} onClick={handleSignupSubmit}>
          Signup
        </button>
        <button style={{ width: "100px" }} onClick={handleLoginSubmit}>
          Login
        </button>
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
