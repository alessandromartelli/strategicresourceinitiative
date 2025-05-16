
import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface RiskReductionChartProps {
  data: Array<{ year: string; risk: number }>;
}

const RiskReductionChart: React.FC<RiskReductionChartProps> = ({ data }) => {
  return (
    <div className="bg-secondary-50 p-6 rounded-xl">
      <h3 className="text-lg font-medium mb-4">5-Year Risk Reduction</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="risk" fill="#ef4444" name="Risk Score" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RiskReductionChart;
