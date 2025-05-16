
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardHeader from './dashboard/DashboardHeader';
import OverviewTab from './dashboard/tabs/OverviewTab';
import HistoricalTab from './dashboard/tabs/HistoricalTab';
import SectorTab from './dashboard/tabs/SectorTab';
import RoiTab from './dashboard/tabs/RoiTab';
import { 
  getRiskDistributionData, 
  getTimeSeriesData,
  getSectorRiskData,
  getRoiData,
  getHistoricalRiskData,
  getAccuracyImprovementData,
  getInvestmentRoiData
} from './dashboard/data';

const DataInsightsDashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('global');
  
  // Get data from our data service
  const riskDistributionData = getRiskDistributionData();
  const timeSeriesData = getTimeSeriesData();
  const sectorRiskData = getSectorRiskData();
  const roiData = getRoiData();
  const historicalRiskData = getHistoricalRiskData();
  const accuracyImprovementData = getAccuracyImprovementData();
  const investmentRoiData = getInvestmentRoiData();

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <DashboardHeader 
        selectedRegion={selectedRegion} 
        onRegionChange={setSelectedRegion} 
      />
      
      <Tabs defaultValue="overview">
        <TabsList className="mb-6 border-b border-secondary-200 w-full justify-start">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="historical">Historical Analysis</TabsTrigger>
          <TabsTrigger value="sector">Sector Breakdown</TabsTrigger>
          <TabsTrigger value="roi">ROI Analysis</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <OverviewTab 
            riskDistributionData={riskDistributionData}
            timeSeriesData={timeSeriesData}
          />
        </TabsContent>
        
        <TabsContent value="historical">
          <HistoricalTab 
            timeSeriesData={timeSeriesData}
            historicalRiskData={historicalRiskData}
            accuracyImprovementData={accuracyImprovementData}
          />
        </TabsContent>
        
        <TabsContent value="sector">
          <SectorTab sectorRiskData={sectorRiskData} />
        </TabsContent>
        
        <TabsContent value="roi">
          <RoiTab 
            roiData={roiData}
            investmentRoiData={investmentRoiData}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataInsightsDashboard;
