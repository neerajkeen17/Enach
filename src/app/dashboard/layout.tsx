import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

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
