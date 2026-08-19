import { useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5000/api";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch(`${API_URL}/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Failed to reset password");
      }

      setMessage(data.message);
    } catch (resetError) {
      setError(resetError.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">
      <form onSubmit={handleResetPassword} className="bg-white shadow-2xl rounded-2xl p-10 w-96">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">Reset Password</h1>
        <label htmlFor="password" className="font-semibold text-gray-700">New Password</label>
        <input
          id="password"
          type="password"
          required
          minLength={6}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full p-3 mt-2 mb-5 border border-gray-300 rounded-lg"
        />
        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg">
          Reset Password
        </button>
        {message && <p className="text-green-600 mt-4">{message}</p>}
        {error && <p className="text-red-600 mt-4">{error}</p>}
        <p className="text-center mt-4">
          <a href="/login" className="text-blue-500 hover:text-blue-700">
            🔙 Back to Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default ResetPassword;