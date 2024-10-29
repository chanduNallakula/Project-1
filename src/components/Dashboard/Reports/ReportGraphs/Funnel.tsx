import React from "react";
import { cursorTo } from "readline";
import { FunnelChart, Funnel, Tooltip, LabelList } from "recharts";
import styled from "styled-components";

const data = [
  {
    value: 140,
    name: "Impressions",
    fill: "#a4de6c",
  },
  {
    value: 60,
    name: "Reach",
    fill: "#82ca9d",
  },
  {
    value: 40,
    name: "Clicks",
    fill: "#8dd1e1",
  },
  {
    value: 26,
    name: "Conversions",
    fill: "#83a6ed",
  },
];

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const Charts = () => {
  return (
    <ChartContainer>
      <FunnelChart width={450} height={210}>
        <Tooltip />
        <Funnel
          lastShapeType="rectangle"
          dataKey="value"
          data={data}
          isAnimationActive
        >
          <LabelList
            position="right"
            fill="#000"
            stroke="none"
            dataKey="name"
          />
        </Funnel>
      </FunnelChart>
    </ChartContainer>
  );
};

export default Charts;
