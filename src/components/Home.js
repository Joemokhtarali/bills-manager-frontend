import { React, useEffect } from "react";
import Login from "../forms/login";
import "../stylesheets/home.css";

export default function Home() {

  useEffect(() => {
    const user_id = localStorage.user_id;
    if (user_id) {
      fetch("http://localhost:3000/auto_login", {
        headers: {
          Authorization: user_id,
        },
      })
        .then((resp) => resp.json())
        .then((response) => {
          if (response.errors) {
            alert(response.errors);
            // this.props.history.push("/");
          } else {
            console.log('new login')
          }
        });
    }
  }, []);


  return (
    <div className="home">
      <div className="left"></div>
      <div className="right">
        <h3>Welcome to Bills Manager</h3>
        <p>
          Bills Manager helps you keep track of all your Bills and Income for
          the month, so you can keep track and control your spending.
        </p>
        <Login />
      </div>
    </div>
  );
}
