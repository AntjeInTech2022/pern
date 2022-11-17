// npm i jsonwebtoken
import jwt from "jsonwebtoken";
// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();

const jwtGenerator = (pid) => {
  const payload = {
    user: pid,
  };
  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "5d" });
};

export default jwtGenerator;
