import React, {useState} from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0)
  function decr () {
    setCount(count - 1)
  };
  function incr () {
    setCount(count + 1)
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={decr}>decr</button>
      <button onClick={incr}>incr</button>
    </div>
  );
};
