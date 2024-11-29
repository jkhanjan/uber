const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerCaptain = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { fullname, email, password, vehicle } = req.body; // Updated
  const isCaptainAlreadyExist = await captainModel.findOne({ email });
  if (isCaptainAlreadyExist) {
    return res.status(400).json({ message: "Captain already exists" });
  }

  const hashedpassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedpassword,
    color: vehicle.color, // Updated
    plate: vehicle.plate, // Updated
    capacity: vehicle.capacity, // Updated
    vehicleType: vehicle.vehicleType, // Updated
  });

  const token = captain.generateAuthToken();
  res.status(201).json({ captain, token });
};

module.exports.loginCaptain = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { email, password } = req.body;
  const captain = await captainModel.findOne({ email }).select("+password");

  if (!captain) {
    res.status(401).json({ message: "Invalid email or password" });
  }
  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    res.status(401).json({ message: "Invalid email or password" });
  }

  const token = captain.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ captain, token });
};

module.exports.getCaptainProfile = async (req, res, next) => {
  res.status(200).json({ captain: req.captain });
};

module.exports.logoutCaptain = async (req, res, next) => {
  try {
    let token;

    if (req.cookies.token) {
      token = req.cookies.token;
    } else if (req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(400).json({ message: "No token provided" });
    }

    // Attempt to blacklist token
    await blacklistTokenModel.findOneAndUpdate(
      { token },
      { token },
      { upsert: true }
    );

    // Clear cookie and respond
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      message: "Logout failed",
      error: error.message,
    });
  }
};
