import React from 'react'
import logo from "../assets/images/image.png"
const HeroSection = () => {
  return (
    <>
    <div className="flex flex-col items-center mt-10">
      <img src={logo} alt="logo"  className='w-44 rounded-3xl mb-6'/>
    {/* <h1 className="text-xl sm:text-6xl lg:text-7xl text-center tracking-wide"> */}
    <h1 className="text-6xl text-center tracking-wide font-sans font-semibold">
  ExtraEdge: Your Ultimate Hub  
  <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text font-sans font-semibold">
  {" "} for Seamless Event Management
  </span>
</h1>
<p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl mx-auto font-sans font-semibold">
  Discover the future of extracurricular activities with our intuitive platform. Effortlessly track, register, and engage in events, while ensuring streamlined management and insightful reporting for organizers and administrators.
</p>

    <div className="flex justify-center my-10">
      <a
        href="#"
        className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
      >
        About Us
      </a>
      {/* <a href="#" className="py-3 px-4 mx-3 rounded-md border">
        Contact
      </a> */}
    </div>
    {/* <div className="flex mt-10 justify-center gap-1 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="rounded-lg w-[45vw] border h-auto border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        className="rounded-lg w-[45vw] border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div> */}
  </div>
  </>
  )
}

export default HeroSection