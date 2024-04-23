"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function OTP() {
  const { mobileNumber } = useSelector((state: RootState) => state.login);
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const [requestId, setRequestId] = useState('');

  useEffect(() => {
    const fetchOTP = async () => {
      try {
        const response = await axios.post('http://localhost:8080/http://10.15.15.247:81/esb/generate/otp',

        {
          MethodId: '1',
          TellerID: '155',
          CustomerMobileNo: mobileNumber,
          EventId: '',
          VerifyParam: {},
          NotifyParam: {},
        });

        const data = response.data;

        if (data.ResponseCode === '000') {
          setRequestId(data.RequestId);
        } else {
          console.error('Error generating OTP:', data.DisplayMessage);
        }
      } catch (error) {
        console.error('Error generating OTP:', error);
      }
    };

    fetchOTP();
  }, []);

  console.log(" dekh requestId aaya ki nahi ",requestId);

  const handleSubmit = async () => {
    const otpValue = otp.join('');
    if (otpValue.length === 4 && /^[0-9]+$/.test(otpValue)) {
      try {
        const response = await axios.post('http://localhost:8080/http://10.15.15.247:81/esb/smsservice', {
          headers: {
            'Content-Type': 'application/json',
          },
          // data: JSON.stringify({
          //   MethodId: '2',
          //   TellerID: '155',
          //   CustomerMobileNo: mobileNumber,
          //   EventId: '',
          //   VerifyParam: {
          //     RequestId: requestId,
          //     OtpPin: otpValue,
          //   },
          //   NotifyParam: {},
          // }),
          {
            MethodId: '2',
            TellerID: '155',
            CustomerMobileNo: mobileNumber,
            EventId: '',
            VerifyParam: {
              RequestId: requestId,
              OtpPin: otpValue,
            },
            NotifyParam: {},
          },
        });

        const data = response.data;

        if (data.ResponseCode === '000') {
          router.push('/dashboard');
        } else {
          console.error('OTP verification failed:', data.DisplayMessage);
        }
      } catch (error) {
        console.error('Error verifying OTP:', error);
      }
    }
  };

  const handleResend = async () => {
    try {
      const response = await axios.post('http://localhost:8080/http://10.15.15.247:81/esb/generate/otp', {
        MethodId: '1',
        TellerID: '155',
        CustomerMobileNo: mobileNumber,
        EventId: '',
        VerifyParam: {},
        NotifyParam: {},
      });

      const data = response.data;

      if (data.ResponseCode === '000') {
        setRequestId(data.RequestId);
      } else {
        console.error('Error generating OTP:', data.DisplayMessage);
      }
    } catch (error) {
      console.error('Error generating OTP:', error);
    }
  };

  const handleChange = (e, idx) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[idx] = value;
      setOtp(newOtp);
      if (value === '') {
        // If the user deletes the input, move the focus to the previous input
        if (idx > 0) {
          inputRefs.current[idx - 1].focus();
        }
      } else if (idx < 3) {
        // If the user enters a digit, move the focus to the next input
        inputRefs.current[idx + 1].focus();
      }
    }
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
      <div className="flex flex-col items-center space-y-6 mt-20">
        <div className="border border-dashed border-purple-800 p-5">
          <h1 className="text-4xl font-extrabold">Enter One Time Pin</h1>
        </div>
        <div>
          {otp.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, idx)}
              ref={(el) => (inputRefs.current[idx] = el)}
              className="bg-white h-14 w-14 m-4 p-4 text-2xl font-bold rounded-lg"
            />
          ))}
        </div>
        <div className="flex flex-row justify-between gap-24">
          <button
            className="bg-[#aca7a7] mx-2 rounded-lg text-lg font-bold py-4 px-10"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="bg-[#aca7a7] mx-2 rounded-lg text-lg font-bold py-4 px-5"
            onClick={handleResend}
          >
            Resend OTP
          </button>
        </div>
      </div>
    </main>
  );
}