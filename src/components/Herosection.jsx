// src/components/Hero.js
import React from 'react';
import Image from 'next/image';



const Hero = () => {
  return (
    <section className="bg-hero-pattern bg-cover text-white min-h-96 rounded-lg  mt-10 flex flex-col justify-center items-center text-center p-4 mb-5">
      <div className=' flex justify-center items-center gap-10 '>
      <Image 
      className=' rounded-full'
        src="/images/profile.jpg" // Path to your image
        alt="img"
        width={180} // Specify the width of the image
        height={180} // Specify the height of the image
      />
      <div >
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to My Portfolio</h1>
      
      <p className="text-lg md:text-xl mb-8">I am a passionate Frontend developer creating amazing web experiences.</p>
      </div>
      </div>
      
    </section>
  );
};

export default Hero;
