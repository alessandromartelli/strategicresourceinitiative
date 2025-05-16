
import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface InvestmentSavingsChartProps {
  data: Array<{ year: string; investment: number; savings: number }>;
}

const InvestmentSavingsChart: React.FC<InvestmentSavingsChartProps> = ({ data }) => {
  return (
    <div className="bg-secondary-50 p-6 rounded-xl h-80">
      <h3 className="text-lg font-medium mb-4">Investment vs. Savings</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis label={{ value: 'USD (Millions)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#ef4444" name="Investment" />
          <Bar dataKey="savings" stackId="a" fill="#10b981" name="Savings" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InvestmentSavingsChart;
