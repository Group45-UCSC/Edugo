import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import {
  AiFillDashboard,
  AiFillCar,
  AiOutlineClose,
  AiOutlinePlus,
} from "react-icons/ai";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDropzone } from "react-dropzone";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <AiFillDashboard /> },
  { title: "School Ride", path: "/driver/ride", icon: <AiFillCar /> },
  { title: "Finance", path: "/driver/finance", icon: <MdPayments /> },
  { title: "Support", path: "/driver/support", icon: <MdSupportAgent /> },
  {
    title: "Feedback",
    path: "/driver/feedback",
    icon: <MdOutlineRateReview />,
  },
];

const paymentDetails = [
  {
    pId: "P10001",
    childId: "C10005",
    name: "R.B.S.Udayanga",
    amount: 2410,
    date: "2023/7/23",
  },
  {
    pId: "P10004",
    childId: "C10009",
    name: "L.L.A. Hansani",
    amount: 2100,
    date: "2023/7/21",
  },
  {
    pId: "P10021",
    childId: "C10011",
    name: "K.S.T. Gunawardhana ",
    amount: 1980,
    date: "2023/7/24",
  },
  {
    pId: "P10305",
    childId: "C10011",
    name: "A.W.K.S. Jayasiri ",
    amount: 2700,
    date: "2023/7/02",
  },
  {
    pId: "P10012",
    childId: "C10005",
    name: "R.B.S.Udayanga",
    amount: 2050,
    date: "2023/7/16",
  },
  {
    pId: "P10015",
    childId: "C10009",
    name: "L.L.A. Hansani",
    amount: 1875,
    date: "2023/7/12",
  },
];

function Deposits() {
  const [depositedAmount, setDepositedAmount] = useState("");
  const [depositedDate, setDepositedDate] = useState(null);
  const [depositSlip, setDepositSlip] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);

  const handleImageCancel = () => {
    setDepositSlip(null);
    setImageUploaded(false);
  };

  const onDrop = (acceptedFiles) => {
    setDepositSlip(acceptedFiles[0]);
    setImageUploaded(true);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // handle the form submission here
    // For example, send the data to an API or perform further actions

    console.log("Deposited Amount:", depositedAmount);
    console.log("Deposited Date:", depositedDate);
    console.log("Deposit Slip:", depositSlip);
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <h1 className="text-[#5a5c69]  text-[28px] leading-8 font-normal cursor-pointer">
          Submit the Ride Payments that you collected For July
        </h1>
        {/* full box */}
        <div className="h-screen grid gap-4  grid-cols-4 mb-10">
          {/* left column */}
          <div className="h-screen col-span-2 grid grid-rows-3">
            {/* upper */}
            <div className="h-screen col-span-2 gap-6  row-span-1">
              {/* <form
              onSubmit={handleSubmit}
              className="bg-white ml-2 p-10 px-12 ring-1 ring-orange rounded-lg shadow-md"
            >
              <div className="mb-4  gap-[80px] flex">
                <div className=" w-1/2  pr-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Deposited Amount:
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={depositedAmount}
                    onChange={(e) => setDepositedAmount(e.target.value)}
                    className="w-[103%] px-4 py-1 rounded border -gray-300 focus:border-gray focus:ring focus:ring-orange"
                  />
                </div>
                <div className="w-1/2  ">
                  <label className="block text-gray-700 text-sm font-bold mb-[8px]">
                    Deposited Date:
                  </label>
                  <DatePicker
                    selected={depositedDate}
                    onChange={(date) => setDepositedDate(date)}
                    maxDate={new Date()} // This restricts dates in the future
                    className="w-[100%] px-4 py-1 rounded border border-gray-300 focus:border-gray focus:ring focus:ring-orange"
                  />
                </div>
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Bank Deposit Slip:
                </label>
                <div
                  {...getRootProps()}
                  className="dropzone p-4 border-2 border-dashed rounded cursor-pointer text-center"
                >
                  <input {...getInputProps()} />
                  {imageUploaded ? (
                    <div>
                      <p>Uploaded: {depositSlip.name}</p>
                      <img
                        src={URL.createObjectURL(depositSlip)}
                        alt="Deposit Slip"
                        className="w-32 h-auto mx-auto mt-4"
                      />
                      <button
                        type="button"
                        onClick={handleImageCancel}
                        className="absolute top-0 right-0 mt-2 mr-2 text-red-500 hover:text-red-700"
                      >
                        <AiOutlineClose />
                      </button>
                    </div>
                  ) : (
                    <p className="text-slate-600 text-xs flex  justify-center">
                      <AiOutlinePlus className="text-2xl" />
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-center">
              <button
                type="submit"
                className="flex justify-center w-56 h-10 pt-2 mt-5 text-base bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                // className="bg-orange hover:bg-gray text-white font-bold py-2 px-4 rounded "
              >
                Submit
              </button>
              </div>
            </form> */}
              <div className=" h-[180px] rounded-[8px] bg-slate-200 mt-14 mx-8 border-t-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                <div>
                  <div className="text-[20px] leading-[24px] font-bold text-[#5a5c69] my-4 mb-3">
                    Total Collected Amount : Rs. 13115.00
                  </div>
                  <div className="text-[20px] leading-[24px] font-bold text-[#00b300] my-4 mb-3">
                    You deposited Amount : Rs. 8500.00
                  </div>
                  <div className="text-[20px] leading-[24px] font-bold text-[#ff0000] my-4 pb-1">
                    You have to Deposit more : Rs. 4615.00
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-2 mt-4">
              <form
                onSubmit={handleSubmit}
                className="bg-white ml-2 p-10 px-12 ring-1 ring-gray rounded-lg shadow-md"
              >
                <div className="mb-4  gap-[80px] flex">
                  <div className=" w-1/2  pr-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Deposited Amount:
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={depositedAmount}
                      onChange={(e) => setDepositedAmount(e.target.value)}
                      className="w-[103%] px-4 py-1 rounded border -gray-300 focus:border-gray focus:ring focus:ring-orange"
                    />
                  </div>
                  <div className="w-1/2  ">
                    <label className="block text-gray-700 text-sm font-bold mb-[8px]">
                      Deposited Date:
                    </label>
                    <DatePicker
                      selected={depositedDate}
                      onChange={(date) => setDepositedDate(date)}
                      maxDate={new Date()} // This restricts dates in the future
                      className="w-[100%] px-4 py-1 rounded border border-gray-300 focus:border-gray focus:ring focus:ring-orange"
                    />
                  </div>
                </div>
                <div className="mb-4 relative">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Bank Deposit Slip:
                  </label>
                  <div
                    {...getRootProps()}
                    className="dropzone p-4 border-2 border-dashed rounded cursor-pointer text-center"
                  >
                    <input {...getInputProps()} />
                    {imageUploaded ? (
                      <div>
                        <p>Uploaded: {depositSlip.name}</p>
                        <img
                          src={URL.createObjectURL(depositSlip)}
                          alt="Deposit Slip"
                          className="w-32 h-auto mx-auto mt-4"
                        />
                        <button
                          type="button"
                          onClick={handleImageCancel}
                          className="absolute top-0 right-0 mt-2 mr-2 text-red-500 hover:text-red-700"
                        >
                          <AiOutlineClose />
                        </button>
                      </div>
                    ) : (
                      <p className="text-slate-600 text-xs flex  justify-center">
                        <AiOutlinePlus className="text-2xl" />
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="flex justify-center w-56 h-10 pt-2 mt-5 text-base bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                    // className="bg-orange hover:bg-gray text-white font-bold py-2 px-4 rounded "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* end of left column */}
          {/* right column */}
          <div className="col-span-2 gap-4 mt-4 h-[600px]  ">
            <div className=" mt-8">
              <div className="h-8 mb-3 flex justify-center">
                <h1 className="text-xl font-bold "> Cash Payments - July</h1>
              </div>
              {/* table */}
              <div className="  col-span-2 mb-4 ">
                {/* <div className="p-3"> */}
                <div className="flex justify-end">
                  <div className="float-right  mr-[-100px]">
                    <form action="">
                      <input
                        type="text"
                        placeholder="Search.."
                        className=" mt-1 overflow-auto w-40 mr-32  border border-slate-400 pl-2 rounded-md"
                      ></input>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-10 stroke-slate-500 absolute -mt-8 ml-32 hover:cursor-pointer"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </form>
                  </div>
                  </div>
                  <div className=" p-2 ">
                  <table className="w-full border-separate border-spacing-y-2 border-slate-50 overflow-y-auto  ">
                    <thead className="border-y-4 border-white drop-shadow">
                      <tr className="bg-[#999999] text-white text-[18px] border-b-2 drop-shadow-md">
                        <th className="px-3.5 py-1 w-30">Parent Id</th>
                        <th className="px-3.5 w-30">Child Id</th>
                        <th className="px-3.5 w-30">Child Name</th>
                        <th className="px-3.5 w-30">Amount(Rs.)</th>
                        <th className="px-3.5 w-30">Date</th>
                      </tr>
                    </thead>

                    <tbody>
                      {paymentDetails.map((payment) => (
                        <tr
                          key={payment.pId}
                          className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                        >
                          <td className="text-center p-3">{payment.pId}</td>
                          <td className="text-center">{payment.childId}</td>
                          <td className="text-center">{payment.name}</td>
                          <td className="text-center">{payment.amount}</td>
                          <td className="text-center">{payment.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                {/* </div> */}
              </div>
            </div>
          </div>
          {/* end of right column */}
        </div>
        {/* end of full box */}
      </MainLayout>
    </div>
  );
}

export default Deposits;