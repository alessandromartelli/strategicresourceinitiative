
import React from 'react';
import RegionSelector from './RegionSelector';

interface DashboardHeaderProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ selectedRegion, onRegionChange }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold text-primary-800">Infrastructure Risk Analytics</h2>
      <div className="flex space-x-4">
        <RegionSelector selectedRegion={selectedRegion} onRegionChange={onRegionChange} />
        <button className="bg-primary-100 text-primary-800 px-3 py-2 rounded-lg text-sm">
          Download Report
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
