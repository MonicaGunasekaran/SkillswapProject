import React from 'react'

const Signup = () => {
  return (
    <div>
      <div className="h-screen grid place-items-center bg-gray-100">
      <div className="grid gap-4 bg-white p-8 items-center rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-center'">Sign Up</h1>
        <div className='grid gap-1'>
        <label htmlFor="username">Username:</label>
        <input type="text" name='username'class='border border-amber' /></div>
        <div className='grid gap-1'>
        <label htmlFor="emailid">Email </label>
        <input type="text" name='emailid'class='border border-amber' /></div>
        <div className='grid gap-1'>
        <label htmlFor="password">Password </label>
        <input type="password" name='password'class='border border-amber' /></div>
        <div className='grid gap-1'>
        <label htmlFor="retype">Retype Password </label>
        <input type="password" name='retype'class='border border-amber' /></div>
        <button class=" bg-cyan-950 w-full px-4 py-2 h-10 text-amber-50 p-2 hover:bg-amber-800  ">Create</button>
        </div></div>
        
    </div>
  )
}

export default Signup
