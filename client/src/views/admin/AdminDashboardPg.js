import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBusAlt } from "react-icons/fa";
import { BsFillExclamationOctagonFill } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import { BsCoin } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <AiFillDashboard /> },
  { title: "Employees", path: "/admin/employees", icon: <FaUserGroup /> },
  { title: "Drivers & Vehicles", path: "/admin/drivers", icon: <BsFillCarFrontFill /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaShippingFast /> },
  { title: "Children & Parents", path: "/admin/childrenlist", icon: <FaChild /> },
  { title: "Finance", path: "/admin/finance", icon: <BsCoin /> },
];

function AdminDashboardPg() {

    const emergency = () => {
        window.location.href = `/admin/emergency`;
      };
    
    const ride = () => {
        window.location.href = `/admin/RideDetails`;
      };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>

        <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Dashboard</h1>
          <div className='flex'>

          {/* card */}
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-12 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{backgroundColor:'#EEEEEE'}}>
              
              {/* orange div */}
              <div className='flex w-2 rounded-s-lg' style={{backgroundColor:'#FF9900'}}></div>
              
              {/* title and icon container */}
              <div className='flex flex-col'>
                  <div className='flex'>
                      <div className='w-24 ml-4 mt-2 h-16 font-bold'>Total Vehicles</div>
                      <div className='ml-16 mt-4 w-8 h-8'><FaBusAlt className='h-6 w-6' /></div>
                  </div>
                  <span className='font-bold ml-24 text-xl'>34</span>
              </div>
          </div>

          {/* card */}
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-12 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{backgroundColor:'#EEEEEE'}}>
              
              {/* orange div */}
              <div className='flex w-2 rounded-s-lg' style={{backgroundColor:'#FF9900'}}></div>
              
              {/* title and icon container */}
              <div className='flex flex-col'>
                  <div className='flex'>
                      <div className='w-24 ml-4 mt-2 h-16 font-bold'>Total Children</div>
                      <div className='ml-16 mt-4 w-8 h-8'><FaChild className='h-6 w-6' /></div>
                  </div>
                  <span className='font-bold ml-24 text-xl'>415</span>
              </div>
          </div>

          {/* card */}
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-12 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{backgroundColor:'#EEEEEE'}}>
              
              {/* orange div */}
              <div className='flex w-2 rounded-s-lg' style={{backgroundColor:'#FF9900'}}></div>
              
              {/* title and icon container */}
              <div className='flex flex-col'>
                  <div className='flex'>
                      <div className='w-24 ml-4 mt-2 h-16 font-bold'>Registered Users</div>
                      <div className='ml-16 mt-4 w-8 h-8'><FaUserGroup className='h-6 w-6' /></div>
                  </div>
                  <span className='font-bold ml-24 text-xl'>356</span>
              </div>
          </div>

          {/* card */}
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-12 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{backgroundColor:'#EEEEEE'}}>
              
              {/* orange div */}
              <div className='flex w-2 rounded-s-lg' style={{backgroundColor:'#FF9900'}}></div>
              
              {/* title and icon container */}
              <div onClick={ride} className='flex flex-col'>
                  <div className='flex'>
                      <div className='w-24 ml-4 mt-2 h-16 font-bold'>Ongoing Rides</div>
                      <div className='ml-16 mt-4 w-8 h-8'><FaShippingFast className='h-6 w-6' /></div>
                  </div>
                  <span className='font-bold ml-24 text-xl'>10</span>
              </div>
          </div>
          </div>

          {/* emergencies */}
          <div onClick={emergency} className="flex mt-8 ml-12 mb-80 h-11 w-44 rounded-lg shadow-lg bg-orange font-semibold text-lg pt-2 pl-5 cursor-pointer hover:scale-[102%] hover:bg-amber-500 transition-transform ease-in-out">Emergencies<BsFillExclamationOctagonFill className="mt-1 ml-4"/></div>
      </MainLayout>
    </div>
  );
}

export default AdminDashboardPg;
