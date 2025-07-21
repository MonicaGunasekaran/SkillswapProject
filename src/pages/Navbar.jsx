import React from 'react'

const Navbar = () => {
  return (
    <div class="flex flex-1  h-15 p-5 font-medium bg-blue-950 text-blue-400">
        <p>Logo</p>
        <div class="flex  gap-10 ml-auto ">
        <p>Home</p>
        <p>About</p>
        <p>Platform</p>
        <p>Contact</p></div>
    </div>
  )
}

export default Navbar
