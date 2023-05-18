import React from 'react'
import read1 from '../images/read1.jpg'
import books from '../images/books.jpg'
const About = () => {
  return (
    <div className='w-full bg-white py-8 md:py-16 px-4' id='about'>
  <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className='w-full md:w-[500px] mx-auto my-4' src={read1} alt='read' />
    <div className='flex flex-col justify-center'>
      <p className='text-[#00df9a] font-bold '>About</p>
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lorem ipsum dolor sit </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicng elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
    </div>
  </div>

  <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 mt-20'>
    <div className='flex flex-col justify-center'>
      <p className='text-[#00df9a] font-bold'>About</p>
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lorem ipsum dolor sit </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        molestiae delectus culpa hic assumenda, voluptate reprehenderit
        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
        eveniet ex deserunt fuga?
      </p>
    </div>
    <img className='w-full md:w-[500px] mx-auto my-4' src={books} alt='read' />
  </div>
</div>

  )
}

export default About