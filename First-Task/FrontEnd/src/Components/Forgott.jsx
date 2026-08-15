import React from 'react'
import { Link } from 'react-router-dom'

const Forgott = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">

      {/* Forgot Password Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-96">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-3">
          Forgot Password?
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Don't worry! Enter your email and we'll send you a
          password reset link.
        </p>

        {/* Email */}
        <div className="flex flex-col gap-2 mb-6">

          <label
            htmlFor="email"
            className="font-semibold text-gray-700"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

        </div>

        {/* Reset Button */}
        <button
          className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Reset Password
        </button>

        {/* Back to Login */}
        <div className="text-center mt-6">

          <Link
            to="/login"
            className="text-blue-500 font-semibold hover:text-blue-700"
          >
            ← Back to Login
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Forgott