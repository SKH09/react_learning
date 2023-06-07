import React from "react";
import { useState } from "react";
import './hocs_click_incre.scss';

function ClickCounter() {
    const [count, setCount] = useState(0); //default value of this state will be 0.
    return (
      <div className="increment_box">
        <h1>Click Function</h1>
        {/*When clicked, increment the value of 'count'*/}
        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
        <p>Clicked: {count}</p> {/*Render the value of count*/}
      </div>
    );
  }
  export default ClickCounter;
  
  