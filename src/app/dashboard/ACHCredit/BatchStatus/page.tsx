"use client"

import React, { useState } from 'react';

const BatchStatus = () => {
  const [batchId, setBatchId] = useState('');
  const [batchStatus, setBatchStatus] = useState('');
  const [showTable, setShowTable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTable(true);
  };

  const handleReset = () => {
    setBatchId('');
    setBatchStatus('');
    setShowTable(false);
  };
  
  const batchiddrop = [
    "AV-LICI-LICH2 HUSER1-25102023-819558032-INP",
    "AV-LICI-LICH2 HUSER1-25102023-819558032-INP",
    "AV-LICI-LICH2 HUSER1-25102023-819558032-INP",
    "AV-LICI-LICH2 HUSER1-25102023-819558032-INP"
  ]

  const batchstatusdrop = [
    "1- Batch Under Process",
    "2- Batch Rejected",
    "3- Batch Updated",
    "4- Response file Under Process",
    "5- Response file Generated",
    "6- Response file Sent , ACK Received",
    "7- Batch Closed"
  ]

  const batchData = [
    {
      batchId: 'AV-425031-THC',
      time: '11:09:30:33',
      volumeDate: '2021-12-13',
      totalRecords: 20000,
      successfulRecords: 19500,
      exceptionRecords: 500,
      failureRecords: 0,
      batchStatus: 'Batch Status Processed',
      reasonForDispatch: 0,
    },
    {
      batchId: 'AV-425-TXRC',
      time: '11:06:40:01',
      volumeDate: '2021-12-13',
      totalRecords: 50000,
      successfulRecords: 50000,
      exceptionRecords: 0,
      failureRecords: 0,
      batchStatus: 'Processed File',
      reasonForDispatch: 1,
    },
    {
      batchId: 'AV-425313-THC',
      time: '12:15:30:35',
      volumeDate: '2021-12-13',
      totalRecords: 10000,
      successfulRecords: 0,
      exceptionRecords: 0,
      failureRecords: 10000,
      batchStatus: 'Batch Droppd',
      reasonForDispatch: 0,
    },
  ];

return (
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold">Batch Status</h1>
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="bg-gray-100 text-lg font-semibold">AV Batch Status</h2>
          <div className="flex flex-col items-center space-y-2">
            <div className='grid grid-cols-5 gap-10 my-1'>
                <label className="block font-semibold">Inward Date<span className='text-red-500'>*</span></label>
                <input type='date' className='border border-gray-300 rounded-md py-1 px-2 mr-2' value={batchId} onChange={(e) => setBatchId(e.target.value)}/>
                <button className="bg-blue-500 text-white rounded-md">Retrieve</button>
            </div>
            <div>
                <div className='grid grid-cols-2 gap-5'>
                    <label htmlFor="batchid" className="block font-semibold">Batch ID:</label>
                    <select
                    className="border border-gray-300 rounded-md py-1 px-3 mr-2"
                    name="batchid"
                    id="batchid"
                  >
                   <option value="">Select Batch ID</option>
                   {batchiddrop.map((batch, index) => (
                     <option key={index} value={batch}>
                       {batch}
                     </option>
                   ))}
                   </select>
                </div>

                <div className='grid grid-cols-2 gap-5 mt-1'>
                    <label htmlFor="batchstatus" className="block font-semibold">Batch Status:</label>
                    <select
                    className="border border-gray-300 rounded-md py-1 px-3 mr-2"
                    name="batchstatus"
                    id="batchstatus"
                  >
                    <option value="">Select Batch Status</option>
                   {batchstatusdrop.map((batch, index) => (
                     <option key={index} value={batch}>
                       {batch}
                     </option>
                   ))}
                  </select>
                </div>
            </div>
            <div className='h-1 w-4/5 bg-black'>.</div>
            <div className='grid grid-cols-2 gap-10'>
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md" onClick={handleSubmit}>Submit</button>
                <button className="bg-red-500 text-white px-4 py-1 rounded-md" onClick={handleReset}>Reset</button>
            </div>
        </div>
        {showTable && (
           <div className="overflow-x-auto mt-2">
             <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-2 py-1">Batch Id</th>
                  <th className="px-2 py-1">Time</th>
                  <th className="px-2 py-1">Validation Date</th>
                  <th className="px-2 py-1">Total Records</th>
                  <th className="px-2 py-1">Successful Records</th>
                  <th className="px-2 py-1">Exception Records</th>
                  <th className="px-2 py-1">Failure Records</th>
                  <th className="px-2 py-1">Batch Status</th>
                  <th className="px-2 py-1">Return File Generate</th>
                </tr>
              </thead>
              <tbody>
                {batchData.map((batch) => (
                  <tr key={batch.batchId}>
                    <td className="border px-2 py-1">{batch.batchId}</td>
                    <td className="border px-2 py-1">{batch.time}</td>
                    <td className="border px-2 py-1">{batch.volumeDate}</td>
                    <td className="border px-2 py-1">{batch.totalRecords}</td>
                    <td className="border px-2 py-1">{batch.successfulRecords}</td>
                    <td className="border px-2 py-1">{batch.exceptionRecords}</td>
                    <td className="border px-2 py-1">{batch.failureRecords}</td>
                    <td className="border px-2 py-1">{batch.batchStatus}</td>
                    <td className="border px-2 py-1">{batch.reasonForDispatch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BatchStatus;