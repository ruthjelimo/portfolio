import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <div className="content">
        <h1>Ruth portfolio</h1>
        <button>check out</button>
      </div>
    </div>
  );
}

export default App;
