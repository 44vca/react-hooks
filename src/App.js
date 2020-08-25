import React, { useState, useMemo, useEffect } from 'react';

function complexCompute(num) {
  console.log('complexCompute');
  let i = 0;
  while(i < 1000000000) i++;
  return num * 2;
}

function App() {

  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black',
  }), [colored]);

  useEffect(() => {
    console.log('styles changed');
  }, [styles]);


  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number]);

  return (
    <div>
      <h1 style={styles}>Calculated property: {computed}</h1>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Increase</button>
      <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Decrease</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Change</button>
    </div>
  );
}

export default App;
