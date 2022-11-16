import express from "express";
import router from "./routes/testRoutes.js";
import router1 from "./routes/jwtAuthRoutes.js";
// import router2 from "./routes/PrivateRoutes.js";
import cors from "cors";

// create express  app
const app = express();
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

// define the port of our server
app.listen(5000, () => {
  console.log("Sever is now listening at port 5000");
});

//routes
app.use("/api", router);
app.use("/auth", router1);
// app.use("/api/users", userRoutes);
app.use("/private", router1);
// app.use("/private", router2);

// register and login routes
// app.use("/authentication", require("./routes/jwtAuth"));

export default app;
