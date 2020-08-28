import React, { useState, useEffect, useReducer } from 'react';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const {step, count} = state;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({
        type: 'TICK'
      });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div>
      <p>you clicked {count} times.</p>
      <input value={step} onChange={e => dispatch({
        type: 'STEP',
        step: Number(e.target.value),
      })} />
    </div>
  );
};

const initialState = {
  step: 1,
  count: 0,
};

function reducer(state, action) {
  const {step, count} = state;
  switch (action.type) {
    case 'TICK':
      return {
        ...state,
        count: count + step,
      };
    case 'STEP':
      return {
        ...state,
        step: action.step
      };
    default:
      throw new Error('Something went wrong.');
  }
};

export default App;
