
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RiskData } from '../types';
import { renderCustomizedLabel } from '../helpers';

interface RiskDistributionChartProps {
  data: RiskData[];
}

const RiskDistributionChart: React.FC<RiskDistributionChartProps> = ({ data }) => {
  return (
    <div className="bg-secondary-50 p-6 rounded-xl h-80">
      <h3 className="text-lg font-medium mb-4">Risk Distribution</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RiskDistributionChart;
