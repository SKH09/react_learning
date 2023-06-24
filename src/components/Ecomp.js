import React, {useState} from 'react'

function Ecomp() {
    
  const [lekkaE, setLekkaE] = useState(0)

  function incre() {
    setLekkaE(lekkaE + 1)
  }
  function decre () {
    setLekkaE(lekkaE - 1)
  }

  return (
    <>
   <h2>E</h2>
   <div style={{fontSize:'30px'}}>{lekkaE}</div>
    {console.log('E rendered')}
      <button style={{padding:'20px', fontSize:'30px'}} onClick={incre}> + </button>
      <button style={{padding:'20px', fontSize:'30px'}} onClick={decre}> - </button>
    </>
  )
}

export default Ecomp;
