import React from "react";
import { useState } from "react";
import './hocs_hover_incre.scss';

function HoverCounter(props) {
    const [count, setCount] = useState(0);
    return (
      <div>
        <h1>Hover Function</h1>
        {/*If the user hovers over this button, then increment 'count'*/}
        <button onMouseOver={() => setCount((count) => count + 1)}>
          Increment 
        </button>
        <p>
          Hovered: {count}
        </p>
      </div>
    );
  }
  export default HoverCounter;