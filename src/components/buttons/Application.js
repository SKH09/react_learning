import React, { useState } from "react";
import "./Application.scss";
function Form(){

   const [btnOff, setbtnOff] = useState(1);

  function handleOnchange(e){
    const textNumber = e.target.value.trim()
    if(textNumber.length){
      setbtnOff(0);
    }
    else{
      setbtnOff(1);
    }
  }
  return(
    <>
      <form className="app-form">
        <h1>Application Form</h1>
          <textarea onChange={handleOnchange} />
        <button className="btn-form" type = 'submit' disabled = {btnOff === 0 ? '' : 'disabled' } >Submit</button>
      </form>
    </>
  )
}

export default Form;