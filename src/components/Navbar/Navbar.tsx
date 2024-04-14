"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';



export default function Navbar() {
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date();
        const formattedTime = `${formatDigit(now.getDate())}/${formatDigit(now.getMonth() + 1)}/${now.getFullYear()} - ${formatDigit(now.getHours())}:${formatDigit(now.getMinutes())}:${formatDigit(now.getSeconds())}`;
        setCurrentTime(formattedTime);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const formatDigit = (digit: number): string => {
      return digit < 10 ? `0${digit}` : digit.toString();
    };



  return (
    <nav className="flex justify-between bg-[#dfd3e0] rounded-3xl w-screen h-[12svh]">
        <div className="logo m-[2svh]">
          <Image src="/fino.jpg" className='h-[8svh] w-auto rounded' alt='logo' width={100} height={100} />
        </div>

        <div className="container-1 m-[3svh]">
          <p>V1.1</p>
        </div>

        <div className="container-1 m-[3svh]">
          <p>User Name: ABC12345</p>
          <p>MER3</p>
        </div>

        <div className="container-2 m-[3svh]">
          <span>{currentTime}</span>
        </div>

        <div className="container-1 m-[3svh]">
          <p>Branch Code:</p>
          <p>9001</p>
        </div>

        <div className='container-3 m-[3svh] '>
          <button className='text-black bg-gray-400 border-0 py-1 px-4 focus:outline-none hover:bg-gray-500 rounded-2xl text-xl' type="submit">Log Out</button>
        </div>
      </nav>
  )
}