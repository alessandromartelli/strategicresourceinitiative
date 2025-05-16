
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface AccuracyImprovementChartProps {
  data: Array<{ year: string; accuracy: number }>;
}

const AccuracyImprovementChart: React.FC<AccuracyImprovementChartProps> = ({ data }) => {
  return (
    <div className="bg-secondary-50 p-6 rounded-xl">
      <h3 className="text-lg font-medium mb-4">Prediction Accuracy Improvement</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="accuracy" stroke="#10b981" name="Accuracy %" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AccuracyImprovementChart;
