
export interface RiskData {
  name: string;
  value: number;
  fill: string;
}

export interface TimeSeriesData {
  month: string;
  incidents: number;
  predictedRisk: number;
}

export interface SectorRiskData {
  name: string;
  risk: number;
  incidents: number;
  savings: number;
}

export interface ROIData {
  name: string;
  value: number;
}
