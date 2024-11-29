import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
      return;
    }

    const fetchCaptainData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          setCaptain(response.data.captain);
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem("token");
        navigate("/captain-login");
      } finally {
        setIsloading(false);
      }
    };

    fetchCaptainData();
  }, [token, navigate, setCaptain]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
