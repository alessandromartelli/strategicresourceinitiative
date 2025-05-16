
import React from 'react';

interface RegionSelectorProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

const RegionSelector: React.FC<RegionSelectorProps> = ({ selectedRegion, onRegionChange }) => {
  return (
    <select 
      className="px-3 py-2 border border-secondary-200 rounded-lg text-sm"
      value={selectedRegion}
      onChange={(e) => onRegionChange(e.target.value)}
    >
      <option value="global">Global</option>
      <option value="americas">Americas</option>
      <option value="emea">EMEA</option>
      <option value="apac">APAC</option>
    </select>
  );
};

export default RegionSelector;
