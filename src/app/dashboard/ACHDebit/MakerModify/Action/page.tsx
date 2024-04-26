import React from 'react'

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

const Action = () => {
  return (
    <div className='p-2 bg-white'>
      <h1 className='text-xl font-semibold'>ACH Individual Transaction Status</h1>
      <div className='shadow-md p-2 rounded-md'>

      <div>
        <h2 className='border border-gray-300 bg-stone-400 font-bold'>ACH Beneficiary Details</h2>

        <div className='grid grid-cols-2 gap-16'>
          <div>
            <div className='grid grid-cols-2 gap-4' >
              <span className="text-sm">Batch Id :</span>
              <span className="text-sm">APB-CR-FINO-06092023-TPZAPB030809-P2C1-INW.txt</span>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <span className="text-sm">Account Holder Name :</span>
              <span className="text-sm">Manohar Lal</span>
            </div>
            <div className='grid grid-cols-2 gap-4' >
              <span className="text-sm">Beneficiary Name :</span>
              <span className="text-sm">Manohar Lal</span>
            </div>
          </div>
        
          <div>
            <div className='grid grid-cols-2 gap-4'>
              <span className="text-sm">APBS Item Seq No. :</span>
              <span className="text-sm">6461594668</span>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <span className="text-sm">Settlement Date :</span>
              <span className="text-sm">2023-12-13</span>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <span className="text-sm">Product Type :</span>
              <span className="text-sm">10</span>
            </div>
          </div>
        </div>
      </div>


      <div>
        <h2 className='border border-gray-300 bg-stone-400 font-bold'>ACH Transaction Details</h2>
        <div className='grid grid-cols-2 gap-16'>
          <div>
            <div className='grid grid-cols-2 gap-4'>
              <span className="text-sm">Batch Id :</span>
              <span className="text-sm">APB-CR-FINO-06092023-TPZAPB030809-P2C1-INW.txt</span>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <span className="text-sm">Account Holder Name :</span>
              <span className="text-sm">Manohar Lal</span>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <span className="text-sm">Beneficiary Name :</span>
              <span className="text-sm">Manohar Lal</span>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <span className="text-sm">Exception Reason :</span>
              <span className="text-sm">68</span>
            </div>
          </div>
        
          <div>
            <div className='grid grid-cols-2 gap-4'>
              <span className="text-sm">APBS Item Seq No. :</span>
              <span className="text-sm">6461594668</span>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <span className="text-sm">Account Number :</span>
              <span className="text-sm">20118550981</span>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <span className="text-sm">Amount :</span>
              <span className="text-sm">9990.00</span>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <span className="text-sm">Username :</span>
              <span className="text-sm">7674434-ROGI KALYAN</span>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div>
          <label htmlFor="status">Approved:</label>
          <input type="checkbox" id="status" name="status" value="status"/>
        </div>
        
        <div className='grid grid-cols-2'>
          <label htmlFor="batchstatus" className="f">Reason Code :</label>
          <select
              className="border border-gray-300 rounded-md py-1 px-3 mr-2"
              name="batchstatus"
              id="batchstatus"
                // onChange={handleTxnStatusChange}
                // value={selectedTxnStatus}
              >
                <option value="">Select Reason Code</option>
                  {reasonCodeDropdownOptions.map((status, index) => (
                    <option key={index} value={status}>
                      {status}
                </option>
                ))}
          </select>
        </div>
      </div>

      <div className='space-y-10 space-x-20'>
        <button className='p-1 px-4 bg-slate-300 rounded-xl'>Submit</button>
        <button className='p-1 px-4 bg-slate-300 rounded-xl'>Cancel</button>
      </div>

      <div></div>
      </div>
    </div>
  )
}

export default Action;