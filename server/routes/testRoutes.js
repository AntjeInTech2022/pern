import {
  getTestRoute,
  createTableData,
  createNewHost,
  getAllHosts,
  getUniqueHost,
  updateUniqueHost,
  deleteUniqueHost,
} from "../controller/testController.js";

// TEST ROUTES
router.get("/test", getTestRoute);
router.post("/newData", createTableData);

// create new user/host
router.post("/users", createNewHost);

// get all users/hosts
router.get("/users", getAllHosts);

// get a specific user/host
router.get("/users/:pid", getUniqueHost);

// update a user/host
router.put("/users/:pid", updateUniqueHost);

// delete a user
router.delete("/users/:pid", deleteUniqueHost);

export default router;
