import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UseLogin from "./pages/UseLogin";
import UserSignUp from "./pages/UserSignUp";
import CaptainSignUp from "./pages/CaptainSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";
import CaptainsLogout from "./pages/CaptainsLogout";
const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              {" "}
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route path="/login" element={<UseLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route
          path="/user/logout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/captains/logout"
          element={
            <CaptainProtectedWrapper>
              <CaptainsLogout />
            </CaptainProtectedWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
