// "use client"

// import React, { useState } from 'react';
// import axios from 'axios';

// interface BatchData {
//   batchId: string;
//   time: string;
//   validationDate: string;
//   totalRecord: number;
//   successFullRecord: number;
//   failedRecords: number;
//   batchStatus: number;
//   rejectionReason: string;
//   responseFileGenerate: number;
//   originalFileName: string;
// }

// const BatchStatus = () => {
//   const [inwardDate, setInwardDate] = useState('');
//   const [batchData, setBatchData] = useState<BatchData[]>([]);
//   const [distinctFileNames, setDistinctFileNames] = useState<string[]>([]);
//   const [showTable, setShowTable] = useState(false);
//   const [filterRejected, setFilterRejected] = useState(false);
//   const [selectedFileName, setSelectedFileName] = useState('');


//   const batchstatusdrop = [
//     "1- Batch Under Process",
//     "2- Batch Rejected",
//     "3- Batch Updated",
//     "4- Response file Under Process",
//     "5- Response file Generated",
//     "6- Response file Sent , ACK Received",
//     "7- Batch Closed"
//   ];

//   const handleSubmit = () => {
//     // Your submit logic
//   }

//   const handleReset = () => {
//     setInwardDate('');
//     setBatchData([]);
//     setShowTable(false);
//     setFilterRejected(false);
//     setSelectedFileName('');
//     setDistinctFileNames([]); // Reset distinct file names
//   };
  
//   const handleRetrive = async () => {
//     try {
//       const response = await axios.get<BatchData[]>(`http://localhost:8081/api/v1/reports/batchs?inwardDate=${inwardDate}`);
//       setBatchData(response.data);
//       const distinctFileNames = Array.from(new Set(response.data.map(batch => batch.originalFileName)));
//       setDistinctFileNames(distinctFileNames);
//       setShowTable(true);
//     } catch (error) {
//       console.error('Error fetching batch data:', error);
//     }
//   };

//   const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInwardDate(e.target.value);
//   };

//   const handleFileNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedFileName(e.target.value);
//   };


//   const handleBatchStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedStatus = e.target.value;
//     setFilterRejected(selectedStatus === "2- Batch Rejected");
//   };

//   const filteredData = filterRejected
//     ? batchData.filter((batch) => batch.batchStatus === 2)
//     : batchData.filter((batch) => batch.originalFileName.includes(selectedFileName));


    
//   return (
//     <div className="container mx-auto p-4 bg-white">
//       <h1 className="text-2xl font-bold">Batch Status</h1>
//       <div className="bg-white shadow-md rounded-md p-4">
//         <h2 className="bg-gray-100 text-lg font-semibold">AV Batch Status</h2>
//         <div className="flex flex-col items-center space-y-2">
//           <div className="grid grid-cols-5 gap-10 my-1">
//             <label className="block font-semibold">Inward Date<span className="text-red-500">*</span></label>
//             <input type="date" className="border border-gray-300 rounded-md py-1 px-2 mr-2" value={inwardDate} onChange={handleDateChange} />
//             <button className="bg-blue-500 text-white rounded-md" onClick={handleRetrive}>Retrieve</button>
//           </div>
//           <div>
//               <div className='grid grid-cols-2 gap-5'>
//                 <label htmlFor="batchid" className="block font-semibold">Batch ID:</label>
//                 <select
//                   className="border border-gray-300 rounded-md py-1 px-3 mr-2"
//                   name="batchname"
//                   id="batchname"
//                   onChange={handleFileNameChange}
//                   value={selectedFileName}
//                 >
//                   <option value="">Select Batch ID</option>
//                   {distinctFileNames.map((fileName, index) => (
//                     <option key={index} value={fileName}>
//                       {fileName}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//             <div className='grid grid-cols-2 gap-5 mt-1'>
//               <label htmlFor="batchstatus" className="block font-semibold">Batch Status:</label>
//               <select
//                 className="border border-gray-300 rounded-md py-1 px-3 mr-2"
//                 name="batchstatus"
//                 id="batchstatus"
//                 onChange={handleBatchStatusChange}
//               >
//                 <option value="">Select Batch Status</option>
//                 {batchstatusdrop.map((status, index) => (
//                   <option key={index} value={status}>
//                     {status}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <div className="h-1 w-4/5 bg-black"></div>
//           <div className="grid grid-cols-2 gap-10">
//             <button className="bg-blue-500 text-white px-4 py-1 rounded-md" onClick={handleSubmit}>Submit</button>
//             <button className="bg-red-500 text-white px-4 py-1 rounded-md" onClick={handleReset}>Reset</button>
//           </div>
//         </div>
//         {showTable && (
//           <div className="overflow-y-auto max-h-[14rem] mt-2">
//             <table className="w-full table-auto">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-2 py-1 text-sm">Batch Id</th>
//                   <th className='px-2 py-1 text-sm'>File Name</th>
//                   <th className="px-2 py-1 text-sm">Time</th>
//                   <th className="px-2 py-1 text-sm">Validation Date</th>
//                   <th className="px-2 py-1 text-sm">Total Records</th>
//                   <th className="px-2 py-1 text-sm">Successful Records</th>
//                   <th className="px-2 py-1 text-sm">Failure Records</th>
//                   <th className="px-2 py-1 text-sm">Batch Status</th>
//                   <th className="px-2 py-1 text-sm">Rejection Reason</th>
//                   <th className="px-2 py-1 text-sm">Return File Generate</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredData.map((batch) => (
//                   <tr key={batch.batchId}>
//                     <td className="border px-2 text-sm">{batch.batchId}</td>
//                     <td className='border px-2 text-sm'>{batch.originalFileName}</td>
//                     <td className="border px-2 text-sm">{batch.time}</td>
//                     <td className="border px-2 text-sm">{batch.validationDate}</td>
//                     <td className="border px-2 text-sm">{batch.totalRecord}</td>
//                     <td className="border px-2 text-sm">{batch.successFullRecord}</td>
//                     <td className="border px-2 text-sm">{batch.failedRecords}</td>
//                     <td className="border px-2 text-sm">{batch.batchStatus}</td>
//                     <td className="border px-2 text-sm">{batch.rejectionReason}</td>
//                     <td className="border px-2 text-sm">{batch.responseFileGenerate}</td>
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

// export default BatchStatus;





























"use client"

import React, { useState } from 'react';
import axios from 'axios';

interface BatchData {
  batchId: string;
  time: string;
  validationDate: string;
  totalRecord: number;
  successFullRecord: number;
  failedRecords: number;
  batchStatus: string;
  rejectionReason: string;
  responseFileGenerate: number;
  originalFileName: string;
}

const BatchStatus = () => {
  const [inwardDate, setInwardDate] = useState('');
  const [batchData, setBatchData] = useState<BatchData[]>([]);
  const [distinctFileNames, setDistinctFileNames] = useState<string[]>([]);
  const [showTable, setShowTable] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedBatchStatus, setSelectedBatchStatus] = useState('');

  const batchStatusDropdownOptions = [
    "1- Batch Under Process",
    "2- Batch Rejected",
    "3- Batch Updated",
    "4- Response file Under Process",
    "5- Response file Generated",
    "6- Response file Sent , ACK Received",
    "7- Batch Closed"
  ];

  const handleSubmit = () => {
    // Your submit logic
  }

  const handleReset = () => {
    setInwardDate('');
    setBatchData([]);
    setShowTable(false);
    setSelectedFileName('');
    setDistinctFileNames([]); // Reset distinct file names
    setSelectedBatchStatus('');
  };

  const handleRetrive = async () => {
    try {
      const response = await axios.get<BatchData[]>(`http://localhost:8081/api/v1/reports/batchs?inwardDate=${inwardDate}`);
      // const response = await axios.get<BatchData[]>(process.env.URL_AV_REPORTS);

      setBatchData(response.data);
      const distinctFileNames = Array.from(new Set(response.data.map(batch => batch.originalFileName)));
      setDistinctFileNames(distinctFileNames);
      setShowTable(true);
    } catch (error) {
      console.error('Error fetching batch data:', error);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInwardDate(e.target.value);
  };

  const handleFileNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFileName(e.target.value);
  };

  const handleBatchStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBatchStatus(e.target.value);
  };

  const filteredData = selectedBatchStatus
    ? batchData.filter((batch) => {
        switch (selectedBatchStatus) {
          case "1- Batch Under Process":
            return batch.batchStatus === "verified";
          case "2- Batch Rejected":
            return batch.batchStatus === "rejected";
          case "3- Batch Updated":
            return batch.batchStatus === "updated";
          case "4- Response file Under Process":
            return batch.batchStatus === "file under process";
          case "5- Response file Generated":
            return batch.batchStatus === "file generated";
          case "6- Response file Sent , ACK Received":
            return batch.batchStatus === "ACK Response Awaited";
          case "7- Batch Closed":
            return batch.batchStatus === "batch closed";
          default:
            return false;
        }
      })
    : batchData.filter((batch) => batch.originalFileName.includes(selectedFileName));

  return (
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold">Batch Status</h1>
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="bg-gray-100 text-lg font-semibold">AV Batch Status</h2>
        <div className="flex flex-col items-center space-y-2">
          <div className="grid grid-cols-5 gap-10 my-1">
            <label className="block font-semibold">Inward Date<span className="text-red-500">*</span></label>
            <input type="date" className="border border-gray-300 rounded-md py-1 px-2 mr-2" value={inwardDate} onChange={handleDateChange} />
            <button className="bg-blue-500 text-white rounded-md" onClick={handleRetrive}>Retrieve</button>
          </div>
          <div>
            <div className='grid grid-cols-2 gap-5'>
              <label htmlFor="batchid" className="block font-semibold">Batch ID:</label>
              <select
                className="border border-gray-300 rounded-md py-1 px-3 mr-2"
                name="batchname"
                id="batchname"
                onChange={handleFileNameChange}
                value={selectedFileName}
              >
                <option value="">Select Batch ID</option>
                {distinctFileNames.map((fileName, index) => (
                  <option key={index} value={fileName}>
                    {fileName}
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
                onChange={handleBatchStatusChange}
                value={selectedBatchStatus}
              >
                <option value="">Select Batch Status</option>
                {batchStatusDropdownOptions.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="h-1 w-4/5 bg-black"></div>
          <div className="grid grid-cols-2 gap-10">
            <button className="bg-blue-500 text-white px-4 py-1 rounded-md" onClick={handleSubmit}>Submit</button>
            <button className="bg-red-500 text-white px-4 py-1 rounded-md" onClick={handleReset}>Reset</button>
          </div>
        </div>
        {showTable && (
          <div className="overflow-y-auto max-h-[14rem] mt-2">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-2 py-1 text-sm">Batch Id</th>
                  <th className='px-2 py-1 text-sm'>File Name</th>
                  <th className="px-2 py-1 text-sm">Time</th>
                  <th className="px-2 py-1 text-sm">Validation Date</th>
                  <th className="px-2 py-1 text-sm">Total Records</th>
                  <th className="px-2 py-1 text-sm">Successful Records</th>
                  <th className="px-2 py-1 text-sm">Failure Records</th>
                  <th className="px-2 py-1 text-sm">Batch Status</th>
                  <th className="px-2 py-1 text-sm">Rejection Reason</th>
                  <th className="px-2 py-1 text-sm">Return File Generate</th>
                </tr>
              </thead>
              
              <tbody>
                {filteredData.map((batch) => (
                  <tr key={batch.batchId}>
                    <td className="border px-2 text-sm">{batch.batchId}</td>
                    <td className='border px-2 text-sm'>{batch.originalFileName}</td>
                    <td className="border px-2 text-sm">{batch.time}</td>
                    <td className="border px-2 text-sm">{batch.validationDate}</td>
                    <td className="border px-2 text-sm">{batch.totalRecord}</td>
                    <td className="border px-2 text-sm">{batch.successFullRecord}</td>
                    <td className="border px-2 text-sm">{batch.failedRecords}</td>
                    <td className="border px-2 text-sm">{batch.batchStatus}</td>
                    <td className="border px-2 text-sm">{batch.rejectionReason}</td>
                    <td className="border px-2 text-sm">{batch.responseFileGenerate}</td>
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