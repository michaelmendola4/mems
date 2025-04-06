'use client';

import { useState, useEffect } from 'react';
import MemoryCard from './MemoryCard';

export default function TimelineView({ timelineData }) {
  const [expandedYears, setExpandedYears] = useState({});
  const [expandedMonths, setExpandedMonths] = useState({});

  // Initialize with first year expanded
  useEffect(() => {
    if (timelineData && timelineData.length > 0) {
      setExpandedYears({ [timelineData[0].year]: true });
    }
  }, [timelineData]);

  const toggleYear = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const toggleMonth = (yearMonth) => {
    setExpandedMonths(prev => ({
      ...prev,
      [yearMonth]: !prev[yearMonth]
    }));
  };

  if (!timelineData || timelineData.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No memories found to display on timeline.</p>
      </div>
    );
  }

  return (
    <div className="timeline-view">
      {timelineData.map((yearData) => (
        <div key={yearData.year} className="mb-6">
          <button
            onClick={() => toggleYear(yearData.year)}
            className="flex items-center w-full text-left font-bold text-lg text-gray-800 hover:text-primary-600 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 mr-2 transition-transform ${expandedYears[yearData.year] ? 'transform rotate-90' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {yearData.year}
          </button>
          
          {expandedYears[yearData.year] && (
            <div className="pl-6 border-l-2 border-gray-200">
              {yearData.months.map((monthData) => (
                <div key={`${yearData.year}-${monthData.month}`} className="mb-4">
                  <button
                    onClick={() => toggleMonth(`${yearData.year}-${monthData.month}`)}
                    className="flex items-center w-full text-left font-medium text-gray-700 hover:text-primary-600 mb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 mr-2 transition-transform ${expandedMonths[`${yearData.year}-${monthData.month}`] ? 'transform rotate-90' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {monthData.monthName}
                  </button>
                  
                  {expandedMonths[`${yearData.year}-${monthData.month}`] && (
                    <div className="pl-6 space-y-4">
                      {monthData.memories.map((memory) => (
                        <div key={memory.id} className="border-l-2 border-primary-200 pl-4 py-1">
                          <div className="text-sm text-gray-500 mb-1">{memory.getFormattedDate()}</div>
                          <MemoryCard memory={memory} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
