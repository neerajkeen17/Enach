// "use client"

// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';



// export default function Navbar() {

// // Time Function

//     const [currentTime, setCurrentTime] = useState<string>('');

//     useEffect(() => {
//       const interval = setInterval(() => {
//         const now = new Date();
//         const formattedTime = `${formatDigit(now.getDate())}/${formatDigit(now.getMonth() + 1)}/${now.getFullYear()} - ${formatDigit(now.getHours())}:${formatDigit(now.getMinutes())}:${formatDigit(now.getSeconds())}`;
//         setCurrentTime(formattedTime);
//       }, 1000);
  
//       return () => clearInterval(interval);
//     }, []);
  
//     const formatDigit = (digit: number): string => {
//       return digit < 10 ? `0${digit}` : digit.toString();
//     };

// // Logout Button Function

//     const router = useRouter();

//     const handleLogout = () => {
//       router.push("/");
//     };

//   return (
//     <nav className="flex justify-between bg-[#dfd3e0] rounded-3xl w-screen h-[12svh]">
//         <div className="logo m-[2svh]">
//           <Image src="/fino.jpg" className='h-[8svh] w-auto rounded' alt='logo' width={100} height={100} unoptimized/>
//         </div>

//         <div className="container-1 m-[3svh] text-sm">
//           <p>V1.1</p>
//         </div>

//         <div className="container-1 m-[3svh] text-sm">
//           <p>User Name: USER1</p>
//           <p>MER3</p>
//         </div>

//         <div className="container-2 m-[3svh] text-sm">
//           <span>{currentTime}</span>
//         </div>

//         <div className="container-1 m-[3svh] text-sm">
//           <p>Branch Code:</p>
//           <p>9001</p>
//         </div>

//         <div className='container-3 m-[3svh] '>
//           <button className='text-black bg-gray-400 border-0 py-1 px-4 focus:outline-none hover:bg-gray-500 rounded-xl text-xl' type="submit" onClick={handleLogout}>Log Out</button>
//         </div>
//       </nav>
//   )
// }





// "use client"

// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';


// export default function Navbar() {

//   const { userId } = useSelector((state: RootState) => state.login);
// // Time Function

//     const [currentTime, setCurrentTime] = useState<string>('');

//     useEffect(() => {
//       const interval = setInterval(() => {
//         const now = new Date();
//         const formattedTime = `${formatDigit(now.getDate())}/${formatDigit(now.getMonth() + 1)}/${now.getFullYear()} - ${formatDigit(now.getHours())}:${formatDigit(now.getMinutes())}:${formatDigit(now.getSeconds())}`;
//         setCurrentTime(formattedTime);
//       }, 1000);
  
//       return () => clearInterval(interval);
//     }, []);
  
//     const formatDigit = (digit: number): string => {
//       return digit < 10 ? `0${digit}` : digit.toString();
//     };

// // Logout Button Function

//     const router = useRouter();

//     const handleLogout = () => {
//       router.push("/");
//     };

//   return (
//     <nav className="flex justify-between bg-[#dfd3e0] rounded-3xl w-screen h-[12svh]">
//         <div className="logo m-[2svh]">
//           <Image src="/fino.jpg" className='h-[8svh] w-auto rounded' alt='logo' width={100} height={100} unoptimized/>
//         </div>

//         <div className="container-1 m-[3svh] text-sm">
//           <p>V1.1</p>
//         </div>

//         <div className="container-1 m-[3svh] text-sm">
//           <p>User Name: {userId} </p>
//           <p>MER3</p>
//         </div>

//         <div className="container-2 m-[3svh] text-sm">
//           <span>{currentTime}</span>
//         </div>

//         <div className="container-1 m-[3svh] text-sm">
//           <p>Branch Code:</p>
//           <p>9001</p>
//         </div>

//         <div className='container-3 m-[3svh] '>
//           <button className='text-black bg-gray-400 border-0 py-1 px-4 focus:outline-none hover:bg-gray-500 rounded-xl text-xl' type="submit" onClick={handleLogout}>Log Out</button>
//         </div>
//       </nav>
//   )
// }





import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function Navbar() {
  const { userId } = useSelector((state: RootState) => state.login);

  // Time Function
  const [currentTime, setCurrentTime] = useState<string>('');
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = `${formatDigit(now.getDate())}/${formatDigit(
        now.getMonth() + 1
      )}/${now.getFullYear()} - ${formatDigit(now.getHours())}:${formatDigit(
        now.getMinutes()
      )}:${formatDigit(now.getSeconds())}`;
      setCurrentTime(formattedTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDigit = (digit: number): string => {
    return digit < 10 ? `0${digit}` : digit.toString();
  };

  // Logout Button Function
  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
  };

  return (
    <nav className="flex justify-between bg-[#dfd3e0] rounded-3xl w-screen h-[12svh]">
      <div className="logo m-[2svh]">
        <Image
          src="/fino.jpg"
          className="h-[8svh] w-auto rounded"
          alt="logo"
          width={100}
          height={100}
          unoptimized
        />
      </div>
      <div className="container-1 m-[3svh] text-sm">
        <p>V1.1</p>
      </div>
      <div className="container-1 m-[3svh] text-sm">
        <p>User Name: {userId}</p>
        <p>MER3</p>
      </div>
      <div className="container-2 m-[3svh] text-sm">
        <span>{currentTime}</span>
      </div>
      <div className="container-1 m-[3svh] text-sm">
        <p>Branch Code:</p>
        <p>9001</p>
      </div>
      <div className="container-3 m-[3svh]">
        <button
          className="text-black bg-gray-400 border-0 py-1 px-4 focus:outline-none hover:bg-gray-500 rounded-xl text-xl"
          type="submit"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
}