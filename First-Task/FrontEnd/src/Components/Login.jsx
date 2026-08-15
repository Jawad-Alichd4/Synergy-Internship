import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">

      {/* Login Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-96">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-2">
          Welcome Back!
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Login to your account
        </p>

        {/* Email */}
        <div className="flex flex-col gap-2 mb-5">
          <label
            htmlFor="email"
            className="font-semibold text-gray-700"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="password"
            className="font-semibold text-gray-700"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-6">
          <Link
            to="/forgott"
            className="text-blue-500 hover:text-blue-700 text-sm font-semibold"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>

        {/* Register */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?
        </p>

        <Link
          to="/register"
          className="block text-center text-blue-500 font-bold mt-2 hover:text-blue-700"
        >
          Create an account
        </Link>

      </div>

    </div>
  )
}

export default Login