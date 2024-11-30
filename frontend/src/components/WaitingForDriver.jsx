import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaWalking } from "react-icons/fa";

const WaitingForDriver = (props) => {
  return (
    <div className="p-4 relative bg-white shadow-md rounded-lg">
      {/* Close Button */}
      <h5
        className="absolute top-2 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => {
          props.WaitingForDriver(false);
        }}
      >
        <IoIosArrowDown className="text-2xl text-gray-900" />
      </h5>

      <div className="flex items-center justify-between gap-5">
        {" "}
        <img
          className="h-10"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">KJ</h2>
          <h4 className="text-sl font-semibold">RJ XX XXXX</h4>
          <p className="text-sm text-gray-600">Jaguar</p>
        </div>
      </div>

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
    </div>
  );
};

export default WaitingForDriver;
