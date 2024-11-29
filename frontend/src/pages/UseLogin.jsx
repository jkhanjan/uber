import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userDataContext } from "../context/userContext";
import axios from "axios";
const UseLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const { user, setUser } = useContext(userDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    setEmail("");
    setPassword("");

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );
    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
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
          New here ?{" "}
          <Link to="/signup" className="text-blue-600 text-center">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center text-white mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        >
          sign as captain
        </Link>
      </div>
    </div>
  );
};

export default UseLogin;
