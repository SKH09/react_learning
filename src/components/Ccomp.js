import React, {useEffect, useState} from 'react'
import Fcomp from './Fcomp'

  function Ccomp() {

    const [lekkaC, setLekkaC] = useState(0);
  


    function incre() {
      setLekkaC(lekkaC + 1)
    }
    function decre () {
      setLekkaC(lekkaC - 1)
    }
    

  return (
    <>
    <div className='comp3' style={{border:'1px solid blue'}} ></div>
      <h2>C</h2>
      <div style={{fontSize:'30px'}}>{lekkaC}</div>
      {console.log('C rendered')}
      <button style={{padding:'20px', fontSize:'30px'}} onClick={incre}> + </button>
      <button style={{padding:'20px', fontSize:'30px'}} onClick={decre}> - </button>
      <Fcomp />
    </>

  )
}
export default Ccomp;
