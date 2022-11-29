import express from "express";
import userRoutes from "./routes/userRoutes.js";
// import studentsRoutes from "./routes/studentsRoutes.js";
import router from "./routes/userRoutes.js";
import cors from "cors";
import passport from "passport";
import * as dotenv from "dotenv";
import { passportConfig } from "./middleware/passport.js";
import { Server } from "socket.io";


// create express  app
const app = express();
const http = 
// instantiate router feature and add it to the express app
// app.use(router);
app.use(express.json()); //req.body
// set the cross origin security to allow all origin (TO BE CHANGED IN PRODUCTION!):
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// write first GET route for testing
// router.get("/test", (req, res) => {
//   res.send({ msg: "Test route is working!" });
// });
app.use(passport.initialize());
passportConfig(passport);

// define the port of our server
app.listen(5000, () => {
  console.log("Sever is now listening at port 5000");
});

//using the routes for a specific api
app.use("/api/users", userRoutes);
// app.use("/api/students", studentsRoutes);

export default app;
