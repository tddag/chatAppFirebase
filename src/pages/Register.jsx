import React from 'react'

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">TD Chat App</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input style={{ display: "none"}} type="file" id="file"/>
                <label htmlFor="file"></label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
        
    </div>
  )
}

export default Register