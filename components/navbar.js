import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-transparent">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="h-24 flex justify-center items-center sticky">
                <div className="flex space-x-4">
                  <a href="#" className="px-3 py-2 text-base font-semibold text-gray-400 hover:text-white">Home</a>
                  <a href="#" className="px-3 py-2 text-base font-semibold text-gray-400 hover:text-white">About</a>
                  <a href="#" className="px-3 py-2 text-base font-semibold text-gray-400 hover:text-white">Projects</a>
                  {/* <a href="#" className="px-3 py-2 text-base font-medium text-gray-300 hover:text-white"></a> */}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar