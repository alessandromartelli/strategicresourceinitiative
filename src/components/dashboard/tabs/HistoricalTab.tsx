
import React from 'react';
import HistoricalRiskChart from '../charts/HistoricalRiskChart';
import RiskReductionChart from '../charts/RiskReductionChart';
import AccuracyImprovementChart from '../charts/AccuracyImprovementChart';
import { TimeSeriesData } from '../types';

interface HistoricalTabProps {
  timeSeriesData: TimeSeriesData[];
  historicalRiskData: Array<{ year: string; risk: number }>;
  accuracyImprovementData: Array<{ year: string; accuracy: number }>;
}

const HistoricalTab: React.FC<HistoricalTabProps> = ({ 
  timeSeriesData, 
  historicalRiskData,
  accuracyImprovementData
}) => {
  return (
    <div className="space-y-6">
      <HistoricalRiskChart data={timeSeriesData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RiskReductionChart data={historicalRiskData} />
        <AccuracyImprovementChart data={accuracyImprovementData} />
      </div>
    </div>
  );
};

export default HistoricalTab;
