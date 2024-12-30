import React, { useState, useMemo, useCallback } from 'react';

interface ListItemProps {
  value: number;
  expensiveCalculation: (num: number) => number;
}

const ListItem: React.FC<ListItemProps> = React.memo(({ value, expensiveCalculation }) => {
  console.log(`Rendering item ${value}`);
  const result = expensiveCalculation(value);
  return (
    <div>
      {value} - {result}
    </div>
  );
});

const LargeList = () => {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");

  const items = Array.from({ length: 1000 }, (_, index) => index + 1);

  // Now expensiveCalculation depends on `filter`, so it will be recalculated when `filter` changes.
  const expensiveCalculation = useCallback((num) => {
    console.log(`Expensive calculation for ${num}`);
    for (let i = 0; i < 1000; i++) {} // Simulates heavy computation
    return num * 2;
  }, []); // Now depends on filter

  const filteredItems = useMemo(() => {
    console.log("Filtering items");
    return items.filter((item) => item.toString().includes(filter));
  }, [filter, items]); // Memoize filtered list

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <input
        placeholder="Filter items"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
      <div>
        {filteredItems.map((item) => (
          <ListItem key={item} value={item} expensiveCalculation={expensiveCalculation} />
        ))}
      </div>
    </div>
  );
};

export default LargeList;
