import React, {useEffect, useState} from 'react'

function Fcomp() {
    
  const [lekkaF, setLekkaF] = useState(0)

  function incre() {
    setLekkaF(lekkaF + 1)
  }
  function decre () {
    setLekkaF(lekkaF - 1)
  }



  return (
  <>
  <h2>F</h2>
  <div style={{fontSize:'30px'}}>{lekkaF}</div>
  {console.log('F rendered')}
    <button style={{padding:'20px', fontSize:'30px'}} onClick={incre}> + </button>
    <button style={{padding:'20px', fontSize:'30px'}} onClick={decre}> - </button>
  </>
  )
}

export default Fcomp;