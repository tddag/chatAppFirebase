import React, { useState } from 'react'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom';


const Register = () => {
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)  
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed',
        (snapshot) => {

        },
        (error) => {
          setError(true)
          console.log("UploadTaskError")
          console.log(error)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL
            })

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            });

            await setDoc(doc(db, "userChats", res.user.uid), {})

            // adding friend Admin / values of Admin are hardcoded
            try {
              const adminId = 'Eib101GB15ZsUF5oZwfLePuYavx1'
              
              const combinedId = adminId > res.user.uid ? adminId + res.user.uid : res.user.uid + adminId

              const chatRes = await getDoc(doc(db, "chats", combinedId))
              if (!chatRes.exists()) {
                // create a chat in chats collection
    
                await setDoc(doc(db, "chats", combinedId), {
                  messages: [] 
                })
        
                // create user chats
                await updateDoc(doc(db, "userChats", adminId), {
                  [combinedId + ".userInfo"]: {
                    uid: res.user.uid,
                    displayName: res.user.displayName,
                    photoURL: res.user.photoURL
                  },
                  [combinedId + ".date"]: serverTimestamp()
                })
        
                await updateDoc(doc(db, "userChats", res.user.uid), {
                  [combinedId + ".userInfo"]: {
                    uid: adminId,
                    displayName: "Admin",
                    photoURL: "https://firebasestorage.googleapis.com/v0/b/chatappfirebasetd.appspot.com/o/Admin?alt=media&token=30fb8353-c7f2-4e80-943a-f4fd5353fd11"
                  },
                  [combinedId + ".date"]: serverTimestamp()
                })        
              }      
            } catch (e) {
              console.log(e)
            }

            navigate("/")
          });
        }
      );

    } catch (err) {
      setError(true)
      console.log(err)
    }

  }
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">TD Chat App</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input style={{ display: "none"}} type="file" id="file"/>
                <label htmlFor="file">
                  <img src={Add} alt=""/>
                  <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
                {error && <span>Something went wrong</span>}
            </form>
            <p>You do have an account? <Link to="/login">Login</Link></p>
        </div>
        
    </div>
  )
}

export default Register