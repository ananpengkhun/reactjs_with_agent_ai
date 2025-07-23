"use client"
import { useState, useMemo } from 'react';

function UseMemoView() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(2);

  // This function simulates an expensive calculation
  const calculateExpensiveValue = (num: number, mult: number) => {
    console.log('Calculating expensive value...');
    // Simulate a time-consuming operation
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num * mult;
    }
    return result;
  };

  // Memoize the result of calculateExpensiveValue
  // The calculation only re-runs if 'count' or 'multiplier' changes
  const memoizedValue = useMemo(() => {
    return calculateExpensiveValue(count, multiplier);
  }, [count, multiplier]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Count: {count}</p>
      <p>Multiplier: {multiplier}</p>
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment Count
      </button>
      <button onClick={() => setMultiplier(prevMultiplier => prevMultiplier + 1)}>
        Increment Multiplier
      </button>
    </div>
  );
}

export default UseMemoView;