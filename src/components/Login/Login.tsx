// "use client"
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { MdLock, MdError } from "react-icons/md";

// export default function Home() {


//   const data = [
//     { "user-id": "user1", password: "fino1" },
//     { "user-id": "user2", password: "fino2" },
//     { "user-id": "user3", password: "fino3" },
//     { "user-id": "user4", password: "fino4" },
//     { "user-id": "user5", password: "fino5" },
//   ];

//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [userIdError, setUserIdError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showInvalidMessage, setShowInvalidMessage] = useState(false);
//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Reset error messages
//     setUserIdError("");
//     setPasswordError("");
//     setShowInvalidMessage(false);

//     // Check if userId and password are valid
//     const validUser = data.find((user) => user["user-id"] === userId && user.password === password);
//     if (validUser) {
//       // Redirect to landing page
//       router.push("/Login/OTP");
//     } else {
//       setShowInvalidMessage(true);
//       // Display error messages
//       if (!userId) {
//         setUserIdError("Please enter a user ID");
//       } else {
//         setUserIdError("");
//       }
//       if (!password) {
//         setPasswordError("Please enter a password");
//       } else {
//         setPasswordError("");
//       }
//     }
//   };

//   const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUserId(e.target.value);
//     setShowInvalidMessage(false); // Reset showInvalidMessage when user starts typing
//   };

//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//     setShowInvalidMessage(false); // Reset showInvalidMessage when user starts typing
//   };

//   const handleCancel = () => {
//     setUserId("");
//     setPassword("");
//     setShowInvalidMessage(false);
//     setUserIdError("");
//     setPasswordError("");
//   };

//   return (
//     <main className='h-screen flex-col items-center justify-between bg-[#d5d4f6]'>
//       <div className='flex bg-white justify-between p-2 mx-1 mb-1 rounded-xl'>
//         <Image src="/fino.jpg" alt="Fino" width={300} height={300} />
//         <div>
//           <div className='text-blue-800 font-bold'>Qadar</div>
//           <div><span className='text-red-500 font-bold mr-1'>Apki Mehnat</span><span className='text-blue-800 font-bold'>Ki</span></div>
//         </div>
//       </div>
//       {showInvalidMessage && (
//         <div className="flex bg-white rounded-2xl p-2 ">
//           <MdError size={22} />
//           <span className="ml-2 text-black font-semibold pr-2">Enter valid user ID or password</span>
//         </div>
//       )}
//       <div className='flex flex-col items-center mt-20'>
//         <input
//           className='w-96 h-12 my-4 p-2 rounded-lg'
//           type='text'
//           placeholder='Username*'
//           onChange={handleUserIdChange}
//           value={userId}
//           required
//         />
//         {userIdError && <div className="text-red-500 mb-2">{userIdError}</div>}
//         <input
//           className='w-96 h-12 my-4 p-2 rounded-lg'
//           type='password'
//           placeholder='Password*'
//           onChange={handlePasswordChange}
//           value={password}
//           required
//         />
//         {passwordError && <div className="text-red-500 mb-2">{passwordError}</div>}
//         <div className='flex flex-row justify-between gap-24 mt-10'>
//           <button className='bg-[#aca7a7] mx-2 rounded-lg text-lg font-bold py-4 px-10' onClick={handleSubmit}>Submit</button>
//           <button className='bg-[#aca7a7] mx-2 rounded-lg text-lg font-bold py-4 px-10' onClick={handleCancel}>Cancel</button>
//         </div>
//       </div>
//     </main>
//   );
// }






"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MdError } from "react-icons/md";
import axios from "axios";

export default function Home() {
 const [userId, setUserId] = useState("");
 const [password, setPassword] = useState("");
 const [userIdError, setUserIdError] = useState("");
 const [passwordError, setPasswordError] = useState("");
 const [showInvalidMessage, setShowInvalidMessage] = useState(false);
 const router = useRouter();

 const handleSubmit = async (e) => {
   e.preventDefault();
   setUserIdError("");
   setPasswordError("");
   setShowInvalidMessage(false);

   try {
     const response = await axios.post("http://10.15.15.205:9718/esb/NACH/usersec/authenticate", {
       UserName: userId,
       Password: password,
     });

     if (response.data.returnCode === "0") {
       const mobileNumber = response.data.MobileNumber;
       const otpResponse = await axios.post(
         "http://10.15.15.247:81/esb/generate/otp",
         {
           MethodId: "1",
           TellerID: "155",
           CustomerMobileNo: mobileNumber,
           EventId: "",
           VerifyParam: {},
           NotifyParam: {},
         },
         {
           headers: {
             "X-Correlation-Id": "123456789_01012024120102020",
           },
         }
       );

       if (otpResponse.status === 200) {
         router.push("/Login/OTP");
       } else {
         setShowInvalidMessage(true);
       }
     } else {
       setShowInvalidMessage(true);
     }
   } catch (error) {
     console.error("Error:", error);
     setShowInvalidMessage(true);
   }
 };

 const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setUserId(e.target.value);
   setShowInvalidMessage(false);
 };

 const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setPassword(e.target.value);
   setShowInvalidMessage(false);
 };

 const handleCancel = () => {
   setUserId("");
   setPassword("");
   setShowInvalidMessage(false);
   setUserIdError("");
   setPasswordError("");
 };

 return (
   <main className="h-screen flex-col items-center justify-between bg-[#d5d4f6]">
     <div className="flex bg-white justify-between p-2 mx-1 mb-1 rounded-xl">
       <Image src="/fino.jpg" alt="Fino" width={300} height={300} />
       <div>
         <div className="text-blue-800 font-bold">Qadar</div>
         <div>
           <span className="text-red-500 font-bold mr-1">Apki Mehnat</span>
           <span className="text-blue-800 font-bold">Ki</span>
         </div>
       </div>
     </div>
     {showInvalidMessage && (
       <div className="flex bg-white rounded-2xl p-2 ">
         <MdError size={22} />
         <span className="ml-2 text-black font-semibold pr-2">
           Enter valid user ID or password
         </span>
       </div>
     )}
     <div className="flex flex-col items-center mt-20">
       <input
         className="w-96 h-12 my-4 p-2 rounded-lg"
         type="text"
         placeholder="Username*"
         onChange={handleUserIdChange}
         value={userId}
         required
       />
       {userIdError && <div className="text-red-500 mb-2">{userIdError}</div>}
       <input
         className="w-96 h-12 my-4 p-2 rounded-lg"
         type="password"
         placeholder="Password*"
         onChange={handlePasswordChange}
         value={password}
         required
       />
       {passwordError && <div className="text-red-500 mb-2">{passwordError}</div>}
       <div className="flex flex-row justify-between gap-24 mt-10">
         <button
           className="bg-[#aca7a7] mx-2 rounded-lg text-lg font-bold py-4 px-10"
           onClick={handleSubmit}
         >
           Submit
         </button>
         <button
           className="bg-[#aca7a7] mx-2 rounded-lg text-lg font-bold py-4 px-10"
           onClick={handleCancel}
         >
           Cancel
         </button>
       </div>
     </div>
   </main>
 );
}






















