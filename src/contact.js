const contact = () => {
    return (  
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        
               <form method='POST' action='https://getform.io/f/b1c65dac-7055-4ebb-81d5-184fa9ac9e00' className='flex flex-col max-w-[600px] w-full'>
                <div>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                  <div className='flex flex-col text-gray-300 text-xl mt-4'>
                    <p>Email: ruthjmimo@gmail.com</p>
                    <p>Phone: +254712437161</p>
                </div>
                  <p className='text-gray-300 py-4'>Fill in the form below to contact me or email me via ruthjmimo@gmail.com</p>
                </div>
                <input className='bg-[#eef0f8] p-2' type='text' placeholder='Name' name='name'></input>
                <input className='my-4 p-2 bg-[#eef0f8]' type='email' placeholder='Email' name='email'></input>
                <textarea className='bg-[#eef0f8] p-2' name='message' rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Get in touch</button>
            </form>
        </div>
    );
}
 
export default contact;