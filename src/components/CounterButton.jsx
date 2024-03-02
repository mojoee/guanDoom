import React, { useState } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState(0); // Initialize counter state

  const handleClick = () => {
    setCount(count + 1); // Increment counter on button click
  };

  return (
    <div>
      <button onClick={handleClick} class="myButton">
        Upvote
      </button>
      <p>This proposal has {count} votes.</p>
    </div>
  );
};

export default CounterButton;