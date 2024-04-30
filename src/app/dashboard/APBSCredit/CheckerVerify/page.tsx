"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

  const exceptionReasonDropdownOptions = [
    "52-  Account has Restriction",
    "56-  Misc-First Transaction to be Base Branch",
    "57-  Misc-First Transaction to be Base Branch",
    "01-  Sub Member",
    "02-  Name Mismatch",
    "03-  Restricted Product Type",
    "04-  Transaction Limit Exceeded"
  ];

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
  apbItemSeqNo: string;
  accountNo: string;
  beneficiaryName: string;
  accountHolderName: string;
  amount: string;
  txnStatus: string;
  exceptionReason: string;
  userName: string;
}

const CheckerVerify = () => {
  const router = useRouter();
  const [inwardDate, setInwardDate] = useState('');
  const [selectedFileName, setSelectedFileName] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [batchData, setBatchData] = useState<BatchData[]>([]);
  const [recordData, setRecordData] = useState<RecordData[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [selectedTxnStatus, setSelectedTxnStatus] = useState('');

  const handleRetrieve = async () => {
    try {
      const response = await axios.get<BatchData[]>(`${process.env.NEXT_PUBLIC_URL_APBS_CREDIT_REPORTS}${inwardDate}`);
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
            `${process.env.NEXT_PUBLIC_URL_ABPS_CHECKER_CANCEL_RECORDS}${batchId}`
          );
          let filteredRecordData = response.data;

          if (selectedTxnStatus) {
            const txnStatus = selectedTxnStatus.split('-')[1].trim();
            filteredRecordData = response.data.filter(record => record.txnStatus === txnStatus);
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
    setSelectedTxnStatus('');
    setShowTable(false);
    setBatchData([]);
    setRecordData([]);
    setFileNames([]);
  };

  const handleNavigate = () => {
    router.push("/dashboard/APBSCredit/MakerModify/Action");
  }

  const handleTxnStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTxnStatus(e.target.value);
  };

  return (
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold">Checker Verify</h1>
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="bg-gray-100 text-lg font-semibold">APBS Checker Verify</h2>
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
               <label htmlFor="batchstatus" className="block font-semibold">Exception Reason:</label>
               <select
                className="border border-gray-300 rounded-md py-1 px-3 mr-2"
                name="batchstatus"
                id="batchstatus"
                onChange={handleTxnStatusChange}
                value={selectedTxnStatus}
              >
                <option value="">Select Exception Reason</option>
                {exceptionReasonDropdownOptions.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
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
          <div className="overflow-y-auto max-h-[14rem] overflow-x-auto max-w-[65rem] mt-2">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className='px-2 py-1 text-sm'>APBS Item Seq No.</th>
                  <th className="px-2 py-1 text-sm">Account Number</th>
                  <th className="px-2 py-1 text-sm">Beneficiary Name</th>
                  <th className="px-2 py-1 text-sm">A/c Holder Name</th>
                  <th className="px-2 py-1 text-sm">Amount</th>
                  <th className="px-2 py-1 text-sm">Txn Status</th>
                  <th className="px-2 py-1 text-sm">Exception Reason</th>
                  <th className="px-2 py-1 text-sm">Username</th>
                </tr>
              </thead>
              <tbody>
                {recordData.map((record, index) => (
                  <tr key={index}>
                    <td className="border px-2 text-sm text-blue-800 underline" onClick={handleNavigate}>{record.apbItemSeqNo}</td>
                    <td className="border px-2 text-sm">{record.accountNo}</td>
                    <td className="border px-2 text-sm">{record.beneficiaryName}</td>
                    <td className="border px-2 text-sm">{record.accountHolderName}</td>
                    <td className="border px-2 text-sm">{record.amount}</td>
                    <td className="border px-2 text-sm">{record.txnStatus}</td>
                    <td className="border px-2 text-sm">{record.exceptionReason}</td>
                    <td className="border px-2 text-sm">{record.userName}</td>
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