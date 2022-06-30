const contact = () => {
    return (  
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        
               <form method='POST' action='https://getform.io/f/b1c65dac-7055-4ebb-81d5-184fa9ac9e00' className='flex flex-col max-w-[600px] w-full'>
               
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                  <div className='flex flex-col text-gray-300 text-xl mt-4'>
                    <p>Email: ruthjmimo@gmail.com</p>
                    <p>Phone: +254712437161</p>
                   
                
                </div>
               
            </form>
        </div>
    );
}
 
export default contact;