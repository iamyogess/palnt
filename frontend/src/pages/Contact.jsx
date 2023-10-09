import React from "react";
import contact from "../assets/cont.jpg";

const Contact = () => {
  return (
    <>
      <div className="h-full p-5 w-screen flex flex-col justify-center m-auto items-center max-w-[1280px]">
      <h1 className="text-center mt-5 text-2xl font-semibold">Send us your feedback</h1>
       <div className="flex justify-around items-center w-full">
       <div className="hidden md:block">
          <img src={contact} className="h-[500px] w-[500px]" alt="" />
        </div>
        <div className="flex justify-center items-center flex-col p-4">
          <input
            className="border-2 rounded-md py-2 px-4 mt-[20px] w-[350px]"
            placeholder="Full Name"
            type="text"
          />
          <input
            className="border-2 rounded-md py-2 px-4 mt-[20px] w-[350px]"
            placeholder="Address"
            type="text"
          />
          <input
            className="border-2 rounded-md py-2 px-4 mt-[20px] w-[350px]"
            placeholder="Phone Number"
            type="number"
          />
          <textarea
            className="border-2 rounded-md py-2 px-4 mt-[20px] w-[350px] h-[150px] resize-none"
            placeholder="Enter your Queries"
            cols="30"
            rows="10"
          ></textarea>
          <button className="py-2 px-4 text-white bg-green-500 rounded-md mt-8 w-full w-[350px]">
            Send
          </button>
        </div>
       </div>
      </div>
    </>
  );
};

export default Contact;
