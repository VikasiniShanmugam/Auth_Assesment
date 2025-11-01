const express = require("express");
const { authorize, requireRoles } = require("../middleware/authMiddleware");
const { ROLES } = require("../constants/roles");

const router = express.Router();

router.get("/profile", authorize(), (req, res) => {
  res.json({ user: req.user });
});

router.get("/admin", requireRoles(ROLES.ADMIN), (req, res) => {
  res.json({ message: "Admin access granted" });
});

router.get("/manager", requireRoles(ROLES.ADMIN, ROLES.MANAGER), (req, res) => {
  res.json({ message: "Manager access granted" });
});

router.get("/user", requireRoles(ROLES.ADMIN, ROLES.MANAGER, ROLES.USER), (req, res) => {
  res.json({ message: "User access granted" });
});

module.exports = router;
