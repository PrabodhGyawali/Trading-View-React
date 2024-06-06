import React, { useEffect } from "react";

const ChartTop = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: props.symbol,
      width: "100%",
      colorTheme: props.theme ? "light" : "dark",
      isTransparent: false,
      locale: "en",
    });

    // Assuming 'chart-top' is the class of the div where the widget will be mounted
    const container = document.querySelector(".chart-top");
    container.innerHTML = ""; // Clear the container before appending the new script
    container.appendChild(script);

    // Clean up function to remove script when the component unmounts or updates
    return () => {
      container.innerHTML = "";
    };
  });

  return <div className="chart-top" />;
};

export default ChartTop;
