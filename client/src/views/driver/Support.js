import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer, FaSearch, FaPhone } from "react-icons/fa";
import { AiOutlinePaperClip, AiOutlineSend } from "react-icons/ai";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <FaBeer /> },
  { title: "School Ride", path: "/driver/ride", icon: <FaBeer /> },
  { title: "Finance", path: "/driver/finance", icon: <FaBeer /> },
  { title: "Support", path: "/driver/support", icon: <FaBeer /> },
  { title: "Feedback", path: "/driver/feedback", icon: <FaBeer /> },
];

function Support() {
  const [activeTab, setActiveTab] = useState("chat");

  const [inputValue, setInputValue] = useState("");
  const [sentMessages, setSentMessages] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);

  const handleChatItemClick = (chatId) => {
    setSelectedChatId(chatId);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      console.log("Selected file:", file);
    }
  };
  // function to handle sending a message
  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      //create a new message object with the input value
      const newMessage = {
        sender: "You",
        content: inputValue.trim(),
        chatId: selectedChatId,
      };
      //update the sentMessage  state with the new message
      setSentMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue("");
    }
  };
  const chatItems = [
    {
      id: 1,
      name: "H.A. Priyantha Hettiarachchi",
      avatar: "https://tecdn.b-cdn.net/img/new/avatars/5.webp",
      messages: [
        "Hi there!",
        "I need help.",
        "A parent named John Doe has not paid the monthly fee yet.",
      ],
    },
    {
      id: 2,
      name: "Sunil Fernando",
      avatar: "https://tecdn.b-cdn.net/img/new/avatars/2.webp",
      messages: ["Hello!", "Can you assist me with something?"],
    },
    {
      id: 3,
      name: "S.N.Ramanayake",
      avatar: "https://tecdn.b-cdn.net/img/new/avatars/12.webp",
      messages: ["Hey there!", "I have a question about a student."],
    },
  ];
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="flex flex-col gap-10 mt-[4rem] ml-[5rem]">
          <div class="inline-flex">
            <button
              className={`${
                activeTab === "chat"
                  ? "bg-orange text-black drop-shadow-md border-2 border-black"
                  : "bg-gray"
              } w-[10rem] hover:bg-orange hover:text-black font-bold hover:border-black py-2 px-4 rounded-l`}
              onClick={() => setActiveTab("chat")}
            >
              Chat
            </button>
            <button
              className={`${
                activeTab === "complaints"
                  ? "bg-orange text-black drop-shadow-md border"
                  : "bg-gray"
              } w-[10rem] hover:bg-orange  hover:text-black font-bold hover:border-black py-2 px-4 rounded-r`}
              onClick={() => setActiveTab("complaints")}
            >
              Complaints
            </button>
          </div>

          {/* ------------------------------------------------------- */}
          {/* -------------------------chat Tab---------------------- */}
          {activeTab === "chat" && (
            <div className="col-span-3  bg-orange m-2 p-3 h-[45rem]  grid grid-cols-3">
              {/* -------------------chat list----------------- */}
              <div className="col-span-1  m-1 py-5  flex flex-col gap-8">
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 bg-transparent py-2 border rounded-full focus:outline-none focus:border-black focus:border-2 placeholder-black placeholder-opacity-75"
                    placeholder="Search Name..."
                  />
                  <FaSearch className="absolute right-4 top-3 h-5 w-5 text-gray-400" />
                </div>
                <div className=" w-full h-full flex flex-col  gap-3">
                  {chatItems.map((item, index) => (
                    <div
                      key={index}
                      className={`${
                        selectedChatId === item.id
                          ? "bg-[#F6AD55]"
                          : "bg-orange transform hover:scale-[103%] transition duration-300 ease-out"
                      } w-full h-14 rounded-xl border-b border-black flex items-center px-4 hover:border-black `}
                      onClick={() => handleChatItemClick(item.id)}
                    >
                      <img
                        src={item.avatar}
                        alt="Profile"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <p className="text-gray-800 font-semibold">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* --------------------------------------------- */}
              {/* ------------------chat view------------------ */}
              <div className="col-span-2 bg-gradient-to-r from-[#e2e8f0] to-[#cbd5e0] rounded-md m-1 p-5 flex flex-col justify-between">
                {selectedChatId ? (
                  <div className="flex justify-center items-center border-b pb-2 mb-3">
                    <img
                      src={
                        chatItems.find((item) => item.id === selectedChatId)
                          ?.avatar
                      }
                      alt="Profile"
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <p className="text-xl font-semibold">
                      {
                        chatItems.find((item) => item.id === selectedChatId)
                          ?.name
                      }
                    </p>
                    {/* <button
    className="ml-2 text-blue-500"
    onClick={() => handleCall(chatItems.find((item) => item.id === selectedChatId)?.phoneNumber)}
  > */}
                    <button className="ml-5 cursor-pointer hover:text-orange">
                      <FaPhone />
                    </button>
                  </div>
                ) : (
                  <p>Click a name to open a chat</p>
                )}
                {selectedChatId ? (
                  <div className="">
                    {/* Display the chat view for the selected chat */}
                    {/* Dummy chat messages */}
                    <div className="flex flex-col gap-3 ml-1 mt-8">
                      {chatItems.map((chatItem) => (
                        <div key={chatItem.id}>
                          {selectedChatId === chatItem.id && (
                            <div className="flex flex-col gap-3 ml-1 mt-8">
                              {chatItem.messages.map((message, index) => (
                                <div
                                  key={index}
                                  className={`flex gap-4 items-center p-2 ${
                                    chatItem.id === selectedChatId
                                      ? "justify-start"
                                      : "justify-end"
                                  }`}
                                >
                                  <img
                                    src={chatItem.avatar}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full bg-o"
                                  />
                                  <div
                                    className={`bg-gray px-5 py-2 rounded-xl flex ${
                                      chatItem.id === 1
                                        ? "justify-start"
                                        : "justify-end"
                                    }`}
                                  >
                                    <p>{message}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {chatItems.find((item) => item.id === selectedChatId) &&
                      sentMessages
                        .filter((message) => message.chatId === selectedChatId)
                        .map((message, index) => (
                          <div
                            key={index}
                            className="flex gap-3 items-center p-2 justify-end"
                          >
                            <div className="bg-orange px-5 py-2 rounded-xl flex">
                              <p>{message.content}</p>
                            </div>
                          </div>
                        ))}
                  </div>
                ) : null}

                {selectedChatId && (
                  <div className="flex items-center gap-4 mt-5">
                    <div className="flex items-center gap-2">
                      <label htmlFor="file-input">
                        <AiOutlinePaperClip
                          className={`h-6 w-6 text-${
                            inputValue.trim() !== "" ? "orange" : "black"
                          } cursor-pointer hover:text-orange`}
                        />
                      </label>
                      <input
                        id="file-input"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange} // Add a function to handle the file attachment
                      />
                    </div>
                    <input
                      type="text"
                      className="flex-grow px-4 py-3 border border-black rounded-xl focus:outline-none focus:border-orange focus:border-2 placeholder-black placeholder-opacity-75"
                      placeholder="Type your message..."
                      value={inputValue} // Set the input value from state
                      onChange={(e) => setInputValue(e.target.value)} // Update the input value in state
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage();
                        }
                      }}
                    />
                    <AiOutlineSend
                      className={`h-6 w-6 text-${
                        inputValue.trim() !== "" ? "orange" : "black"
                      } cursor-pointer hover:text-orange `}
                      onClick={handleSendMessage} //calll the function t send the message
                    />
                  </div>
                )}
              </div>
              {/* --------------------------------------------- */}
            </div>
          )}
          {/* -------------------------------------------------------  */}

          {/* -------------------------complaint Tab------------------ */}
          {activeTab === "complaints" && (
            <div className="w-fill h-[45rem] p-8 bg-gradient-to-r from-[#e2e8f0] to-[#cbd5e0]">
              <div className="flex flex-col h-full border rounded-lg overflow-hidden">
                <div className="bg-orange flex justify-center items-center border-b py-3 mb-3">
                  <h1 className="font-semibold text-2xl">Customer Support</h1>
                </div>
                <div className="flex-grow p-4 overflow-y-auto">
                  {/* Chat messages */}
                  <div className="mb-4">
                    <div className="flex items-start justify-start mb-2">
                      <div className="bg-gray px-5 py-2 rounded-xl flex justify-start">
                        Hi there! How can I help you today?
                      </div>
                    </div>
                    <div className="flex items-end justify-end"></div>
                    {/* ... Add more messages here */}
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-200 p-2">
                  {/* Message input */}
                  <div className="flex items-center gap-4 mt-5">
                    <div className="flex items-center gap-2">
                      <label htmlFor="file-input">
                        <AiOutlinePaperClip
                          className={`h-6 w-6 text-${
                            inputValue.trim() !== "" ? "orange" : "black"
                          } cursor-pointer hover:text-orange`}
                        />
                      </label>
                      <input
                        id="file-input"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange} // Add a function to handle the file attachment
                      />
                    </div>
                    <input
                      type="text"
                      className="flex-grow px-4 py-3 border border-black rounded-xl focus:outline-none focus:border-orange focus:border-2 placeholder-black placeholder-opacity-75"
                      placeholder="Type your message..."
                      value={inputValue} // Set the input value from state
                      onChange={(e) => setInputValue(e.target.value)} // Update the input value in state
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage();
                        }
                      }}
                    />
                    <AiOutlineSend
                      className={`h-6 w-6 text-${
                        inputValue.trim() !== "" ? "orange" : "black"
                      } cursor-pointer hover:text-orange `}
                      onClick={handleSendMessage} //calll the function t send the message
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* -------------------------------------------------------- */}
        </div>
      </MainLayout>
    </div>
  );
}

export default Support;
