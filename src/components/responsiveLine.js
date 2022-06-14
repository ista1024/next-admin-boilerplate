import React from "react";
import { ResponsiveLine } from "@nivo/line";

const ResponsiveLineChart = ({ data, lightTheme }) => {
  const commonProperties = {
    width: 700,
    height: 400,
    margin: { top: 30, right: 100, bottom: 100, left: 50 },
    animate: true,
    labelTextColor: "Red",
    pointLabelYOffset: 0,
    enableSlices: "x",
  };

  return (
    <ResponsiveLine
      margin={{
        top: 20,
        right: 20,
        bottom: 60,
        left: 80,
      }}
      {...commonProperties}
      data={data}
      yScale={{ type: "linear", stacked: false, min: -200 }}
    />
  );
};

export default ResponsiveLineChart;
