import React, { useState } from "react";
import ChartTop from "./ChartTop.jsx";
import ChartBottom from "./ChartBottom.jsx";

function App() {
  const [symbol, setSymbol] = useState("NASDAQ:AAPL");
  const [theme, setTheme] = useState(true); // true for light, false for dark

  function search() {
    var search = document.querySelector(".searchBar input");
    setSymbol(search.value);
  }
  function changeTheme() {
    setTheme(!theme);
    // Change "grid-container"
    var container = document.querySelector(".flex-container");
    var search = document.querySelector(".searchBar input");
    if (theme) {
      container.classList.add("dark");
      search.classList.add("dark");
    } else {
      container.classList.remove("dark");
      search.classList.remove("dark");
    }
  }

  return (
    <div className="grid-container">
      <div class="nav">
        <div className="searchBar">
          <input type="text" placeholder="Search.." name="search" />
          <button onClick={search}>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <label className="switch">
          <input type="checkbox" onClick={changeTheme} />
          <span className="slider round"></span>
        </label>
      </div>
      
      <ChartTop symbol={symbol} theme={theme} />
      <ChartBottom symbol={symbol} theme={theme} />
    </div>
  );
}

export default App;
