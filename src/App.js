import React, { useState, useEffect, useRef } from 'react';

function App() {

  const [value, setValue] = useState('initial');

  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('');

  useEffect(() => {
    renderCount.current++;
  })

  useEffect(() => {
    prevValue.current = value;
  }, [value])

  console.log(prevValue.current);
  console.log(value);


  return (
    <div>
      <h1>Count of renders: {renderCount.current}</h1>
      <h2>Previous value: {prevValue.current}</h2>
      <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value} />
    </div>
  );
}

export default App;
