
import React from 'react';
import RoiBreakdownChart from '../charts/RoiBreakdownChart';
import InvestmentSavingsChart from '../charts/InvestmentSavingsChart';
import RoiMetricCard from '../metrics/RoiMetricCard';
import ImplementationTimeline from '../implementation/ImplementationTimeline';
import { ROIData } from '../types';

interface RoiTabProps {
  roiData: ROIData[];
  investmentRoiData: Array<{ year: string; investment: number; savings: number }>;
}

const RoiTab: React.FC<RoiTabProps> = ({ roiData, investmentRoiData }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RoiBreakdownChart data={roiData} />
        <InvestmentSavingsChart data={investmentRoiData} />
      </div>
      
      <div className="bg-secondary-50 p-6 rounded-xl">
        <h3 className="text-lg font-medium mb-6">ROI Analysis Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <RoiMetricCard title="Total Investment" value="$30M" subtitle="Over 5 years" />
          <RoiMetricCard title="Total Savings" value="$125M" subtitle="Over 5 years" />
          <RoiMetricCard title="Net Savings" value="$95M" subtitle="Over 5 years" />
          <RoiMetricCard title="ROI" value="317%" subtitle="Over 5 years" />
        </div>
        <ImplementationTimeline />
      </div>
    </div>
  );
};

export default RoiTab;
