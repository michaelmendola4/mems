'use client';

import { useState, useEffect } from 'react';
import { testCases } from './testCases';
import { generateTestData } from './testData';

export default function TestRunner() {
  const [results, setResults] = useState({});
  const [currentTest, setCurrentTest] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [testData, setTestData] = useState(null);

  // Initialize test data
  useEffect(() => {
    setTestData(generateTestData());
  }, []);

  // Run a single test
  const runTest = async (testCase) => {
    setCurrentTest(testCase.id);
    setIsRunning(true);
    
    // Simulate test execution with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demonstration purposes, we'll simulate test results
    // In a real implementation, this would actually test the functionality
    const passed = Math.random() > 0.2; // 80% chance of passing for demo
    
    setResults(prev => ({
      ...prev,
      [testCase.id]: {
        passed,
        timestamp: new Date().toISOString(),
        notes: passed ? 'Test passed successfully' : 'Test failed - see details'
      }
    }));
    
    setIsRunning(false);
    setCurrentTest(null);
    
    return passed;
  };

  // Run all tests
  const runAllTests = async () => {
    setIsRunning(true);
    
    for (const testCase of testCases) {
      await runTest(testCase);
    }
    
    setIsRunning(false);
  };

  // Get test result status
  const getTestStatus = (testId) => {
    if (!results[testId]) return 'Not Run';
    return results[testId].passed ? 'Passed' : 'Failed';
  };

  // Get test result class
  const getTestStatusClass = (testId) => {
    if (!results[testId]) return 'text-gray-500';
    return results[testId].passed ? 'text-green-500' : 'text-red-500';
  };

  // Calculate overall test statistics
  const getTestStats = () => {
    const total = testCases.length;
    const run = Object.keys(results).length;
    const passed = Object.values(results).filter(r => r.passed).length;
    const failed = run - passed;
    
    return { total, run, passed, failed };
  };

  return {
    testCases,
    results,
    currentTest,
    isRunning,
    testData,
    runTest,
    runAllTests,
    getTestStatus,
    getTestStatusClass,
    getTestStats
  };
}
