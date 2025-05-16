
import React from 'react';

interface KeyMetricsCardProps {
  title: string;
  value: string;
  trend: string;
}

const KeyMetricsCard: React.FC<KeyMetricsCardProps> = ({ title, value, trend }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="text-sm text-secondary-600 mb-1">{title}</div>
      <div className="text-2xl font-semibold text-primary-800">{value}</div>
      <div className="text-xs text-green-600">{trend}</div>
    </div>
  );
};

export default KeyMetricsCard;
