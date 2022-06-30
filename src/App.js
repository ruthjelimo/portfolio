import Navbar from './Navbar';
import Home from './Home';

import Skills from './skills';
import Project from './projects';
import Contact from './contact';

// import Bout from './bout';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    
      <Skills/>
      <Project/>
      <button>check out</button>
      <Contact/>

     
      <div className="content">
       
      
      </div>
    </div>
  );
}

export default App;
