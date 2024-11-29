const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const { authCaptain } = require("../middleware/auth.middleware");
const authMiddleware = require("../middleware/auth.middleware");

router.post(
  "/register",
  [
    body("fullname.firstname").notEmpty().withMessage("Name is required"),
    body("email").notEmpty().withMessage("Email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("vehicle.color")
      .isLength({ min: 1 }) // Updated min value to 1
      .withMessage("Vehicle color must be at least 1 character long"), // Updated message
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Vehicle plate number must be at least 3 characters long"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Vehicle capacity must be at least 1"), // Kept as is
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Vehicle type must be one of: car, motorcycle, or auto"),
  ],
  captainController.registerCaptain
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  captainController.loginCaptain
);

router.get(
  "/profile",
  authMiddleware.authCaptain,
  captainController.getCaptainProfile
);

router.get(
  "/logout",
  authMiddleware.authCaptain,
  captainController.logoutCaptain
);
module.exports = router;
