
import { RiskData, TimeSeriesData, SectorRiskData, ROIData } from './types';

export const getRiskDistributionData = (): RiskData[] => [
  { name: 'Severe', value: 18, fill: '#ef4444' },
  { name: 'High', value: 22, fill: '#f59e0b' },
  { name: 'Moderate', value: 35, fill: '#3b82f6' },
  { name: 'Low', value: 25, fill: '#10b981' },
];

export const getTimeSeriesData = (): TimeSeriesData[] => [
  { month: 'Jan', incidents: 12, predictedRisk: 15 },
  { month: 'Feb', incidents: 19, predictedRisk: 20 },
  { month: 'Mar', incidents: 17, predictedRisk: 18 },
  { month: 'Apr', incidents: 13, predictedRisk: 14 },
  { month: 'May', incidents: 21, predictedRisk: 22 },
  { month: 'Jun', incidents: 24, predictedRisk: 25 },
  { month: 'Jul', incidents: 16, predictedRisk: 15 },
  { month: 'Aug', incidents: 18, predictedRisk: 17 },
  { month: 'Sep', incidents: 15, predictedRisk: 14 },
  { month: 'Oct', incidents: 17, predictedRisk: 16 },
  { month: 'Nov', incidents: 14, predictedRisk: 13 },
  { month: 'Dec', incidents: 16, predictedRisk: 15 },
];

export const getSectorRiskData = (): SectorRiskData[] => [
  { name: 'Mining', risk: 75, incidents: 37, savings: 15.2 },
  { name: 'Railways', risk: 62, incidents: 29, savings: 12.8 },
  { name: 'Highways', risk: 58, incidents: 24, savings: 9.7 },
  { name: 'Water', risk: 49, incidents: 18, savings: 8.3 },
  { name: 'Power', risk: 45, incidents: 15, savings: 7.1 },
];

export const getRoiData = (): ROIData[] => [
  { name: 'Infrastructure Savings', value: 42 },
  { name: 'Insurance Premiums', value: 23 },
  { name: 'Early Detection', value: 18 },
  { name: 'Maintenance Optimization', value: 17 },
];

export const getHistoricalRiskData = () => [
  { year: '2019', risk: 75 },
  { year: '2020', risk: 68 },
  { year: '2021', risk: 58 },
  { year: '2022', risk: 49 },
  { year: '2023', risk: 42 },
];

export const getAccuracyImprovementData = () => [
  { year: '2019', accuracy: 82 },
  { year: '2020', accuracy: 85 },
  { year: '2021', accuracy: 87 },
  { year: '2022', accuracy: 89 },
  { year: '2023', accuracy: 91 },
];

export const getInvestmentRoiData = () => [
  { year: 'Year 1', investment: 10, savings: 5 },
  { year: 'Year 2', investment: 5, savings: 15 },
  { year: 'Year 3', investment: 5, savings: 25 },
  { year: 'Year 4', investment: 5, savings: 35 },
  { year: 'Year 5', investment: 5, savings: 45 },
];
