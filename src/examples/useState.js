import React, { useState } from 'react';

// function calculatedValue() {
//   console.log('Some calculation...');
//   return Math.trunc(Math.random() * 20);
// }

function App() {

 let [counter, setCounter] = useState(0);
  // let [counter, setCounter] = useState(() => 
  //   calculatedValue());

  let [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  })

  function increment() {
    // not gonna work cause counter need to render after changing
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // gonna work, cause we're using previous state
    setCounter((prevState) => {
      return prevState + 1;
    })
    // setCounter( prev => prev + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }
  
  function updatteTitle() {
    setState((pre) => {
      return {
        ...pre,
        title: 'New title'
      }
    })
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-success">Increase</button>
      <button onClick={decrement} className="btn btn-danger">Decrease</button>
      <button onClick={updatteTitle} className="btn btn-default">Change title</button>
  <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
