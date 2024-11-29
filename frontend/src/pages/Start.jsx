import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full pt-5 h-screen flex items-start justify-between flex-col">
      <img
        className="w-16 ml-8"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="bg-white pb-7 py-4 px-4 w-full">
        <h1 className="text-2xl font-bold">Get Started</h1>
        <Link
          to="/login"
          className="w-full inline-center justify-center flex bg-black text-white py-3 rounded mt-5"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
