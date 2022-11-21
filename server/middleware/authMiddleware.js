import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("authHeader :>> ", authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).json("No token in request");

  jwt.verify(token, process.env.jwtSecret, (err, payload) => {
    console.log(err);
    if (err) return res.status(403).json("Invalid token!");
    req.payload = payload;
    next();
  });
};
