import React, { useState } from "react";
import Nav from "./Nav.jsx";
import ChartTop from "./ChartTop.jsx";
import ChartBottom from "./ChartBottom.jsx";


function StockPage() {
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
    <div className="flex-container">
      <Nav search={search} changeTheme={changeTheme} />
      <ChartTop symbol={symbol} theme={theme} />
      <ChartBottom symbol={symbol} theme={theme} />
    </div>
  );
}

export default StockPage;
