import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
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
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="p-2 border rounded"
          ></input>
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            placeholder="Password"
            className="p-2 border rounded"
          />

          <button className="bg-white p-2 rounded">Register</button>

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
