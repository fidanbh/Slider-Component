import React from "react";
import { useContext } from "react";
import { UserContext } from "../Main/Main";
import './slider.css'

const Slider = () => {
  const user = useContext(UserContext);
  const { state, count } = user;

  return (
    <div className="slider">
      <img src={state[count]}></img>
      <img src={state[count + 1]}></img>
      <img src={state[count + 2]}></img>
    </div>
  );
};

export default Slider;
