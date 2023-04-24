import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../firebase';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">
        TD Chat
      </span>
      <div className="user">
        <img src="https://images.pexels.com/photos/10384486/pexels-photo-10384486.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
        <span>John</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
      
    </div>
  )
}

export default Navbar