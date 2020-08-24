import React, { useState, useEffect } from 'react';

//implements one time, when component's gonna mount
console.log('Component rerender');

function App() {

  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });


  // useEffect(() => {
  //   console.log('render')
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

    return () => {
      console.log('clean effect')
    }
  }, [type]);

  /*  const mouseMoveHandler = event => {
      setPos({
        x: event.clientX,
        y: event.clientY,
      })
    };

    useEffect(() => {
      window.addEventListener('mousemove', mouseMoveHandler)
    });*/

  return (
    <div>
      <h1>Resources: {type}</h1>

      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Posts</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/*<pre>{JSON.stringify(pos, null, 2)}</pre>*/}
    </div>
  );
}

export default App;
