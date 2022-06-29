
// import Mimo from '../Images/mimo.jpeg';
import Mimo from '..//src/Images/mimo.jpeg';
const Home = () => {
    return ( 
        <div className="home">
            <img src={Mimo} width="300" alt="mimo" />
            <div className="descrption">

            <h2>
                Ruth Jelimo
            </h2>
            <h3>
                I am a Full stack developer
            </h3>
            <p>I am passionate developer with skills in react, angular and django</p>

            </div>
            

        </div>
     );
}
 
export default Home;