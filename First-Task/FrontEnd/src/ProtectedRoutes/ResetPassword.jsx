import React from 'react'

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">
      <h1>Reset Password Page</h1>
      <p>Please enter your new password below:</p>
      <form>
        <label htmlFor="newPassword">New Password:</label>
        <input type="password" placeholder="New Password" />
        <label htmlFor="confirmPassword">Confirm New Password:</label>
        <input type="password" placeholder="Confirm New Password" />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  )
}

export default ResetPassword