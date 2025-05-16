
import React from 'react';

const ImplementationTimeline: React.FC = () => {
  return (
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
  );
};

export default ImplementationTimeline;
