import React from 'react'



const Action = () => {
  return (
    <div className='p-2 bg-white'>
      <h1 className='text-xl font-semibold'>APBS Individual Transaction Status</h1>
      <div className='shadow-md p-2 rounded-md space-y-5'>

      <div className='space-y-4'>
        <h2 className='border border-gray-300 bg-stone-400 font-bold'>APBS Beneficiary Details</h2>

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


      <div className='space-y-4'>
        <h2 className='border border-gray-300 bg-stone-400 font-bold'>APBS Transaction Details</h2>
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


        <div className='flex justify-center space-x-10'>
          <button className='p-1 px-4 bg-slate-300 rounded-xl mr-2'>Submit</button>
          <button className='p-1 px-4 bg-slate-300 rounded-xl'>Cancel</button>
        </div>
      </div>

    </div>
  )
}

export default Action;