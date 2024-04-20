"use client"
import Image from 'next/image';

const handleSubmit = () => {

}

const handleResend = () => {

}

export default function OTP() {
    return (
        <main className="h-screen flex-col items-center justify-between bg-[#d5d4f6]">
            <div className='flex bg-white justify-between p-2 mx-1 mb-1 rounded-xl'>
                <Image src="/fino.jpg" alt="Fino" width={300} height={300} />
              <div>
                <div className='text-blue-800 font-bold'>Qadar</div>
                <div><span className='text-red-500 font-bold mr-1'>Apki Mehnat</span><span className='text-blue-800 font-bold'>Ki</span></div>
              </div>
            </div>

            <div className='flex flex-col items-center space-y-6 mt-20'>
                <div className='border border-dashed border-purple-800 p-5'>
                    <h1 className='text-4xl font-extrabold'>Enter One Time Pin</h1>
                </div>
                <div>
                    <input type="text" className='bg-white h-14 w-14 m-4 p-4 text-2xl font-bold rounded-lg'/>
                    <input type="text" className='bg-white h-14 w-14 m-4 p-4 text-2xl font-bold rounded-lg'/>
                    <input type="text" className='bg-white h-14 w-14 m-4 p-4 text-2xl font-bold rounded-lg'/>
                    <input type="text" className='bg-white h-14 w-14 m-4 p-4 text-2xl font-bold rounded-lg'/>
                </div>
                <div className='flex flex-row justify-between gap-24'>
                    <button className='bg-[#aca7a7] mx-2 rounded-lg text-lg font-bold py-4 px-10' onClick={handleSubmit}>Submit</button>
                    <button className='bg-[#aca7a7] mx-2 rounded-lg text-lg font-bold py-4 px-5' onClick={handleResend}>Resend OTP</button>
                </div>
            </div>
        </main>
    )
}