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
      <h4>Monthly Applications</h4>
      <div>
        <h3 style={{ display: "inline", color: "var(--primary)" }}>
          {barChart ? "Bar Chart" : "Area Chart"}
        </h3>
      </div>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Show Area Chart" : "Show Bar Chart"}
      </button>
    </Wrapper>
  );
};

export default ChartsContainer;
