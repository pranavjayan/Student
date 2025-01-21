
import React from 'react'

const Register = () => {
  return (
    <>
      <form
  style={{
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
  }}
>
  <div className="mb-3">
    <label htmlFor="firstName" className="form-label">First Name</label>
    <input
      type="text"
      className="form-control"
      id="firstName"
      placeholder="Enter your first name"
      style={{ marginBottom: '10px' }}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="lastName" className="form-label">Last Name</label>
    <input
      type="text"
      className="form-control"
      id="lastName"
      placeholder="Enter your last name"
      style={{ marginBottom: '10px' }}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input
      type="text"
      className="form-control"
      id="address"
      placeholder="Enter your address"
      style={{ marginBottom: '10px' }}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
    <input
      type="tel"
      className="form-control"
      id="phoneNumber"
      placeholder="Enter your phone number"
      style={{ marginBottom: '10px' }}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email Address</label>
    <input
      type="email"
      className="form-control"
      id="email"
      aria-describedby="emailHelp"
      placeholder="Enter your email"
      style={{ marginBottom: '10px' }}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input
      type="password"
      className="form-control"
      id="password"
      placeholder="Enter your password"
      style={{ marginBottom: '10px' }}
    />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="termsCheck" />
    <label className="form-check-label" htmlFor="termsCheck">I agree to the terms and conditions</label>
  </div>
  <button type="submit" className="btn btn-primary">Register</button>
</form>

    </>
  )
}

export default Register