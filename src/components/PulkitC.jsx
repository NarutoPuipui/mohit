import React from 'react'
// import Link from 'next/link'

const PulkitC = () => {
  return (
    <div className=''>
        <form  className="">
          <div className="bg-black w-screen h-screen flex flex-col justify-center items-center">
            <div className="bg-[#111214] text-center space-y-10 px-16 rounded-2xl border border-[#343A40]">
              <div className="">
                <div className="text-xl text-white font-semibold mt-6 mb-3">
                  Create a new account
                </div>
                <div className=' justify-center align-center '>
                <div className="mb-4 flex items-center justify-center text-md gap-2 min-w-[320px]">
                  <label htmlFor="name" className=" w-12 block relative right-10 text-gray-300 font-bold mb-2 mr-auto">
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                    name="name"
                    
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4 flex items-center justify-center text-md gap-2 min-w-[320px]">
                  <label htmlFor="email" className="w-12 block relative right-10 text-gray-300 font-bold mb-2 mr-auto">
                    Email:
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    name="email"
                    
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4 flex items-center justify-center text-md gap-2 w-[320px]">
                  <label htmlFor="password" className= " w-12 block relative right-10 text-slate-200 font-bold mb-2">
                    Password:
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    name="password"
                    
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                </div>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mx-16 mt-5 px-6 text-sm py-3 rounded-md cursor-pointer mb-3"
                >
                  Create an Account
                </button>
                <div>
                  <p className="text-white">Or</p>
                  <div
                    className="mt-2 border-white/40 border px-20 py-2 text-sm flex items-center text-[#CCCCCC] rounded-lg cursor-pointer"
                    
                  >
                    {/* <img src={google} alt="Google" className="w-4 mr-3" /> */}
                    Sign Up with Google
                  </div>
                </div>
                <div className="my-8 mb-10 text-[#909296]">
                  Already have an account?{" "}
                  
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
  )
}

export default PulkitC