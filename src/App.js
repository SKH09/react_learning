
import './App.css';
import ClickCounter from './components/hocs-practice/hocs_click_incre';
import HoverCounter from './components/hocs-practice/hocs_hover_incre';
import Render from './components/Render/Render.js'

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
      <Render />
    </div>
  );
}

export default App;
