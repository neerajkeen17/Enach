import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

export default function dashboard ({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <div className="min-h-screen">
    <Navbar/>
    <div className="flex">
      <Sidebar/>
      <div>{children}</div>
    </div>
    </div>
  )
}
