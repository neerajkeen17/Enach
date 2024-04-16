"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();


  interface SidebarOption {
    label: string;
    route?: string;
    children?: SidebarOption[];
  }

  const sidebarOptions: SidebarOption[] = [
    {
      label: 'AV Inward',
      children: [
        { label: 'Batch Status', route: '/dashboard/AVInward/BatchStatus' },
        { label: 'Reference Enquiry', route: '/dashboard/AVInward/ReferenceEnquiry' },
      ],
    },
    {
      label: 'ACH Credit',
      children: [
        { label: 'Batch Status', route: '/dashboard/ACHCredit/BatchStatus' },
        { label: 'Transaction Enquiry', route: '/dashboard/ACHCredit/TransactionEnquiry' },
        { label: 'ACH Maker Modify', route: '/dashboard/ACHCredit/MakerModify' },
        { label: 'ACH Checker Verify', route: '/dashboard/ACHCredit/CheckerVerify' },
        { label: 'ACH Maker/Checker Cancel', route: '/dashboard/ACHCredit/MakerCheckerCancel' },
      ],
    },
    {
      label: 'ACH Debit',
      children: [
        { label: 'Batch Status', route: '/dashboard/ACHDebit/BatchStatus' },
        { label: 'Transaction Enquiry', route: '/dashboard/ACHDebit/TransactionEnquiry' },
        { label: 'ACH Maker Modify', route: '/dashboard/ACHDebit/MakerModify' },
        { label: 'ACH Checker Verify', route: '/dashboard/ACHDebit/CheckerVerify' },
        { label: 'ACH Maker/Checker Cancel', route: '/dashboard/ACHDebit/MakerCheckerCancel' },
      ],
    },
    {
      label: 'APBS Credit',
      children: [
        { label: 'Batch Status', route: '/dashboard/APBSCredit/BatchStatus' },
        { label: 'Transaction Enquiry', route: '/dashboard/APBSCredit/TransactionEnquiry' },
        { label: 'APBS Maker Modify', route: '/dashboard/APBSCredit/MakerModify' },
        { label: 'APBS Checker Verify', route: '/dashboard/APBSCredit/CheckerVerify' },
        { label: 'APBS Maker/Checker Cancel', route: '/dashboard/APBSCredit/MakerCheckerCancel' },
      ],
    },
  ];

  const [openOption, setOpenOption] = useState<number | null>(null);

  const toggleOption = (index: number) => {
    if (openOption === index) {
      setOpenOption(null);
    } else {
      setOpenOption(index);
    }
  };

  const handleSubItemClick = (route: string | undefined) =>{
    router.push(route!);
  }

  return (
    <>
      <div className="sidebar bg-[#ccc5c5] h-[85svh]">
        <ul className="m-2">
          {sidebarOptions.map((option, index) => (
            <li key={index} className="">
              <div
                onClick={() => toggleOption(index)}
                className="bg-[#d9d9d9] m-1 w-56 p-1 flex gap-2 cursor-pointer"
              >
                <span className={`transition-transform ${openOption === index ? 'rotate-90' : ''}`}>&#707;</span>
                <span>{option.label}</span>
              </div>
              {openOption === index && option.children && (
                <ul className="pl-1" >
                    {option.children.map((child, childIndex) => (
                       <li
                         key={childIndex}
                         className={`text-sm cursor-pointer p-1 hover:bg-yellow-100`}
                         onClick={() => handleSubItemClick(child.route)}
                       >
                         <span className="mr-1">&#9679;</span> {child.label}
                       </li>
                     ))}
                   </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}