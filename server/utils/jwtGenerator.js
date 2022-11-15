// npm i jsonwebtoken
import jwt from "jsonwebtoken";

const jwtGenerator = () => {
  const payload = {
    user: pid,
  };
  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1hr" });
};

export default jwtGenerator;
