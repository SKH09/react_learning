import React, {useState} from 'react'
import Ecomp from './Ecomp'
function Dcomp() {
    
  const [lekkaD, setLekkaD] = useState(0)

  function incre() {
    setLekkaD(lekkaD + 1)
  }
  function decre () {
    setLekkaD(lekkaD - 1)
  }

  return (
    <>
        <h2>D</h2>
        <div style={{fontSize:'30px'}}>{lekkaD}</div>
    {console.log('D rendered')}
      <button style={{padding:'20px', fontSize:'30px'}} onClick={incre}> + </button>
      <button style={{padding:'20px', fontSize:'30px'}} onClick={decre}> - </button>
       <Ecomp />
    </>
  )
}
export default Dcomp;
