
import React from 'react';

interface RoiMetricCardProps {
  title: string;
  value: string;
  subtitle: string;
}

const RoiMetricCard: React.FC<RoiMetricCardProps> = ({ title, value, subtitle }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="text-sm text-secondary-600 mb-1">{title}</div>
      <div className={`text-2xl font-semibold ${title === 'ROI' ? 'text-green-600' : 'text-primary-800'}`}>{value}</div>
      <div className="text-xs text-secondary-600">{subtitle}</div>
    </div>
  );
};

export default RoiMetricCard;
