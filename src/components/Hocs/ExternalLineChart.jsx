import React from "react";
import LineChart from "../../features/dashboard/components/LineChart";
import useChartLineSystem from "../../hooks/useChartLineSystem";

const ExternalLineChart = () => {
  const { data, refetch , isSuccess } = useChartLineSystem();


  return isSuccess ?  <LineChart info={data?.data}></LineChart> : null;
};

export default ExternalLineChart;
