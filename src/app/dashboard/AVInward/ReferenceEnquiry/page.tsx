// "use client"

// import React, { useState } from 'react';

// const ReferenceEnquiry = () => {
//   const [batchId, setBatchId] = useState('');
//   const [batchStatus, setBatchStatus] = useState('');
//   const [showTable, setShowTable] = useState(false);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setShowTable(true);
// //   };

// const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     setShowTable(true);
//   };
  

//   const handleReset = () => {
//     setBatchId('');
//     setBatchStatus('');
//     setShowTable(false);
//   };
  
//   const batchiddrop = [
//     "AV-LICI-LICH2 HUSER1-25102023-819558032-INP",
//     "AV-LICI-LICH2 HUSER1-25102023-819558032-INP",
//     "AV-LICI-LICH2 HUSER1-25102023-819558032-INP",
//     "AV-LICI-LICH2 HUSER1-25102023-819558032-INP"
//   ]

//   const referencestatusdrop = [
//     "1- Success ",
//     "2- Failure "
//   ]

//   const batchData = [
//     {
//       batchId: 'AV-425031-THC',
//       time: '11:09:30:33',
//       volumeDate: '2021-12-13',
//       totalRecords: 20000,
//       successfulRecords: 19500,
//       exceptionRecords: 500,
//       failureRecords: 0,
//       batchStatus: 'Batch Status Processed',
//       reasonForDispatch: 0,
//     },
//     {
//       batchId: 'AV-425-TXRC',
//       time: '11:06:40:01',
//       volumeDate: '2021-12-13',
//       totalRecords: 50000,
//       successfulRecords: 50000,
//       exceptionRecords: 0,
//       failureRecords: 0,
//       batchStatus: 'Processed File',
//       reasonForDispatch: 1,
//     },
//     {
//       batchId: 'AV-425313-THC',
//       time: '12:15:30:35',
//       volumeDate: '2021-12-13',
//       totalRecords: 10000,
//       successfulRecords: 0,
//       exceptionRecords: 0,
//       failureRecords: 10000,
//       batchStatus: 'Batch Droppd',
//       reasonForDispatch: 0,
//     },
//   ];

// return (
//     <div className="container mx-auto p-4 bg-white">
//       <h1 className="text-2xl font-bold">Reference Enquiry</h1>
//       <div className="bg-white shadow-md rounded-md p-4">
//         <h2 className="bg-gray-100 text-lg font-semibold">AV Reference Enquiry</h2>
//           <div className="flex flex-col items-center space-y-2">
//             <div className='grid grid-cols-5 gap-10 my-1'>
//                 <label className="block font-semibold">Inward Date<span className='text-red-500'>*</span></label>
//                 <input type='date' className='border border-gray-300 rounded-md py-1 px-2 mr-2' value={batchId} onChange={(e) => setBatchId(e.target.value)}/>
//                 <button className="bg-blue-500 text-white rounded-md">Retrieve</button>
//             </div>
//             <div>
//                 <div className='grid grid-cols-2 gap-5'>
//                     <label htmlFor="batchid" className="block font-semibold">Batch ID:</label>
//                     <select
//                     className="border border-gray-300 rounded-md py-1 px-3 mr-2"
//                     name="batchid"
//                     id="batchid"
//                   >
//                    <option value="">Select Batch ID</option>
//                    {batchiddrop.map((batch, index) => (
//                      <option key={index} value={batch}>
//                        {batch}
//                      </option>
//                    ))}
//                    </select>
//                 </div>

//                 <div className='grid grid-cols-2 gap-5 mt-1'>
//                     <label htmlFor="batchstatus" className="block font-semibold">Reference Status :</label>
//                     <select
//                     className="border border-gray-300 rounded-md py-1 px-3 mr-2"
//                     name="batchstatus"
//                     id="batchstatus"
//                   >
//                     <option value="">Select Batch Status</option>
//                    {referencestatusdrop.map((batch, index) => (
//                      <option key={index} value={batch}>
//                        {batch}
//                      </option>
//                    ))}
//                   </select>
//                 </div>
//             </div>
//             <div className='h-1 w-4/5 bg-black'>.</div>
//             <div className='grid grid-cols-2 gap-10'>
//                 <button className="bg-blue-500 text-white px-4 py-1 rounded-md" onClick={handleSubmit}>Submit</button>
//                 <button className="bg-red-500 text-white px-4 py-1 rounded-md" onClick={handleReset}>Reset</button>
//             </div>
//         </div>
//         {showTable && (
//            <div className="overflow-x-auto mt-2">
//              <table className="w-full table-auto">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-1">AV Reference Number</th>
//                   <th className="px-2 py-1">Account Number</th>
//                   <th className="px-2 py-1">A/c Holder Name (Sponsor Bank)</th>
//                   <th className="px-2 py-1">A/c Holder Name (Fino Bank)</th>
//                   <th className="px-2 py-1">Reference Status</th>
//                   <th className="px-2 py-1">Reason Code</th>
//                   <th className="px-2 py-1">Exception Reason</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {batchData.map((batch) => (
//                   <tr key={batch.batchId}>
//                     <td className="border px-2 py-1">{batch.batchId}</td>
//                     <td className="border px-2 py-1">{batch.time}</td>
//                     <td className="border px-2 py-1">{batch.volumeDate}</td>
//                     <td className="border px-2 py-1">{batch.totalRecords}</td>
//                     <td className="border px-2 py-1">{batch.successfulRecords}</td>
//                     <td className="border px-2 py-1">{batch.exceptionRecords}</td>
//                     <td className="border px-2 py-1">{batch.failureRecords}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReferenceEnquiry;






"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface BatchData {
  batchId: string;
  time: string;
  volumeDate: string;
  totalRecords: number;
  successfulRecords: number;
  exceptionRecords: number;
  failureRecords: number;
  batchStatus: string;
  reasonForDispatch: number;
}

interface RecordData {
  referenceNumber: string;
  accountNumber: string;
  accountHolderNameSponsor: string;
  accountHolderNameFino: string;
  refStatus: string;
  reasonCode: string;
  exceptionReason: string;
}

const ReferenceEnquiry = () => {
  const [inwardDate, setInwardDate] = useState('');
  const [batchId, setBatchId] = useState('');
  const [batchStatus, setBatchStatus] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [batchData, setBatchData] = useState<BatchData[]>([]);
  const [recordData, setRecordData] = useState<RecordData[]>([]);
  const [batchIdOptions, setBatchIdOptions] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowTable(true);

    if (batchId) {
      try {
        const response = await axios.get<RecordData[]>(
          `http://localhost:8085/api/v1/reports/records?batchId=${batchId}`
        );
        setRecordData(response.data);
      } catch (error) {
        console.error('Error fetching record data:', error);
      }
    }
  };

  const handleReset = () => {
    setInwardDate('');
    setBatchId('');
    setBatchStatus('');
    setShowTable(false);
    setBatchData([]);
    setRecordData([]);
    setBatchIdOptions([]);
  };

  useEffect(() => {
    const fetchBatchData = async () => {
      try {
        const response = await axios.get<BatchData[]>(
          `http://localhost:8085/api/v1/reports/batchs?inwardDate=${inwardDate}`
        );
        setBatchData(response.data);
        setBatchIdOptions(response.data.map((batch) => batch.batchId));
      } catch (error) {
        console.error('Error fetching batch data:', error);
      }
    };

    if (inwardDate) {
      fetchBatchData();
    } else {
      setBatchData([]);
      setBatchIdOptions([]);
    }
  }, [inwardDate]);

  return (
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold">Reference Enquiry</h1>
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="bg-gray-100 text-lg font-semibold">AV Reference Enquiry</h2>
        <div className="flex flex-col items-center space-y-2">
          <div className='grid grid-cols-5 gap-10 my-1'>
            <label className="block font-semibold">Inward Date<span className='text-red-500'>*</span></label>
            <input
              type='date'
              className='border border-gray-300 rounded-md py-1 px-2 mr-2'
              value={inwardDate}
              onChange={(e) => setInwardDate(e.target.value)}
            />
            <button className="bg-blue-500 text-white rounded-md" onClick={() => setBatchIdOptions([])}>
              Retrieve
            </button>
          </div>
          <div>
            <div className='grid grid-cols-2 gap-5'>
              <label htmlFor="batchid" className="block font-semibold">Batch ID:</label>
              <select
                className="border border-gray-300 rounded-md py-1 px-3 mr-2"
                name="batchid"
                id="batchid"
                value={batchId}
                onChange={(e) => setBatchId(e.target.value)}
              >
                <option value="">Select Batch ID</option>
                {batchIdOptions.map((batch, index) => (
                  <option key={index} value={batch}>
                    {batch}
                  </option>
                ))}
              </select>
            </div>

            <div className='grid grid-cols-2 gap-5 mt-1'>
              <label htmlFor="batchstatus" className="block font-semibold">Reference Status :</label>
              <select
                className="border border-gray -300 rounded-md py-1 px-3 mr-2"
                name="batchstatus"
                id="batchstatus"
                value={batchStatus}
                onChange={(e) => setBatchStatus(e.target.value)}
              >
                <option value="">Select Batch Status</option>
                <option value="1- Success">1- Success</option>
                <option value="2- Failure">2- Failure</option>
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
                  <th className="px-2 py-1">AV Reference Number</th>
                  <th className="px-2 py-1">Account Number</th>
                  <th className="px-2 py-1">A/c Holder Name (Sponsor Bank)</th>
                  <th className="px-2 py-1">A/c Holder Name (Fino Bank)</th>
                  <th className="px-2 py-1">Reference Status</th>
                  <th className="px-2 py-1">Reason Code</th>
                  <th className="px-2 py-1">Exception Reason</th>
                </tr>
              </thead>
              <tbody>
                {recordData.map((record, index) => (
                  <tr key={index}>
                    <td className="border px-2 py-1">{record.referenceNumber}</td>
                    <td className="border px-2 py-1">{record.accountNumber}</td>
                    <td className="border px-2 py-1">{record.accountHolderNameSponsor}</td>
                    <td className="border px-2 py-1">{record.accountHolderNameFino}</td>
                    <td className="border px-2 py-1">{record.refStatus}</td>
                    <td className="border px-2 py-1">{record.reasonCode}</td>
                    <td className="border px-2 py-1">{record.exceptionReason}</td>
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

export default ReferenceEnquiry;