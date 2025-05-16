
import React from 'react';
import { SectorRiskData } from '../types';

interface SectorCardProps {
  sector: SectorRiskData;
}

const SectorCard: React.FC<SectorCardProps> = ({ sector }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-primary-800 mb-4">{sector.name}</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-secondary-600">Risk Score</span>
            <span className="text-sm font-medium">{sector.risk}/100</span>
          </div>
          <div className="w-full bg-secondary-200 rounded-full h-2">
            <div 
              className="bg-red-500 h-2 rounded-full" 
              style={{ width: `${sector.risk}%` }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-secondary-600">Incidents (Annual)</span>
            <span className="text-sm font-medium">{sector.incidents}</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-secondary-600">Cost Savings (USD Millions)</span>
            <span className="text-sm font-medium">${sector.savings.toFixed(1)}M</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorCard;
