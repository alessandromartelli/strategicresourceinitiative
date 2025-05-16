
import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TimeSeriesData } from '../types';

interface HistoricalRiskChartProps {
  data: TimeSeriesData[];
}

const HistoricalRiskChart: React.FC<HistoricalRiskChartProps> = ({ data }) => {
  return (
    <div className="bg-secondary-50 p-6 rounded-xl">
      <h3 className="text-lg font-medium mb-4">Historical Risk Trend Analysis</h3>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="predictedRisk" stackId="1" stroke="#8884d8" fill="#8884d8" name="Predicted Risk" />
            <Area type="monotone" dataKey="incidents" stackId="2" stroke="#82ca9d" fill="#82ca9d" name="Actual Incidents" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HistoricalRiskChart;
