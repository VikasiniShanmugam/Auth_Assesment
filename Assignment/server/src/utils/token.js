const jwt = require("jsonwebtoken");

const DEFAULT_EXPIRY = "1h";

function generateToken(payload, options = {}) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET not set");
  }
  return jwt.sign(payload, secret, {
    expiresIn: DEFAULT_EXPIRY,
    ...options
  });
}

function verifyToken(token) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET not set");
  }
  return jwt.verify(token, secret);
}

module.exports = {
  generateToken,
  verifyToken
};
