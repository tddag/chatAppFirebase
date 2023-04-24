import React, { useState } from 'react'
import { db } from "../firebase"
import { collection, query, where, getDocs } from "firebase/firestore";


const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleSearch = async () => {
    console.log("Get here")
    const q = query(collection(db, "users"), where("displayName", "==", username))

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
        console.log(user)
      });
    } catch (err) {
      setErr(true)
    }

  }

  const handleKey = e => {
    e.code === "Enter" && handleSearch()
  }

  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" onKeyDown={handleKey} onChange={ e => setUsername(e.target.value) }/>
      </div> 

      { err && <span>User not found!</span>}

      {user && (
        <div className="userChat">
          <img src={user.photoURL}/>
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}

    </div>
  )
}

export default Search