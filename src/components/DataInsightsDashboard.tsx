import React, { useState } from 'react';
import { 
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface RiskData {
  name: string;
  value: number;
  fill: string;
}

interface TimeSeriesData {
  month: string;
  incidents: number;
  predictedRisk: number;
}

interface SectorRiskData {
  name: string;
  risk: number;
  incidents: number;
  savings: number;
}

interface ROIData {
  name: string;
  value: number;
}

const DataInsightsDashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('global');
  
  const riskDistributionData: RiskData[] = [
    { name: 'Severe', value: 18, fill: '#ef4444' },
    { name: 'High', value: 22, fill: '#f59e0b' },
    { name: 'Moderate', value: 35, fill: '#3b82f6' },
    { name: 'Low', value: 25, fill: '#10b981' },
  ];
  
  const timeSeriesData: TimeSeriesData[] = [
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
  
  const sectorRiskData: SectorRiskData[] = [
    { name: 'Mining', risk: 75, incidents: 37, savings: 15.2 },
    { name: 'Railways', risk: 62, incidents: 29, savings: 12.8 },
    { name: 'Highways', risk: 58, incidents: 24, savings: 9.7 },
    { name: 'Water', risk: 49, incidents: 18, savings: 8.3 },
    { name: 'Power', risk: 45, incidents: 15, savings: 7.1 },
  ];
  
  const roiData: ROIData[] = [
    { name: 'Infrastructure Savings', value: 42 },
    { name: 'Insurance Premiums', value: 23 },
    { name: 'Early Detection', value: 18 },
    { name: 'Maintenance Optimization', value: 17 },
  ];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-primary-800">Infrastructure Risk Analytics</h2>
        <div className="flex space-x-4">
          <select 
            className="px-3 py-2 border border-secondary-200 rounded-lg text-sm"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="global">Global</option>
            <option value="americas">Americas</option>
            <option value="emea">EMEA</option>
            <option value="apac">APAC</option>
          </select>
          <button className="bg-primary-100 text-primary-800 px-3 py-2 rounded-lg text-sm">
            Download Report
          </button>
        </div>
      </div>
      
      <Tabs defaultValue="overview">
        <TabsList className="mb-6 border-b border-secondary-200 w-full justify-start">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="historical">Historical Analysis</TabsTrigger>
          <TabsTrigger value="sector">Sector Breakdown</TabsTrigger>
          <TabsTrigger value="roi">ROI Analysis</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary-50 p-6 rounded-xl h-80">
              <h3 className="text-lg font-medium mb-4">Risk Distribution</h3>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={riskDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {riskDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-secondary-50 p-6 rounded-xl h-80">
              <h3 className="text-lg font-medium mb-4">Risk Prediction Accuracy</h3>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="incidents" stroke="#3b82f6" activeDot={{ r: 8 }} name="Actual Incidents" />
                  <Line type="monotone" dataKey="predictedRisk" stroke="#ef4444" name="Predicted Risk" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-secondary-50 p-6 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Key Metrics</h3>
              <div className="text-sm text-secondary-600">Updated: Today</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-secondary-600 mb-1">Risk Reduction</div>
                <div className="text-2xl font-semibold text-primary-800">42%</div>
                <div className="text-xs text-green-600">+5% vs last year</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-secondary-600 mb-1">Prediction Accuracy</div>
                <div className="text-2xl font-semibold text-primary-800">91.4%</div>
                <div className="text-xs text-green-600">+2.1% vs last year</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-secondary-600 mb-1">Cost Savings</div>
                <div className="text-2xl font-semibold text-primary-800">$32.7M</div>
                <div className="text-xs text-green-600">+18% vs last year</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-secondary-600 mb-1">Monitored Assets</div>
                <div className="text-2xl font-semibold text-primary-800">4,267</div>
                <div className="text-xs text-green-600">+584 vs last year</div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="historical" className="space-y-6">
          <div className="bg-secondary-50 p-6 rounded-xl">
            <h3 className="text-lg font-medium mb-4">Historical Risk Trend Analysis</h3>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={timeSeriesData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="predictedRisk" stackId="1" stroke="#8884d8" fill="#8884d8" name="Predicted Risk" />
                  <Area type="monotone" dataKey="incidents" stackId="2" stroke="#82ca9d" fill="#82ca9d" name="Actual Incidents" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary-50 p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-4">5-Year Risk Reduction</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { year: '2019', risk: 75 },
                      { year: '2020', risk: 68 },
                      { year: '2021', risk: 58 },
                      { year: '2022', risk: 49 },
                      { year: '2023', risk: 42 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="risk" fill="#ef4444" name="Risk Score" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-secondary-50 p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-4">Prediction Accuracy Improvement</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { year: '2019', accuracy: 82 },
                      { year: '2020', accuracy: 85 },
                      { year: '2021', accuracy: 87 },
                      { year: '2022', accuracy: 89 },
                      { year: '2023', accuracy: 91 },
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="accuracy" stroke="#10b981" name="Accuracy %" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="sector" className="space-y-6">
          <div className="bg-secondary-50 p-6 rounded-xl">
            <h3 className="text-lg font-medium mb-4">Sector Risk Comparison</h3>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={sectorRiskData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="risk" fill="#ef4444" name="Risk Score" />
                  <Bar dataKey="incidents" fill="#3b82f6" name="Incidents" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sectorRiskData.map((sector, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
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
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="roi" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary-50 p-6 rounded-xl h-80">
              <h3 className="text-lg font-medium mb-4">ROI Breakdown</h3>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={roiData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {roiData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#3b82f6', '#10b981', '#f59e0b', '#8884d8'][index % 4]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-secondary-50 p-6 rounded-xl h-80">
              <h3 className="text-lg font-medium mb-4">Investment vs. Savings</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { year: 'Year 1', investment: 10, savings: 5 },
                    { year: 'Year 2', investment: 5, savings: 15 },
                    { year: 'Year 3', investment: 5, savings: 25 },
                    { year: 'Year 4', investment: 5, savings: 35 },
                    { year: 'Year 5', investment: 5, savings: 45 },
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: 'USD (Millions)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="investment" stackId="a" fill="#ef4444" name="Investment" />
                  <Bar dataKey="savings" stackId="a" fill="#10b981" name="Savings" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-secondary-50 p-6 rounded-xl">
            <h3 className="text-lg font-medium mb-6">ROI Analysis Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-secondary-600 mb-1">Total Investment</div>
                <div className="text-2xl font-semibold text-primary-800">$30M</div>
                <div className="text-xs text-secondary-600">Over 5 years</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-secondary-600 mb-1">Total Savings</div>
                <div className="text-2xl font-semibold text-primary-800">$125M</div>
                <div className="text-xs text-secondary-600">Over 5 years</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-secondary-600 mb-1">Net Savings</div>
                <div className="text-2xl font-semibold text-primary-800">$95M</div>
                <div className="text-xs text-secondary-600">Over 5 years</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-secondary-600 mb-1">ROI</div>
                <div className="text-2xl font-semibold text-green-600">317%</div>
                <div className="text-xs text-secondary-600">Over 5 years</div>
              </div>
            </div>
            <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-base font-medium mb-2">Implementation Timeline</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-1/4 text-sm font-medium">Phase 1 (0-6 months)</div>
                  <div className="w-3/4 relative">
                    <div className="h-4 w-full bg-secondary-100 rounded-full">
                      <div className="h-4 bg-blue-500 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <div className="mt-1 text-xs">Initial deployment & baseline assessments</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/4 text-sm font-medium">Phase 2 (6-12 months)</div>
                  <div className="w-3/4 relative">
                    <div className="h-4 w-full bg-secondary-100 rounded-full">
                      <div className="h-4 bg-blue-400 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <div className="mt-1 text-xs">Risk mitigation implementation</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/4 text-sm font-medium">Phase 3 (12-24 months)</div>
                  <div className="w-3/4 relative">
                    <div className="h-4 w-full bg-secondary-100 rounded-full">
                      <div className="h-4 bg-blue-300 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <div className="mt-1 text-xs">Advanced analytics integration & continuous improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataInsightsDashboard; 