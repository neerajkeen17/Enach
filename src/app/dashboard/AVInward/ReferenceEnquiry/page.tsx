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
  originalFileName: string;
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
  const [selectedFileName, setSelectedFileName] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [batchData, setBatchData] = useState<BatchData[]>([]);
  const [recordData, setRecordData] = useState<RecordData[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [batchStatus, setBatchStatus] = useState('');

  const handleRetrieve = async () => {
    try {
      const response = await axios.get<BatchData[]>(`http://localhost:8081/api/v1/reports/batchs?inwardDate=${inwardDate}`);
      setBatchData(response.data);
      const distinctFileNames = response.data.map(batch => batch.originalFileName);
      setFileNames(Array.from(new Set(distinctFileNames)));
    } catch (error) {
      console.error('Error fetching batch data:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowTable(true);

    if (selectedFileName) {
      try {
        const batchId = batchData.find(batch => batch.originalFileName === selectedFileName)?.batchId;
        if (batchId) {
          const response = await axios.get<RecordData[]>(
            `http://localhost:8081/api/v1/reports/records?batchId=${batchId}`
          );
          let filteredRecordData = response.data;

          if (batchStatus === '1- Success') {
            filteredRecordData = response.data.filter(record => record.refStatus === '0');
          } else if (batchStatus === '2- Failure') {
            filteredRecordData = response.data.filter(record => record.refStatus !== '0');
          }

          setRecordData(filteredRecordData);
        } else {
          console.error('Batch ID not found for the selected file name.');
        }
      } catch (error) {
        console.error('Error fetching record data:', error);
      }
    }
  };

  const handleReset = () => {
    setInwardDate('');
    setSelectedFileName('');
    setBatchStatus('');
    setShowTable(false);
    setBatchData([]);
    setRecordData([]);
    setFileNames([]);
  };


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
            <button className="bg-blue-500 text-white rounded-md" onClick={handleRetrieve}>
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
                value={selectedFileName}
                onChange={(e) => setSelectedFileName(e.target.value)}
              >
                <option value="">Select Batch ID</option>
                {fileNames.map((fileName, index) => (
                  <option key={index} value={fileName}>
                    {fileName}
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
                <option value="">Select Reference Status</option>
                <option value="1- Success">1- Success</option>
                <option value="2- Failure">2- Failure</option>
              </select>
            </div>
          </div>

          <div className='h-1 w-4/5 bg-black'></div>
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