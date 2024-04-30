"use client"

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Provider } from 'react-redux';
import store from '../../store/store';

export default function dashboard ({
  children
}: {
  children: React.ReactNode;
}) {
  return(
    <Provider store={store}>
    <div className="min-h-screen">
    <Navbar/>
    <div className="flex">
      <Sidebar/>
      
      <div>{children}</div>
      
    </div>
    </div>
    </Provider>
  )
}
