// import logo from './logo.svg'; 
import './App.css';
// import Beginning from '../src/beginning/beginning.scss';
import Beginning from './beginning/Beginning';

function App() {
  return (
    <div className="App">
{       <header className="App-header">
     {/*    <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Beginning btntext="hello" background="primary" type="solid"/>

      </header> }

    </div>
 );
}

export default App;
