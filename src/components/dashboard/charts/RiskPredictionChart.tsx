
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TimeSeriesData } from '../types';

interface RiskPredictionChartProps {
  data: TimeSeriesData[];
}

const RiskPredictionChart: React.FC<RiskPredictionChartProps> = ({ data }) => {
  return (
    <div className="bg-secondary-50 p-6 rounded-xl h-80">
      <h3 className="text-lg font-medium mb-4">Risk Prediction Accuracy</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="incidents" stroke="#3b82f6" activeDot={{ r: 8 }} name="Actual Incidents" />
          <Line type="monotone" dataKey="predictedRisk" stroke="#ef4444" name="Predicted Risk" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RiskPredictionChart;
