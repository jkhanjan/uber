import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const LocationSearchPanel = (props) => {
  const locations = [
    "24B, Nears Garden, Delhi",
    "21B, Nears Globe, Mumbai",
    "15B, Super Globe, Dharavi",
    "22B, Nears Green Garden, Hyderabad",
  ];

  return (
    <div>
      {locations.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => {
            props.setVehicleOpen(true);
            props.setPanelOpen(false);
          }}
          className="flex gap-4 border-2 p-3 border-white active:border-black rounded-xl items-center justify-start my-2"
        >
          <h2 className="bg-[#eeeeee] h-5 w-10 flex items-center justify-center rounded-full">
            <FaLocationDot />
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
