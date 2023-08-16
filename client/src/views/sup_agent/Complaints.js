import React, { useState } from "react";
import ReactSwitch from "react-switch";
import MainLayout from "../../components/layout/MainLayout";
import { FaHome, FaBus, FaUsers, FaTimes } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/sup_agent/dashboard", icon: <FaHome /> },
  { title: "Chat", path: "/sup_agent/chat", icon: <BsFillChatDotsFill /> },
  { title: "Parents", path: "/sup_agent/parents", icon: <FaUsers /> },
  { title: "Drivers", path: "/sup_agent/drivers", icon: <FaBus /> },
];
const complaintData = [
  {
    avatarSrc: "https://tecdn.b-cdn.net/img/new/avatars/2.webp",
    title: "Vehicle Problem",
    description: "The condition of the vehicle is not good. The vehicle no is V1234",
    role:"parent" ,
  },
  {
    avatarSrc: "https://tecdn.b-cdn.net/img/new/avatars/1.webp",
    title: "Other",
    description: "A child is continuously disturbing other children.",
    role:"Driver" ,
  },
  
  // Add more data as needed
];
function Complaints() {
  const initialComplaints = complaintData.map(() => ({
    pendingChecked: false,
    doneChecked: false,
  }));
  const [complaintStates, setComplaintStates] = useState(initialComplaints);
  const [showPopups, setShowPopups] = useState(
    Array(complaintData.length).fill(false)
  );
  const handlePendingChange = (index, val) => {
    setComplaintStates((prevState) =>
      prevState.map((state, i) =>
        i === index ? { ...state, pendingChecked: val } : state
      )
    );
  };
  // const [DoneChecked, setDoneChecked] = useState(false);

  const handleDoneChange = (index, val) => {
    setComplaintStates((prevState) =>
      prevState.map((state, i) =>
        i === index ? { ...state, doneChecked: val } : state
      )
    );
  };

  const togglePopup = (index) => {
    setShowPopups((prevPopups) =>
      prevPopups.map((popup, i) => (i === index ? !popup : popup))
    );
  };
  const onClose = (index) => {
    togglePopup(index); // Call the togglePopup function to close the popup
  };
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="bg-transparent w-full h-screen p-5 flex justify-center">
          <div className="bg-[orange] w-3/4 h-full p-5 flex flex-col gap-5">
            {complaintData.map((complaint, index) => (
              <div
                key={index}
                className="bg-[#D9D9D9] w-full h-[8rem] rounded-lg p-3 flex flex-row "
               
              >
                <div className="w-[6rem] h-[6rem] bg-gray rounded-full mr-5 overflow-hidden">
                  <img
                    src={complaint.avatarSrc}
                    className="w-full h-full object-cover"
                    alt="Avatar"
                  />
                </div>
                <div className="flex-grow ml-8">
                  <div className="bg-transparent w-full p-2 flex flex-row gap-[12rem]">
                    <div className=" flex-col">
                      <h className="text-xl font-semibold cursor-pointer hover:border-b-2 transform hover:scale-[103%] transition duration-300 ease-out"
                       onClick={() => togglePopup(index)}>{complaint.title}</h>
                      <p className="">{complaint.description}</p>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="">
                        <div className="flex flex-row gap-3">
                          <h className="font-semibold">Pending Mode</h>
                          <ReactSwitch
                            checked={complaintStates[index].pendingChecked}
                            onChange={(val) => handlePendingChange(index, val)}
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="flex flex-row gap-3">
                          <h className="font-semibold">Done</h>
                          <ReactSwitch
                            checked={complaintStates[index].doneChecked}
                            onChange={(val) => handleDoneChange(index, val)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {complaintData.map(
              (complaint, index) =>
                showPopups[index] && (
                  <div
                    key={index}
                    className="popup fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 justify-center z-50"
                  >
                    <div className=" w-[50rem] h-auto bg-white ml-[35rem] mt-[5rem] p-8 rounded-md shadow-md popup-container relative">
                      <button
                        className="absolute top-0 right-0 m-2 p-2 text-gray-500 hover:text-[#e53e3e]"
                        onClick={() => onClose(index)}
                      >
                        <FaTimes className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Complaints;