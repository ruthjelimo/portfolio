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
           <p>These are the skills that I am comfortable working with</p> 
          
             <img src={React} width="200" alt="react" />
        <li>React</li>
        <div className="angular">
        <img src={Angular} width="200" alt="angular" />
        <li>Angular</li>
        </div>
        <div className="django">
        <img src={django} width="200" alt="django" />
        <li>Django</li>

        </div>
       
       
        <img src={Flask} width="200" alt="django" />
        <li>Flask</li>
       
       
        <img src={python} width="200" alt="python" />
        <li>Python</li>
       
        <img src={Html} width="200" alt="html" />
        <li>HTML</li>
        <img src={js} width="200" alt="js" />
        <li>Javascript</li>
       
        <img src={Postgress} width="200" alt="psql" />
        <li>Postgress</li>
        </div>
    
    );
}
 
export default skills;