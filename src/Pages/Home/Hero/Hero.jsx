import React from 'react'
import Typed from 'react-typed';
import './hero.css'

const Hero = () => {
  return (
    <div className='text-white'>
      {/* Animation de feuilles */}
      <div className="paper-container">
  {[...Array(15)].map((_, index) => (
    <div key={index} className="paper">
      <div className="paper-inner"></div>
    </div>
  ))}
</div>



      {/* Contenu principal de votre page */}
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center' id='Home'>
        <p className='text-[#00df9a] font-bold p-2'>
          JOIN THE READING REVOLUTION
        </p>
        <h1 className='md:text-4xl sm:text-6xl text-4xl font-bold md:py-6'>
          Unlock the power of reading
        </h1>

        <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
          strings={['Track', 'Share', 'Celebrate']}
          typeSpeed={120}
          backSpeed={140}
          loop
        />

        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Your Literary Progress with Our Daily Challenges
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          Track Your Reading Progress, Set Challenges, and Build a Community of
          Active Readers.
        </p>
      </div>
    </div>
  );
};


export default Hero