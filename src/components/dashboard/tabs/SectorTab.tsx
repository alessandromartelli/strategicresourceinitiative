
import React from 'react';
import SectorRiskChart from '../charts/SectorRiskChart';
import SectorCard from '../cards/SectorCard';
import { SectorRiskData } from '../types';

interface SectorTabProps {
  sectorRiskData: SectorRiskData[];
}

const SectorTab: React.FC<SectorTabProps> = ({ sectorRiskData }) => {
  return (
    <div className="space-y-6">
      <SectorRiskChart data={sectorRiskData} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sectorRiskData.map((sector, index) => (
          <SectorCard key={index} sector={sector} />
        ))}
      </div>
    </div>
  );
};

export default SectorTab;
