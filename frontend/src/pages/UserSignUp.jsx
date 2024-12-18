import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userDataContext } from "../context/userContext";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const { user, setUser } = useContext(userDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newuser = {
      fullname: {
        firstname,
        lastname,
      },
      password,
      email,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newuser
    );
    if (response.status === 201) {
      const data = response.data;

      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
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
          <h3 className="text-base font-medium mb-2">Enter your Name</h3>
          <div className="flex gap-4 ">
            {" "}
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border text-base placeholder:text-sm"
              type="text"
              required
              placeholder="firstname"
            />{" "}
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border text-base placeholder:text-sm"
              type="text"
              required
              placeholder="lastname"
            />
          </div>

          <h3 className="text-base font-medium mb-2">Enter your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="text"
            required
            placeholder="email@example.com"
          />
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            placeholder="password"
            required
          />
          <button className="bg-[#111] text-white mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Create Account
          </button>
        </form>
        <p className="text-center mb-3">
          Already have an account ?{" "}
          <Link to="/login" className="text-blue-600 text-center">
            Login
          </Link>
        </p>
      </div>
      <div>
        <p className="text-center text-[7px]">
          By proceeding, you agree to our Terms of Use and confirm you have read
          our Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
