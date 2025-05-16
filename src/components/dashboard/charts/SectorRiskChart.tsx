
import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SectorRiskData } from '../types';

interface SectorRiskChartProps {
  data: SectorRiskData[];
}

const SectorRiskChart: React.FC<SectorRiskChartProps> = ({ data }) => {
  return (
    <div className="bg-secondary-50 p-6 rounded-xl">
      <h3 className="text-lg font-medium mb-4">Sector Risk Comparison</h3>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="risk" fill="#ef4444" name="Risk Score" />
            <Bar dataKey="incidents" fill="#3b82f6" name="Incidents" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SectorRiskChart;
