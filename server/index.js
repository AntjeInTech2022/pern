import express from "express";
import router from "./routes/userRoutes.js";
import cors from "cors";

// create express  app
const app = express();
// instantiate router feature and add it to the express app
// const router = express.Router();
// app.use(router);
app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// write first GET route for testing
router.get("/test", (req, res) => {
  res.send({ msg: "Test route is working!" });
});

// define the port of our server
app.listen(5000, () => {
  console.log("Sever is now listening at port 5000");
});
app.use("/api", router);

export default app;
