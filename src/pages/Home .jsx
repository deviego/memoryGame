import "./home.css";
import React, { useState } from "react";
import brain from "../images/brain.png";


export function Home() {

  let user = '';
   function handleName(name) {
    user = name;
    return user
   } 
    
   function activeButton(user){
      i
   }

  
  return (
    <>
          <form className="login-form">
            <h1> Memory Game</h1>
            <div className="header-login">
              <img
                src={brain}
                alt="
          brain image"
              />
            </div>

            <input type="text" placeholder="Name" className="login-input" onChange={e => handleName(e.target.value) } />
            <button className="button-login" type="submit" onChange={activeButton()}>
              Play
            </button>
          </form>
    </>
  );
}
