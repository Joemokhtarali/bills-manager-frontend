import React from "react";
import Login from "../forms/login";
import '../stylesheets/home.css'

export default function Home() {
  return (
    <div className='home'>
      <div className='left'>

      </div>
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
