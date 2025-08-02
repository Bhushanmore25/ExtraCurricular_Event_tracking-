import React from 'react'

const AboutUs = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center my-12 py-12 bg-gradient-to-b shadow-lg rounded-lg border border-gray-200'>
        <h2 className='text-4xl font-bold font-sans text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-800 mb-6'>
          About Us
        </h2>

        <div className='max-w-3xl text-center px-8'>
          <p className='py-4 text-2xl font-semibold text-gray-700'>
            Welcome to <span className='text-orange-500'>ExtraEdge</span>
          </p>
          <p className='py-2 text-lg text-gray-600 leading-relaxed'>
            At ExtraEdge, we’re redefining how students and organizers connect through extracurricular events. Our platform streamlines event management and participation, ensuring a seamless experience for everyone involved.
          </p>

          <p className='py-6 text-xl font-semibold text-orange-500'>
            Our Mission
          </p>
          <p className='text-lg text-gray-600 leading-relaxed'>
            To empower students and organizations by providing a platform that brings extracurricular activities to the forefront, enabling seamless management and deeper engagement for students, organizers, and administrators.
          </p>

          <p className='py-6 text-xl font-semibold text-red-600'>
            Why Choose ExtraEdge?
          </p>

          <div className='text-left'>
            <p className='py-2 text-lg text-gray-600 leading-relaxed'>
              <strong className='text-orange-500'>🚀 Effortless Event Management:</strong> Organizers can create, manage, and track events with ease, thanks to our intuitive tools designed to simplify every step.
            </p>
            <p className='py-2 text-lg text-gray-600 leading-relaxed'>
              <strong className='text-orange-500'>📅 Real-Time Tracking:</strong> Students can register for events, track participation, and stay up-to-date with upcoming activities, all in one place.
            </p>
            <p className='py-2 text-lg text-gray-600 leading-relaxed'>
              <strong className='text-orange-500'>📊 Insightful Reports:</strong> Administrators get comprehensive insights into event participation and success, helping them make informed decisions and foster student engagement.
            </p>
            <p className='py-2 text-lg text-gray-600 leading-relaxed'>
              <strong className='text-orange-500'>🌟 User-Centric Experience:</strong> Our sleek, easy-to-use platform is built to ensure that every student finds opportunities that resonate with their interests.
            </p>
          </div>

          <p className='py-6 text-xl font-semibold text-orange-500'>
            Our Vision
          </p>
          <p className='text-lg text-gray-600 leading-relaxed'>
            To create a dynamic, inclusive space where extracurricular activities are easily accessible and engaging. We aim to bridge the gap between students and opportunities, fostering personal growth through meaningful participation.
          </p>

          <p className='mt-8 py-4 text-lg font-semibold text-red-600'>
            Join us at ExtraEdge and unlock the potential of extracurricular excellence!
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutUs;
