import Navbar from './Navbar';
import Home from './Home';

import Skills from './skills';
import Project from './projects';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
     
    
      <Skills/>
      <Project/>

     
      <div className="content">
       
        <button>check out</button>
      </div>
    </div>
  );
}

export default App;
