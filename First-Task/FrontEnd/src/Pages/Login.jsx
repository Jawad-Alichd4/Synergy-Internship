import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include', // REQUIRED so the httpOnly cookie your backend sets is stored
        body: JSON.stringify({ email, password })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        console.log('Login successful:', data);
        navigate('/dashboard'); // or wherever you want to send them
      } else {
        console.error('Login failed:', data.message);
        setError(data.message || "Login failed. Please check your details.");
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-96">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-2">
          Welcome Back! ✋
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Login to your account
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email" className="font-semibold text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="password" className="font-semibold text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="text-right mb-6">
          <Link
            to="/forgotPassword"
            className="text-blue-500 hover:text-blue-700 text-sm font-semibold"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={handleLogin}
        >
          Login
        </button>

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