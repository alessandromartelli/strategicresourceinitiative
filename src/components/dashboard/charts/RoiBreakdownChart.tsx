
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ROIData } from '../types';
import { renderCustomizedLabel } from '../helpers';

interface RoiBreakdownChartProps {
  data: ROIData[];
}

const RoiBreakdownChart: React.FC<RoiBreakdownChartProps> = ({ data }) => {
  return (
    <div className="bg-secondary-50 p-6 rounded-xl h-80">
      <h3 className="text-lg font-medium mb-4">ROI Breakdown</h3>
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
              <Cell key={`cell-${index}`} fill={['#3b82f6', '#10b981', '#f59e0b', '#8884d8'][index % 4]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RoiBreakdownChart;
