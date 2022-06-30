
// import Mimo from '../Images/mimo.jpeg';
import Mimo from '..//src/Images/mimo.jpeg';
const Home = () => {
    return ( 
        <div className="home">
            <img src={Mimo} width="300" alt="mimo" />
            <div className="descrption">
            <div className="mimo">
            <p>
               <b> I am Ruth Jelimo</b> <br />
                <i>  Full stack developer</i><br />
            
              I am passionate developer with skills in react, angular and django and like to <br />
              learn about new technologies,write technical articles  <br/>
              or watch movies in my free time
              </p>

            </div>
            
            </div>
            

        </div>
     );
}
 
export default Home;