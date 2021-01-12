const router = require("express").Router();
const employeeRoutes = require("./employees");

// Post routes
router.use("/employees", employeeRoutes);

module.exports = router;
