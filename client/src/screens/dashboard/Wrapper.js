import AdminNav from "../../components/AdminNav";
import SideBar from "../../components/Sidebar";
import {useState} from 'react';
const Wrapper = ({children})=>{
    const [side,setSide] = useState('-left-64')
    const opensidebar = ()=>{
        setSide("left-0")
    }
    const closeSidebar = ()=>{
        setSide("-left-64")
    }
    return(
        <>
        <SideBar side={side} closeSidebar={closeSidebar} />
        <AdminNav opensidebar={opensidebar} />
        <section className="md-0 sm:ml-64 bg-gray-900 min-h-screen pt-28 px-4">
          <div className="bg-gray-800 text-white p-4">
           {children}
          </div>
          
        </section>
      </>
    )
}

export default Wrapper;