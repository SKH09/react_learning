import React, {useState} from 'react'

function Acomp() {
  const [lekkaA, setLekkaA] = useState(0)

  function incre() {
    setLekkaA(lekkaA + 1)
  }
  function decre () {
    setLekkaA(lekkaA - 1)
  }

  return (
    <>
    <div style={{border:'3px solid black', marginBottom:'20px', padding:'20px'}}>
    <h2>A</h2>
    {console.log('A rendered')}
    <div style={{fontSize:'30px'}}>{lekkaA}</div>
    <button style={{padding:'20px', fontSize:'30px'}} onClick={incre}> + </button>
    <button style={{padding:'20px', fontSize:'30px'}} onClick={decre}> - </button>
    </div>
    </>
  )

}
export default Acomp
