import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoIosArrowDown } from "react-icons/io";
import LocationSearchPanel from "../components/LocationSearchPanel";
import { FaUser } from "react-icons/fa";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vechilePanelref = useRef(null);
  const confirmPanelRide = useRef(null);
  const vehicleFoundRef = useRef(null);
  const panelRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const panelClodeRef = useRef(null);

  const [vehicleOpen, setVehicleOpen] = useState(false);
  const [confirmRide, setConfirmRide] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
          // opacity:1
        });
        gsap.to(panelClodeRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelClodeRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehicleOpen) {
        gsap.to(vechilePanelref.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vechilePanelref.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleOpen]
  );
  useGSAP(
    function () {
      if (confirmRide) {
        gsap.to(confirmPanelRide.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmPanelRide.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRide]
  );
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vechilePanelref.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vechilePanelref.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div className="h-screen w-screen">
        {/* Image for Temporary  */}
        <img
          className="h-full w-full object-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            ref={panelClodeRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 top-6 text-xl right-6"
          >
            <IoIosArrowDown />
          </h5>
          <h4 className="text-2xl font-semibold ">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              onClick={() => setPanelOpen(true)}
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pickup location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div ref={panelRef} className="h-[0] bg-white ">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            vehicleOpen={vehicleOpen}
            setVehicleOpen={setVehicleOpen}
          />
        </div>
      </div>

      <div
        ref={vechilePanelref}
        className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 w-full"
      >
        <VehiclePanel
          setConfirmRide={setConfirmRide}
          setVehicleOpen={setVehicleOpen}
        />
      </div>
      <div
        ref={confirmPanelRide}
        className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 w-full"
      >
        <ConfirmedRide
          setConfirmRide={setConfirmRide}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 w-full"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 w-full"
      >
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
