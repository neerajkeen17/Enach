"use client"
import { useState } from 'react';

export default function Sidebar() {
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
        { label: 'ACH Maker Modify', route: '/ach-credit/maker-modify' },
        { label: 'ACH Checker Verify', route: '/ach-credit/checker-verify' },
        { label: 'ACH Maker/Checker Cancel', route: '/ach-credit/maker-checker-cancel' },
      ],
    },
    {
      label: 'ACH Debit',
      children: [
        { label: 'Batch Status', route: '/ach-debit/batch-status' },
        { label: 'Transaction Enquiry', route: '/ach-debit/transaction-enquiry' },
        { label: 'ACH Maker Modify', route: '/ach-debit/maker-modify' },
        { label: 'ACH Checker Verify', route: '/ach-debit/checker-verify' },
        { label: 'ACH Maker/Checker Cancel', route: '/ach-debit/maker-checker-cancel' },
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

  return (
    <>
      <div className="sidebar bg-[#ccc5c5] h-[85svh]">
        <ul className="m-2">
          {sidebarOptions.map((option, index) => (
            <li key={index} className="">
              <div
                onClick={() => toggleOption(index)}
                className="bg-[#d9d9d9] m-2 w-52 p-1 flex gap-2 cursor-pointer"
              >
                <span className={`transition-transform ${openOption === index ? 'rotate-90' : ''}`}>&#707;</span>
                <span>{option.label}</span>
              </div>
              {openOption === index && option.children && (
                <ul>
                  {option.children.map((child, childIndex) => (
                    <li className="m-2 text-sm hover:bg-yellow-100 p-1" key={`${index}-${childIndex}`}>
                      <a href={child.route}>
                        <span className="mr-2">&#9679;</span>
                        {child.label}
                      </a>
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














// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import sidebarlogo from "./Assets/fino.jpg"

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState(null);
//   const navigate = useNavigate();

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//     setActiveItem(null);
//   };

//   const toggleSubItems = (index) => {
//     setActiveItem(activeItem === index ? null : index);
//   };

//   const menuItems = [
//     {
//       label: "Merchant Account",
//       icon: "🏭",
//       color: "bg-gradient-to-r from-red-600 to-blue-600 text-white",
//       subItems: [
//         { label: "Merchant Addition", path: "/merchant-addition", color: "text-blue-600" },
//         { label: "Merchant Update", path: "/merchant-update-search", color: "text-blue-600"},
//       ],
//     },

//     {
//       label: "Merchant Maker Checker",
//       icon: "✅",
//       color: "bg-gradient-to-r from-red-600 to-blue-600 text-white",
//       subItems: [
//         { label: "Maker", path: "/maker", color: "text-blue-600" },
//         { label: "Checker", path: "/checker", color: "text-blue-600" },
//         { label: "Maker Checker Status", path: "/maker-checker-status", color: "text-blue-600" },
//         { label: "Maker Checker Dashboard", path: "/maker-checker-dashboard", color: "text-blue-600"},
//       ],
//     },
    
//     {
//       label: "Merchant Reports",
//       icon: "📊",
//       color: "bg-gradient-to-r from-red-600 to-blue-600 text-white",
//       subItems: [
//         { label: "Account Status Report", path: "/account-status-report", color: "text-blue-600" },
//         { label: "Commission Report", path: "/commission-report", color: "text-blue-600" },
//         { label: "Merchant Detail Report", path: "/merchant-detail-report", color: "text-blue-600" },
//         { label: "Real Time Report", path: "/real-time-report", color: "text-blue-600" },
//         { label: "Recon Report", path: "/recon-report", color: "text-blue-600" },
//       ],
//     },
//   ];

//   const handleSubItemClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="flex mt-2">
//       <div
//         className={`bg-gray-400 rounded-md mx-2  text-white h-[calc(100svh-14svh)] ${
//           isOpen ? "w-64" : "w-20"
//         } duration-500 relative`}
//       >
//         <div className="flex items-center justify-between px-4 py-2">
//           <button
//             onClick={toggleSidebar}
//             className="text-white focus:outline-none"
//           >
//             <span className="text-2xl">&#9776;</span>
//           </button>
//           {/* <h1 className={`text-xl font-bold ${!isOpen && "hidden"}`}>Fino</h1> */}
//           <img className={`px-4 py-2 ${!isOpen && "hidden"}`} src={sidebarlogo} alt="logo" />
//         </div>
        
//         <nav>
//           {menuItems.map((item, index) => (
//             <div key={index} className="px-4 py-2">
//               <span
//                 className={`flex items-center cursor-pointer py-2 px-3 rounded-md ${item.color}`}
//                 onClick={() => toggleSubItems(index)}
//               >
//                 <span onClick={toggleSidebar} className="mr-2">{item.icon}</span>
//                 <span className={`text-sm font-medium ${!isOpen && "hidden"}`}>
//                   {item.label}
//                 </span>
//               </span>
//               {activeItem === index && isOpen && (
//                 <ul className="pl-4 mt-2 bg-white p-1" >
//                   {item.subItems.map((subItem, subIndex) => (
//                     <li
//                       key={subIndex}
//                       className={`text-sm cursor-pointer flex items-center py-1 px-2 hover:bg-gradient-to-r from-red-200 to-blue-200  ${subItem.color}`}
//                       onClick={() => handleSubItemClick(subItem.path)}
//                     >
//                       <span className="mr-2">&#9679;</span> {subItem.label}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;