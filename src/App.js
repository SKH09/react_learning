import './App.css';
import { useEffect, useState } from 'react';
import Acomp from './components/Acomp';
import Bcomp from './components/Bcomp';
import Ccomp from './components/Ccomp';
function App() {

  const[mainCount, setMainCount] = useState(0);

useEffect(() => {
  
})

function mainCountIncre() {
  setMainCount(mainCount + 1)
}
function mainCountDecre() {
  setMainCount(mainCount - 1)
}

  return (
    <div className="App">
      <h2>Main Count</h2>
      <div style={{fontSize:'30px'}}>{mainCount}</div>
      {console.log('main count rendered!!!')}
      <button style={{padding:'20px', fontSize:'30px'}}onClick= {mainCountIncre}> + </button>
      <button style={{padding:'20px', fontSize:'30px'}}onClick= {mainCountDecre}> - </button>
      <Acomp />
      <Bcomp />
      <Ccomp />

    </div>
  );

}

export default App;
