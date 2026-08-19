import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //function to connect to backend and register user
  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful registration (e.g., redirect to login)
        console.log('Registration successful:', data);
        alert('Registration successful! Please check your email to verify your account.');
      } else {
        // Handle registration error
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col gap-4 bg-blue-500 text-2xl border-2 w-96 p-6">
          <label htmlFor="username">Username</label>

          <input
            id="username"
            type="text"
            placeholder="Username"
            className="p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            placeholder="Password"
            className="p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={() => handleRegister()} className="bg-white p-2 rounded">
            Register
          </button> 

          <p className="text-lg">Already registered?</p>
          <Link
            to="/login"
            className="bg-white text-blue-500 hover:bg-blue-200 font-bold py-2 px-4 rounded"
          >
            Login
          </Link>
          <p className="text-lg">Forgot password</p>
          <Link
            to="/forgott"
            className="bg-white text-blue-500 hover:bg-blue-200 font-bold py-2 px-4 rounded"
          >
            Forgot Password
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
