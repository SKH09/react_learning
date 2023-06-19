import React from "react";
import './Forms.scss';
function Forms2 ({decrement, increment}) {
return(
    <div>
      <div className="buttonBox" >
        <button className="incre" onClick={decrement}> + </button>
        <button className="decre" onClick={increment}> - </button>
      </div>
    </div>
  )
}

export default Forms2;
