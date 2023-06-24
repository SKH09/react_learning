import React, {useState} from 'react'
import Dcomp from './Dcomp'

  function Bcomp() {
    const [lekkaB, setLekkaB] = useState(0)
  
    function incre() {
      setLekkaB(lekkaB + 1)
    }
    function decre () {
      setLekkaB(lekkaB - 1)
    }

  return (
    <>
    <div className='comp2' style={{border:'2px solid red',marginBottom:'20px', paddingBottom:'20px'}} >

        <h2>B</h2>
        <div style={{fontSize:'30px'}}>{lekkaB}</div>
        {console.log('B rendered')}
        <button style={{padding:'20px', fontSize:'30px'}}  onClick={incre}> + </button>
        <button style={{padding:'20px', fontSize:'30px'}} onClick={decre}> - </button>

        <Dcomp />
     </div>
    </>
  )
}
export default Bcomp;