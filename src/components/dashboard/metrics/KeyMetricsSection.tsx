
import React from 'react';
import KeyMetricsCard from './KeyMetricsCard';

const KeyMetricsSection: React.FC = () => {
  return (
    <div className="bg-secondary-50 p-6 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Key Metrics</h3>
        <div className="text-sm text-secondary-600">Updated: Today</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KeyMetricsCard title="Risk Reduction" value="42%" trend="+5% vs last year" />
        <KeyMetricsCard title="Prediction Accuracy" value="91.4%" trend="+2.1% vs last year" />
        <KeyMetricsCard title="Cost Savings" value="$32.7M" trend="+18% vs last year" />
        <KeyMetricsCard title="Monitored Assets" value="4,267" trend="+584 vs last year" />
      </div>
    </div>
  );
};

export default KeyMetricsSection;
