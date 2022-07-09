const express = require("express");
const { ensureAuthenticated } = require("../middleware/checkAuth");
const reminderController = require("../controller/reminder_controller");

const router = express.Router();

router.get("/reminders", ensureAuthenticated, reminderController.list);

router.get("/reminder/new", ensureAuthenticated, reminderController.new);

router.get("/reminder/:id", ensureAuthenticated, reminderController.listOne);

router.get("/reminder/:id/edit", ensureAuthenticated, reminderController.edit);

router.post("/reminder/", ensureAuthenticated, reminderController.create);

// Implement this yourself
router.post("/reminder/update/:id", ensureAuthenticated, reminderController.update);

// Implement this yourself
router.post("/reminder/delete/:id", ensureAuthenticated, reminderController.delete);

module.exports = router;