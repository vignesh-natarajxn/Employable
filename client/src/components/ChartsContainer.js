import React, { useState } from "react";

import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppContext();
  return (
    <Wrapper>
      <h3 style={{ display: "inline" }}>Monthly Applications - </h3>
      <h3 style={{ display: "inline", color: "var(--primary)" }}>
        {barChart ? "Bar Chart" : "Area Chart"}
      </h3>
      <div></div>
      <button
        style={{ marginTop: "15px", marginBottom: "10px" }}
        type="button"
        onClick={() => setBarChart(!barChart)}
      >
        {barChart ? "Show Area Chart" : "Show Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
