/* import React from 'react';
import { useState } from 'react';
import './Button.scss';
function Button() {
  const [number, setNumber] = useState(0);

  return (
    <>
    <h1>Counter using State Hook</h1>
    <div className='number'>
      <h1 className='numberDisplay'>{number}</h1>
    </div>
      <button className='numberButton' onClick={() => {

        setNumber(number + 1);
        setNumber(n => n + 1);

        //Here, the two conditions following are not executing
        setNumber(number + 1);
        setNumber(n => n + 1);
      }}>Increase the number</button>
    </>
  )
}
export default Button; */