import React, { useState, useMemo, useEffect, useCallback } from 'react';
import ItemsList from './ItemsList';


function App() {

  const [count, setCount] = useState(0);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? 'darkred' : 'black',
  }

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Element #${i + 1}`);
  }, [count]);

  return (
    <div>
      <h1 style={styles}>Elements count: {count}</h1>
      <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>Increase</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Change</button>
      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}

export default App;
