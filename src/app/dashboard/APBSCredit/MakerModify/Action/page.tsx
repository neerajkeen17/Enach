// import React from 'react'

// const reasonCodeDropdownOptions = [
//   "A/c Blocked or Frozen",
//   "A/c in Zero Balance/No Transactions have Happened, first Transaction in Cash or Self Cheque",
//   "Account  inoperative",
//   "Account Closed",
//   "Account   Description Does not Tally",
//   "Account Holder Expired",
//   "Account Holder Name Invalid",
//   "Account reached maximum Credit limit set on account by Bank",
//   "Account   Under Litigation",
//   "Amount   Exceeds limit set on Account by Bank for Credit per Transaction",
//   "Customer Insolvent / Insane",
//   "Documents Pending for Account Holder turning Major",
//   "Dormant account",
//   "Invalid Account Type (NRE/PPF/CC/Loan/FD)",
//   "KYC Documents Pending",
//   "Miscellaneous   - Others",
//   "Network Failure (CBS)",
//   "No Such   Account",
//   "Small Account, First Transaction to be from Base Branch",
//   "Unclaimed/DEAF accounts"
// ];

// const Action = () => {
//   return (
//     <div className='p-2 bg-white'>
//       <h1 className='text-xl font-semibold'>APBS Individual Transaction Status</h1>
//       <div className='shadow-md p-2 rounded-md space-y-5'>

//       <div className='space-y-4'>
//         <h2 className='border border-gray-300 bg-stone-400 font-bold'>APBS Beneficiary Details</h2>

//         <div className='grid grid-cols-2 gap-16'>
//           <div>
//             <div className='grid grid-cols-2 gap-4' >
//               <span className="text-sm">Batch Id :</span>
//               <span className="text-sm">APB-CR-FINO-06092023-TPZAPB030809-P2C1-INW.txt</span>
//             </div>
//             <div className='grid grid-cols-2 gap-4'>
//               <span className="text-sm">Account Holder Name :</span>
//               <span className="text-sm">Manohar Lal</span>
//             </div>
//             <div className='grid grid-cols-2 gap-4' >
//               <span className="text-sm">Beneficiary Name :</span>
//               <span className="text-sm">Manohar Lal</span>
//             </div>
//           </div>
        
//           <div>
//             <div className='grid grid-cols-2 gap-4'>
//               <span className="text-sm">APBS Item Seq No. :</span>
//               <span className="text-sm">6461594668</span>
//             </div>
//             <div className='grid grid-cols-2 gap-4'>
//               <span className="text-sm">Settlement Date :</span>
//               <span className="text-sm">2023-12-13</span>
//             </div>
//             <div className='grid grid-cols-2 gap-4'>
//               <span className="text-sm">Product Type :</span>
//               <span className="text-sm">10</span>
//             </div>
//           </div>
//         </div>
//       </div>


//       <div className='space-y-4'>
//         <h2 className='border border-gray-300 bg-stone-400 font-bold'>APBS Transaction Details</h2>
//         <div className='grid grid-cols-2 gap-16'>
//           <div>
//             <div className='grid grid-cols-2 gap-4'>
//               <span className="text-sm">Batch Id :</span>
//               <span className="text-sm">APB-CR-FINO-06092023-TPZAPB030809-P2C1-INW.txt</span>
//             </div>
//             <div className='grid grid-cols-2 gap-4'>
//               <span className="text-sm">Account Holder Name :</span>
//               <span className="text-sm">Manohar Lal</span>
//             </div>
//             <div className='grid grid-cols-2 gap-4'>
//               <span className="text-sm">Beneficiary Name :</span>
//               <span className="text-sm">Manohar Lal</span>
//             </div>
//             <div className='grid grid-cols-2 gap-4'>
//               <span className="text-sm">Exception Reason :</span>
//               <span className="text-sm">Name Mismatch !!</span>
//             </div>
//           </div>
        
//           <div>
//             <div className='grid grid-cols-2 gap-4'>
//               <span className="text-sm">APBS Item Seq No. :</span>
//               <span className="text-sm">6461594668</span>
//             </div>
//             <div className='grid grid-cols-2 gap-4'>
//               <span className="text-sm">Account Number :</span>
//               <span className="text-sm">20118550981</span>
//             </div>
//             <div className='grid grid-cols-2 gap-4'>
//               <span className="text-sm">Amount :</span>
//               <span className="text-sm">9990.00</span>
//             </div>
//             <div className='grid grid-cols-2 gap-4'>
//               <span className="text-sm">Username :</span>
//               <span className="text-sm">7674434-ROGI KALYAN</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='flex flex-col items-center space-y-4'>
//         <div className='flex items-center mb-4 space-x-8'>
//           <div>
//           <label htmlFor="status" className='mr-2'>Approved:</label>
//           <input type="checkbox" id="status" name="status" value="status" className='mr-4' />
//           </div>
//           <div>
//           <label htmlFor="reasoncode" className="mr-2">Reason Code :</label>
//           <select
//             className="border border-gray-300 rounded-md py-1 px-3 mr-2"
//             name="reasoncode"
//             id="reasoncode"
//             // onChange={handleTxnStatusChange}
//             // value={selectedTxnStatus}
//           >
//             <option value="">Select Reason Code</option>
//             {reasonCodeDropdownOptions.map((code, index) => (
//               <option key={index} value={code}>
//                 {code}
//               </option>
//             ))}
//           </select>
//           </div>
//         </div>
//         <div className='flex justify-center space-x-10'>
//           <button className='p-1 px-4 bg-slate-300 rounded-xl mr-2'>Submit</button>
//           <button className='p-1 px-4 bg-slate-300 rounded-xl'>Cancel</button>
//         </div>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Action;











// Action.tsx
"use client";


import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const reasonCodeDropdownOptions = [
  "A/c Blocked or Frozen",
  "A/c in Zero Balance/No Transactions have Happened, first Transaction in Cash or Self Cheque",
  "Account  inoperative",
  "Account Closed",
  "Account   Description Does not Tally",
  "Account Holder Expired",
  "Account Holder Name Invalid",
  "Account reached maximum Credit limit set on account by Bank",
  "Account   Under Litigation",
  "Amount   Exceeds limit set on Account by Bank for Credit per Transaction",
  "Customer Insolvent / Insane",
  "Documents Pending for Account Holder turning Major",
  "Dormant account",
  "Invalid Account Type (NRE/PPF/CC/Loan/FD)",
  "KYC Documents Pending",
  "Miscellaneous   - Others",
  "Network Failure (CBS)",
  "No Such   Account",
  "Small Account, First Transaction to be from Base Branch",
  "Unclaimed/DEAF accounts"
];

const Action: React.FC = () => {
  const apbsData = useSelector((state: RootState) => state.makerModify.apbsData);
  const inwardDate = useSelector((state: RootState) => state.makerModify.inwarddate);
  const selectedFileName = useSelector((state: RootState) => state.makerModify.selectedFileName);

  return (
    <div className='p-2 bg-white'>
      <h1 className='text-xl font-semibold'>APBS Individual Transaction Status</h1>
      <div className='shadow-md p-2 rounded-md space-y-5'>
        <div className='space-y-4'>
          <h2 className='border border-gray-300 bg-stone-400 font-bold'>APBS Beneficiary Details</h2>
          <div className='grid grid-cols-2 gap-16'>
            <div>
              <div className='grid grid-cols-2 gap-4'>
                <span className="text-sm">Batch Id :</span>
                <span className="text-sm">{selectedFileName}</span>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <span className="text-sm">Account Holder Name :</span>
                <span className="text-sm">{apbsData?.accountHolderName}</span>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <span className="text-sm">Beneficiary Name :</span>
                <span className="text-sm">{apbsData?.beneficiaryName}</span>
              </div>
            </div>
            <div>
              <div className='grid grid-cols-2 gap-4'>
                <span className="text-sm">APBS Item Seq No. :</span>
                <span className="text-sm">{apbsData?.apbItemSeqNo}</span>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <span className="text-sm">Settlement Date :</span>
                <span className="text-sm">{inwardDate}</span>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <span className="text-sm">Product Type :</span>
                <span className="text-sm">{apbsData?.productType}</span>
              </div>
            </div>
          </div>
        </div>

        <div className='space-y-4'>
          <h2 className='border border-gray-300 bg-stone-400 font-bold'>APBS Transaction Details</h2>
          <div className='grid grid-cols-2 gap-16'>
            <div>
              <div className='grid grid-cols-2 gap-4'>
                <span className="text-sm">Batch Id :</span>
                <span className="text-sm">{selectedFileName}</span>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <span className="text-sm">Account Holder Name :</span>
                <span className="text-sm">{apbsData?.accountHolderName}</span>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <span className="text-sm">Beneficiary Name :</span>
                <span className="text-sm">{apbsData?.beneficiaryName}</span>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <span className="text-sm">Exception Reason :</span>
                <span className="text-sm">{apbsData?.exceptionReason}</span>
              </div>
            </div>
            <div>
              <div className='grid grid-cols-2 gap-4'>
                <span className="text-sm">APBS Item Seq No. :</span>
                <span className="text-sm">{apbsData?.apbItemSeqNo}</span>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <span className="text-sm">Account Number :</span>
                <span className="text-sm">{apbsData?.accountNo}</span>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <span className="text-sm">Amount :</span>
                <span className="text-sm">{apbsData?.amount}</span>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <span className="text-sm">Username :</span>
                <span className="text-sm">{apbsData?.userName}</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center space-y-4'>
          <div className='flex items-center mb-4 space-x-8'>
            <div>
              <label htmlFor="status" className='mr-2'>Approved:</label>
              <input type="checkbox" id="status" name="status" value="status" className='mr-4' />
            </div>
            <div>
              <label htmlFor="reasoncode" className="mr-2">Reason Code :</label>
              <select
                className="border border-gray-300 rounded-md py-1 px-3 mr-2"
                name="reasoncode"
                id="reasoncode"
              >
                <option value="">Select Reason Code</option>
                {reasonCodeDropdownOptions.map((code, index) => (
                  <option key={index} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='flex justify-center space-x-10'>
            <button className='p-1 px-4 bg-slate-300 rounded-xl mr-2'>Submit</button>
            <button className='p-1 px-4 bg-slate-300 rounded-xl'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;