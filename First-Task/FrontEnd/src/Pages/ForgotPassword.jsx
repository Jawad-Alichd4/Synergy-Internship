import React from 'react';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api';

const ForgotPassword = () => {
  // Function to handle password reset request
  const handlePasswordReset = async (email) => {
    try {
      // Simulate an API call to reset the password
      const response = await fetch(`${API_URL}/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send password reset email');
      }

      // Handle successful password reset request
      alert('Password reset email sent successfully!');
    } catch (error) {
      console.error('Error occurred while resetting password:', error);
      alert(error.message);
    }
  };

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
        onClick= {() => handlePasswordReset(document.getElementById('email').value)}
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
           🔙 Back to Login
          </Link>

        </div>

      </div>

    </div>
  )
}

export default ForgotPassword