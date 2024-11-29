import React, { useContext, useEffect, useState } from "react";
import { userDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(userDataContext);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return null;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          setIsLoading(false);
          setUser(response.data.user);
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, [token, navigate, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;
