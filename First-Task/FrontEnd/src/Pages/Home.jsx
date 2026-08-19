import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">

      {/* Main Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-96 text-center">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome!
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Welcome to our website. This is our home page where you can register or login to access your account.
          
        </p>

        {/* Create Account */}
        <p className="text-gray-700 mb-3">
          Don't have an account?
        </p>

        <Link
          to="/register"
          className="block w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Register
        </Link>

        {/* Login */}
        <p className="text-gray-700 mt-6 mb-3">
          Already have an account?
        </p>

        <Link
          to="/login"
          className="block w-full bg-gray-200 text-blue-600 font-bold py-3 rounded-lg hover:bg-gray-300 transition duration-300"
        >
          Login
        </Link>

      </div>

    </div>
  )
}

export default Home