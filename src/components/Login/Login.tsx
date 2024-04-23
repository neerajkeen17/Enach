"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MdError } from "react-icons/md";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setMobileNumber} from '@/store/resources/loginSlice';
import { AppDispatch } from '@/store/store';


export default function Home() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userIdError, setUserIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showInvalidMessage, setShowInvalidMessage] = useState(false);
  const router = useRouter();

  const dispatch: AppDispatch = useDispatch();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        dispatch(setMobileNumber(mobileNumber));

        router.push("/login-otp");
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