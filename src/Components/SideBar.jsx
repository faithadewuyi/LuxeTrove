import { useState } from 'react';
import {
BsArrowLeftShort, 
BsFillCartCheckFill, 
BsWalletFill   
} from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { 
RiDashboardFill, 
RiSecurePaymentLine,
RiCustomerService2Line  } from "react-icons/ri";
import { FaGift } from "react-icons/fa";
import {
MdOutlineLocalShipping, 
MdSettings,
MdLogout  } from "react-icons/md";
function SideBar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    {title: "Overview"},
    {title: "Payment", icon: <RiSecurePaymentLine />},
    {title: "Shipping Address", icon: <MdOutlineLocalShipping />},
    {title: "My Orders", icon: <BsFillCartCheckFill />},
    {title: "Gift Cards", icon: <FaGift />},
    {title: "My Wallet", icon: <BsWalletFill /> },
    {title: "Settings", icon: <MdSettings />},
    {title: "Help Center", icon: <RiCustomerService2Line />},
    {title: "Log Out", icon: <MdLogout />},
  ]
  return (
    <div className=''>
      <div className={` lg:pt-6 gap-2 font-normal text-base text-textcol p-7 h-40  ${open ? "w-72" : "w-20"} duration-300  relative`} >
      <BsArrowLeftShort className={`bg-btn text-white text-3xl rounded-full absolute -right-3 top-9 border cursor-pointer ${!open && "rotate-180"}`}
      onClick={() =>setOpen(!open)}
      />
      <div className='inline-flex'>
      <VscAccount className={`text-4xl rounded text-btn cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]" }`} />
       <h3 
       className= {`text-textcol text-2xl font-medium py-2 px-2 lg:py-1 lg:px-0  lg:bg-inherit origin-left duration-300 ${!open && "scale-0"}`}>ACCOUNT</h3> 
      </div>
      <ul className="pt-2">
        {Menus.map((menu, index) =>(
          <>
          <li key={index} className="text-black text-sm flex items-center gap-x-4 cursor-pointer hover:text-btn p-3 ">
            <span className='text-2xl block float-left text-btnlight' >
            {menu.icon ? menu.icon : <RiDashboardFill /> }
            </span>
            <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}> 
              {menu.title}
              </span>
          </li>
          </>
        ))}
      </ul>

      
      </div>


       
      </div>
    
  )
}

export default SideBar
