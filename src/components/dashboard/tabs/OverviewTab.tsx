
import React from 'react';
import RiskDistributionChart from '../charts/RiskDistributionChart';
import RiskPredictionChart from '../charts/RiskPredictionChart';
import KeyMetricsSection from '../metrics/KeyMetricsSection';
import { RiskData, TimeSeriesData } from '../types';

interface OverviewTabProps {
  riskDistributionData: RiskData[];
  timeSeriesData: TimeSeriesData[];
}

const OverviewTab: React.FC<OverviewTabProps> = ({ riskDistributionData, timeSeriesData }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RiskDistributionChart data={riskDistributionData} />
        <RiskPredictionChart data={timeSeriesData} />
      </div>
      <KeyMetricsSection />
    </div>
  );
};

export default OverviewTab;
