import React from 'react'
import WorkCard from '@/components/work-card'

const page = () => {
  return (
    <div className="dark bg-black h-full text-white p-10">
        <h1>Hello World</h1>
        <div className="mb-5"></div>
        <WorkCard />
    </div>
  )
}

export default page