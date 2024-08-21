import Hero from '@/components/hero'
import { OrbitBackground } from '@/components/orbitBackground'
import { siteConfig } from '@/constants';
import React from 'react'

const page = () => {
  const { navItems, contents } = siteConfig; 
  const about = contents.about;
  return (
    <div className="w-full h-full flex flex-col justify-center items-center pb-10">
      <Hero about={about} className="min-h-dvh"/>
      <div className="w-full h-96 flex justify-center">
        <div className='h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>

        </div>
      </div>
      {/* <BentoDemo /> */}
    </div>
  )
}

export default page