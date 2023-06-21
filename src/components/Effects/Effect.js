import React, { useEffect, useState } from 'react';
import './Effect.scss'

function Effect() {

  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect
  (() =>{
    alert('I am clicked');
  }); //[empty array]  works when you refresh the page for the first time

  return (
    <div>
        <button className='here'
        onClick={(() => {

          setNum(num + 1);
        })
      }
        >
          Number increases to : {num} 
          
        </button>

          <br />

        <button className='here'
          onClick={(() => {
        
            setNums(nums + 1);
          })
        }
          >
            Number increases to : {nums} 
            
        </button>
    </div>
  )
}

export default Effect;
