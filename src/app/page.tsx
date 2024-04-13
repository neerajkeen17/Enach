"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MdLock, MdError } from "react-icons/md";




export default function Home() {

  const data = [
    { "user-id": "user1", password: "fino1" },
    { "user-id": "user2", password: "fino2" },
    { "user-id": "user3", password: "fino3" },
    { "user-id": "user4", password: "fino4" },
    { "user-id": "user5", password: "fino5" },
  ];

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userIdError, setUserIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showInvalidMessage, setShowInvalidMessage] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => { 


    e.preventDefault();

    // Reset error messages
    setUserIdError("");
    setPasswordError("");
    setShowInvalidMessage(false);

    // Check if userId and password are valid
    const validUser = data.find((user) => user["user-id"] === userId && user.password === password);

 

    if (validUser) {
      // Redirect to landing page
      router.push("/dashboard");
    } else {
      setShowInvalidMessage(true);

      // Display error messages
      if (!userId) {
        setUserIdError("");
      } else {
        setUserIdError("");
      }

      if (!password) {
        setPasswordError("");
      } else {
        setPasswordError("");
      }
    }
  };


  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
    setShowInvalidMessage(false); // Reset showInvalidMessage when user starts typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowInvalidMessage(false); // Reset showInvalidMessage when user starts typing
  };


  return (
    <main className='h-screen flex-col items-center justify-between bg-[#d5d4f6]' >

        <div className='flex bg-white justify-between p-2 mx-1 mb-1 rounded-xl' >
            <Image src="/fino.jpg" alt="Fino" width={300} height={300} />

            <div>
                <div className='text-blue-800 font-bold' >Qadar</div>
                <div><span className='text-red-500 font-bold mr-1' >Apki Mehnat</span><span className='text-blue-800 font-bold'>Ki</span></div>
            </div>
        </div>

        {showInvalidMessage && (
            <div className="flex bg-white rounded-2xl p-2 ">
              <MdError size={22}/>
              <span className="ml-2 text-black font-semibold pr-2">Enter valid user ID or password</span>
            </div>
          )}

        <div className='flex flex-col items-center mt-20'>
          <input className='w-96 h-12 my-4 p-2 rounded-lg' type='text' placeholder='Username*' onChange={handleUserIdChange} value={userId} required/>
          <input className='w-96 h-12 my-4 p-2 rounded-lg' type='password' placeholder='Password*' onChange={handlePasswordChange} value={password} required/>
          <div className='flex flex-row justify-between gap-28 mt-10'>
            <button className='bg-[#aca7a7] mx-2 w-20 h-10 rounded-lg' onClick={handleSubmit}>Submit</button>
            <button className='bg-[#aca7a7] mx-2 w-20 h-10 rounded-lg' >Cancel</button>
          </div>
        </div>

    </main>
  );
}
