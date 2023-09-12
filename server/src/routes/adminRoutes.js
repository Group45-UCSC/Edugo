const express = require("express");

const router = express.Router();

//import functions
const { addEmployee, viewSupList, viewVCList } = require("../controllers/admin/empController");
const { vehiList } = require("../controllers/admin/vehiController");

//create routes
router.route("/employees/addEmployee").post(addEmployee);
router.route("/employees/agent").get(viewSupList);
router.route("/employees/vc").get(viewVCList);
router.route("/drivers/vehi").get(vehiList);

module.exports = router;
