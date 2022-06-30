import React from '..//src/Images/react.png';
import Angular from '..//src/Images/angular.png';
import django from '..//src/Images/django.jpeg';
import Flask from '..//src/Images/flasky.jpeg';
import Html from '..//src/Images/html.png';
import Postgress from '..//src/Images/postgress.png';
import python from '..//src/Images/python.png';
import js from '..//src/Images/js.jpeg';
const skills = () => {
    return (  
        <div className="skills">
           <p><b>These are the skills that I am comfortable working with:</b></p> 
           <div className="react">
           <img src={React} width="200" alt="react" />
        <h4>React</h4>

           </div>
          
          
          
        <div className="angular">
        <img src={Angular} width="200" alt="angular" />
        <h4>Angular</h4>
        </div>
        <div className="django">
        <img src={django} width="200" alt="django" />
        <h4>Django</h4>

        </div>
        <div className="flask">
        <img src={Flask} width="200" alt="django" />
        <h4>Flask</h4>

        </div>
        <div className="python">

        <img src={python} width="200" alt="python" />
        <h4>Python</h4>
        </div>
        <div className="html">

        <img src={Html} width="200" alt="html" />
        <h4>HTML</h4>

        </div>
        <div className="javascript">
        <img src={js} width="200" alt="js" />
        <h4>Javascript</h4>
       

        </div>
        <div className="postgress">
        <img src={Postgress} width="200" alt="psql" />
        <h4>Postgress</h4>
        </div>


 </div>
    
    );
}
 
export default skills;