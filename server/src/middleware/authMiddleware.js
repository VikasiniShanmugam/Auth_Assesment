const { verifyToken } = require("../utils/token");
const { ROLES } = require("../constants/roles");

function authorize(allowedRoles = []) {
  return (req, res, next) => {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token = header.replace("Bearer ", "");
    try {
      const payload = verifyToken(token);
      req.user = payload;
      if (allowedRoles.length && !allowedRoles.includes(payload.role)) {
        return res.status(403).json({ message: "Forbidden" });
      }
      return next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
}

function requireRoles(...roles) {
  if (!roles.length) {
    return authorize(Object.values(ROLES));
  }
  return authorize(roles);
}

module.exports = {
  authorize,
  requireRoles
};
