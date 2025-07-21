import React from 'react';
import Signup from './Signup';

const Login = () => {
  return (
    <div className="h-screen grid place-items-center bg-gray-100">
      <div className="grid gap-4 bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <p className="text-sm text-center">
          Don't have an account?{' '}
          <a href="#" className="text-blue-600 underline" >Create new account</a>
        </p>

        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm">Username or Email</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your email"
            className="w-full border border-gray-400 px-4 py-2 rounded"
          />
        </div>

        <div className="grid gap-1">
          <label htmlFor="pass" className="text-sm">Password</label>
          <input
            type="password"
            id="pass"
            placeholder="Enter your password"
            className="w-full border border-amber-950 px-4 py-2 rounded"
          />
        </div>

        <div className="flex items-center ">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree" className="text-sm">I agree</label>
        </div>

        <button className="w-full px-4 py-2 h-10 border border-amber-400 text-white bg-cyan-950 rounded-sm hover:bg-amber-700 hover:text-amber-50">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
