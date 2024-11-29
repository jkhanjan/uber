import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({})
  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({ email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        {" "}
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-xl font-medium mb-2">Enter your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="text"
            required
            placeholder="email@example.com"
          />
          <h3 className="text-xl font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            required
          />
          <button className="bg-[#111] text-white mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            login
          </button>
        </form>
        <p className="text-center mb-3">
          Join the fleet ?{" "}
          <Link to="/captain-signup" className="text-blue-600 text-center">
            Register as a captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#d98a55] flex items-center justify-center text-white mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        >
          sign as user
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
