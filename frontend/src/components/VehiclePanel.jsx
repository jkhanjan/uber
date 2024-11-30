import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const VehiclePanel = (props) => {
  return (
    <div>
      {" "}
      <h5
        className="p-3 absolute top-0 w-[93%]"
        onClick={() => {
          props.setVehicleOpen(false);
        }}
      >
        <IoIosArrowDown className="text-xl m-auto text-gray-900" />
      </h5>
      <h3 className="text-2xl font-semibold mb-5 ">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRide(true);
        }}
        className="flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl p-3 items-center justify-between w-full"
      >
        <img
          className="h-14"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="w-1/2 p-3">
          <h4 className="flex items-center gap-2 font-medium text-base">
            UberGo{" "}
            <span className="flex items-center gap-2">
              <FaUser />4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 min away</h5>
          <p className="font-medium text-xs">Affordable, compact rides</p>
        </div>
        <h2 className="text-xl font-semibold">193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRide(true);
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl p-3 items-center justify-between w-full"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2 p-3">
          <h4 className="flex items-center gap-2 font-medium text-base">
            Moto{" "}
            <span className="flex items-center gap-2">
              <FaUser />1
            </span>
          </h4>
          <h5 className="font-medium text-sm">5 min away</h5>
          <p className="font-medium text-xs">Affordable, Motor rides</p>
        </div>
        <h2 className="text-xl font-semibold">93.20</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRide(true);
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl p-3 items-center justify-between w-full"
      >
        <img
          className="h-14"
          src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2 p-3">
          <h4 className="flex items-center gap-2 font-medium text-base">
            UberAuto{" "}
            <span className="flex items-center gap-2">
              <FaUser />2
            </span>
          </h4>
          <h5 className="font-medium text-sm">10 min away</h5>
          <p className="font-medium text-xs">Affordable Auto rides</p>
        </div>
        <h2 className="text-xl font-semibold">118.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
