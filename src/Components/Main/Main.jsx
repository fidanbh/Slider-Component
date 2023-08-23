import React from "react";
import { useState, createContext } from "react";

import Slider from "../Slider/Slider";
import Buttons from "../Buttons/Buttons";

export const UserContext = createContext(undefined);

const Main = () => {
  const data = [
    "https://th.bing.com/th/id/OIP.-hmgbhF-8sgxOGZ7cMWQHgHaE8?w=275&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.oB9V4YLwOlazxg0ww9rkQAHaE8?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.RwN1F-OllqHRzQ2cTrmAgwHaFj?w=250&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.213mmOXWDnzDliSXiItRvAHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.Vfway0_4IubTprj2kIZA8AHaE6?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.G9aWziCHbvLV-UHFyFRQpgHaEK?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.zyMZC5BCa_plF1sfVEEpQAHaFE?w=293&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.by3q8uwLkH6yXAOwEAOYTAHaE8?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.hq5IoMJ3jAywAMMAwUiEvQHaF7?w=236&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP._syIiS31sZazWuaH0imU5AHaFU?w=258&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.8PenPGFxmWwWA93d19ZKDwHaFj?w=244&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.YaU3ezubmQmD26K-302i4wHaDt?w=321&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP._drQzAUU6A5T8iJT04kcAQHaFj?w=240&h=180&c=7&r=0&o=5&pid=1.7",
  ];
  const [state, setState] = useState(data);
  const [count, setCount] = useState(1);

  const prevCount = () => {
    // setCount(count - 3);
    // if (count <0) {
    //   setCount(state.length - 3);
    // }

    if (count !== 1) {
      setCount(count - 3);
    } else if (count === 1) {
      setCount(state.length);
    }
  };
  const nextCount = () => {
    // setCount(count + 3);
    // console.log("hi");
    // if (count > state.length) {
    //   setCount(0);
    // }
    if (count !== state.length) {
      setCount(count + 3);
    } else if (count === state.length) {
      setCount(1);
    }
  };

  const user = {
    state,
    count,
    prevCount,
    nextCount,
  };

  return (
    <>
      <UserContext.Provider value={user}>
        <Slider />
        <Buttons />
      </UserContext.Provider>
    </>
  );
};

export default Main;
