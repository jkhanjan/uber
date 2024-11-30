import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaWalking } from "react-icons/fa";

const ConfirmedRide = (props) => {
  return (
    <div className="p-4 relative bg-white shadow-md rounded-lg">
      {/* Close Button */}
      <h5
        className="absolute top-2 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => {
          props.setVehicleOpen(false);
        }}
      >
        <IoIosArrowDown className="text-2xl text-gray-900" />
      </h5>

      {/* Title */}
      <h3 className="text-xl font-semibold text-center mb-5 mt-5">
        Confirm Your Ride
      </h3>

      {/* Content */}
      <div className="flex flex-col items-center gap-6">
        {/* Uber Logo */}
        <img
          className="h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="Uber Logo"
        />

        {/* Ride Info (Empty for now, can be filled later) */}
        <div className="w-full flex flex-col gap-4">
          <div className="flex items-center gap-5">
            <FaLocationDot className="text-lg" />
            <div>
              <h3 className="text-lg font-medium">Lorem</h3>
              <p className="text-base text-gray-600 text-sm">
                Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <FaWalking className="text-lg" />
            <div>
              <h3 className="text-lg font-medium">Lorem</h3>
              <p className="text-base text-gray-600 text-sm">
                Lorem ipsum dolor sit.
              </p>
            </div>
          </div>

          <div className="">
            <div className="">
              <h3 className="text-lg font-medium">193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        {/* Confirm Ride Button */}
        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRide(false);
          }}
          className="w-full bg-green-500 py-3 font-semibold text-white rounded-lg hover:bg-green-600 transition"
        >
          Confirm Ride
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
