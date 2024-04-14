// TradingViewWidget.jsx
import React, { useEffect } from "react";
// use react states, hooks

function ChartBottom(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    const config = {
      width: "100%",
      height: "610",
      symbol: props.symbol, // "NASDAQ:AAPL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: props.theme ? "light" : "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      hide_top_toolbar: true,
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com",
    };
    script.innerHTML = JSON.stringify(config);
    // Assuming 'chart-top' is the class of the div where the widget will be mounted
    const container = document.querySelector(".chart-bottom");
    container.innerHTML = ""; // Clear the container before appending the new script
    container.appendChild(script);

    // Clean up function to remove script when the component unmounts or updates
    return () => {
      container.innerHTML = "";
    };
  });

  return (
    <div
      className="chart-bottom"
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
}

export default ChartBottom;
