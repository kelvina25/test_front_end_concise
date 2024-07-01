import React from 'react'
import aboutUsImage from '../assets/images/image 14.png'

const About = () => {
  return (
    <>
    <section className="mx-28 my-8 w-auto h-screen ">
      <h1 className="text-3xl font-semibold self-start relative inline-block text-[#0047AB] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/3 after:border-b-4 after:border-red-500 px-0 pb-1">
          About Us
      </h1>
      <div className='flex flex-row mt-9 gap-7'>
        <img className='w-[650px] h-[550px]' src={aboutUsImage} alt='' />
        <div className='flex flex-col gap-4 w-auto'>
            <h2 className='text-2xl font-bold'>About Our Company</h2>
            <p className='text-base'>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus earum illo sed. Animi tempora, deserunt placeat earum dignissimos consectetur nulla nesciunt maiores dolore, voluptatibus recusandae similique cupiditate temporibus tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nemo voluptas quae molestias laboriosam enim veniam qui illo tenetur commodi adipisci, ea officia ipsum, quos saepe tempora, nostrum aspernatur? Rem.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About