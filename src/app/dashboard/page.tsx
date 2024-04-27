"use client"

import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
 const [dateandTime, setDateandTime] = useState<string>('');

 useEffect(() => {
   const interval = setTimeout(() => {
     const now = new Date();
     const formattedTime = `${formatDigit(now.getDate())}/${formatDigit(now.getMonth() + 1)}/${now.getFullYear()} - ${formatDigit(now.getHours())}:${formatDigit(now.getMinutes())}:${formatDigit(now.getSeconds())}`;
     setDateandTime(formattedTime);
   }, 100);

   return () => clearInterval(interval);
 }, []);

 useEffect(() => {
   const sendDateTimeToAPI = async () => {
     try {
      //  const response = await axios.post('http://10.15.15.205:9718/esb/NACH/usersec/update', {
        const response = await axios.post(process.env.NEXT_PUBLIC_URL_DATE_TIME_UPDATE, {

         UserName: "Vaibhav",
         LoginDate: dateandTime
       });
       console.log(response.data);
     } catch (error) {
       console.error(error);
     }
   };

   if (dateandTime) {
     sendDateTimeToAPI();
   }
 }, [dateandTime]);

 const formatDigit = (digit: number): string => {
   return digit < 10 ? `0${digit}` : digit.toString();
 };

 return (
   <div>
     {/* Your JSX code */}
   </div>
 );
}

