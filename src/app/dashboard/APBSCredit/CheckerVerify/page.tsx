"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface BatchData {
  batchId: string;
  time: string;
  validationDate: string;
  totalRecord: number;
  successFullRecord: number;
  failedRecords: number;
  batchStatus: number;
  rejectionReason: string;
  responseFileGenerate: number;
}

const CheckerVerify = () => {
  const [inwardDate, setInwardDate] = useState('');
  const [batchData, setBatchData] = useState<BatchData[]>([]);
  const [batchIds, setBatchIds] = useState<string[]>([]);
  const [showTable, setShowTable] = useState(false);
  const [filterRejected, setFilterRejected] = useState(false);

  useEffect(() => {
    if (inwardDate) {
      fetchBatchData();
      fetchBatchIds();
    }
  }, [inwardDate]);

  const batchstatusdrop = [
    "1- Batch Under Process",
    "2- Batch Rejected",
    "3- Batch Updated",
    "4- Response file Under Process",
    "5- Response file Generated",
    "6- Response file Sent , ACK Received",
    "7- Batch Closed"
  ];

  const fetchBatchData = async () => {
    try {
      const response = await axios.get<BatchData[]>(`http://localhost:8085/api/v1/reports/batchs?inwardDate=${inwardDate}`);
      setBatchData(response.data);
      setShowTable(true);
    } catch (error) {
      console.error('Error fetching batch data:', error);
    }
  };

  const fetchBatchIds = async () => {
    try {
      const response = await axios.get<string[]>('http://localhost:8085/api/v1/reports/batchIds');
      setBatchIds(response.data);
    } catch (error) {
      console.error('Error fetching batch IDs:', error);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInwardDate(e.target.value);
  };

  const handleReset = () => {
    setInwardDate('');
    setBatchData([]);
    setShowTable(false);
    setFilterRejected(false);
  };

  const handleBatchStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = e.target.value;
    setFilterRejected(selectedStatus === "2- Batch Rejected");
  };

  const filteredData = filterRejected
    ? batchData.filter((batch) => batch.batchStatus === 2)
    : batchData;

    

  return (
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold">Checker Verify</h1>
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="bg-gray-100 text-lg font-semibold">APBS Checker Verify</h2>
        <div className="flex flex-col items-center space-y-2">
          <div className="grid grid-cols-5 gap-10 my-1">
            <label className="block font-semibold">Inward Date<span className="text-red-500">*</span></label>
            <input type="date" className="border border-gray-300 rounded-md py-1 px-2 mr-2" value={inwardDate} onChange={handleDateChange} />
            <button className="bg-blue-500 text-white rounded-md" onClick={fetchBatchData}>Retrieve</button>
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
                {batchIds.map((batchId, index) => (
                  <option key={index} value={batchId}>
                    {batchId}
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
              >
                <option value="">Select Batch Status</option>
                {batchstatusdrop.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="h-1 w-4/5 bg-black"></div>
          <div className="grid grid-cols-2 gap-10">
            <button className="bg-blue-500 text-white px-4 py-1 rounded-md" onClick={fetchBatchData}>Submit</button>
            <button className="bg-red-500 text-white px-4 py-1 rounded-md" onClick={handleReset}>Reset</button>
          </div>
        </div>
        {showTable && (
          <div className="overflow-x-auto mt-2">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-2 py-1 text-sm">Batch Id</th>
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

export default CheckerVerify;