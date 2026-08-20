import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5000/api/register";

const VerifyEmail = () => {
  const { token } = useParams();
  const [status, setStatus] = useState("verifying"); // verifying | success | error
  const [message, setMessage] = useState("");
  const hasRun = useRef(false); // guards against React StrictMode double-invoking the effect in dev

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const verify = async () => {
      try {
        const res = await fetch(`${API_URL}/verify-email/${token}`);
        const data = await res.json().catch(() => ({}));

        setStatus(res.ok ? "success" : "error");
        setMessage(data.message || "Email verification failed.");
      } catch (err) {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    };

    verify();
  }, [token]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {status === "verifying" && <p>Verifying your email...</p>}
      {status === "success" && (
        <>
          <h2>✅ Email Verified</h2>
          <p>{message}</p>
          <a href="/login">Go to Login</a>
        </>
      )}
      {status === "error" && (
        <>
          <h2>❌ Verification Failed</h2>
          <p>{message}</p>
        </>
      )}
    </div>
  );
};

export default VerifyEmail;