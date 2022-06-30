import Lapy from '..//src/Images/lapy.jpeg';
const project = () => {
    return ( 
        <div className="project">
            <h2>Projects</h2>
            <p>These are samples of projects have worked on</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    
                  
                    <div style={{backgroundImage:`url(${Lapy})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className="opacity-8 group-hover:opacity-100">
                           <span className="text-2xl font-bold text-white tracking-wider">
                               Delani-studio
                           </span> 
                           <div className="pt-8 text-center">
                               <a href="https://ruthjelimo.github.io/Delani-Studio/">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live link</button>
                               </a>
                               <a href="https://github.com/ruthjelimo/Delani-Studio.git">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                               </a>
                           </div>
                        </div>
                        <div className="opacity-8 group-hover:opacity-100">
                           <span className="text-2xl font-bold text-white tracking-wider">
                               Neighborhood
                           </span> 
                           <div className="pt-8 text-center">
                               <a href="https://mimoh-hood.herokuapp.com/">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live link</button>
                               </a>
                               <a href="https://github.com/ruthjelimo/mimoh-hood.git">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                               </a>
                           </div>
                        </div>
                        <div className="opacity-8 group-hover:opacity-100">
                           <span className="text-2xl font-bold text-white tracking-wider">
                               Quote-app
                           </span> 
                           <div className="pt-8 text-center">
                               <a href="https://ruthjelimo.github.io/Quote-app/">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live link</button>
                               </a>
                               <a href="https://github.com/ruthjelimo/Quote-app.git">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                               </a>
                           </div>
                        </div>
                        <div className="opacity-8 group-hover:opacity-100">
                           <span className="text-2xl font-bold text-white tracking-wider">
                               Instagram-app
                           </span> 
                           <div className="pt-8 text-center">
                               <a href="https://github.com/ruthjelimo/instagram_app">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live link</button>
                               </a>
                               <a href=" https://github.com/ruthjelimo/instagram_app.git">
                              
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                               </a>
                           </div>
                        </div>
                        <div className="opacity-8 group-hover:opacity-100">
                           <span className="text-2xl font-bold text-white tracking-wider">
                               Letuce
                           </span> 
                           <div className="pt-8 text-center">
                               <a href="https://ruthjelimo.github.io/letuce/">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live link</button>
                               </a>
                               <a href=" https://github.com/ruthjelimo/letuce.git">
                              
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                               </a>
                           </div>
                        </div>
                        <div className="opacity-8 group-hover:opacity-100">
                           <span className="text-2xl font-bold text-white tracking-wider">
                               Awwards
                           </span> 
                           <div className="pt-8 text-center">
                               <a href="https://mimoh-awards.herokuapp.com/">
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live link</button>
                               </a>
                               <a href=" https://github.com/ruthjelimo/Awwards.git">
                              
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                               </a>
                           </div>
                        </div>
                    </div>
                    </div>
                    </div>





            
      
     );
}
 
export default project;