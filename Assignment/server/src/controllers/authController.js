const { createUser, validateUserCredentials } = require("../store/userStore");
const { generateToken } = require("../utils/token");
const { ROLE_VALUES } = require("../constants/roles");

async function register(req, res) {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({ message: "Email, password, and role are required" });
    }
    if (!ROLE_VALUES.includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }
    const user = await createUser({ email, password, role });
    const token = generateToken({ id: user.id, email: user.email, role: user.role });
    return res.status(201).json({ token, role: user.role, email: user.email });
  } catch (error) {
    if (error.message === "User already exists") {
      return res.status(409).json({ message: error.message });
    }
    return res.status(500).json({ message: "Failed to register user" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
    const user = await validateUserCredentials(email, password);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken({ id: user.id, email: user.email, role: user.role });
    return res.status(200).json({ token, role: user.role, email: user.email });
  } catch (error) {
    return res.status(500).json({ message: "Failed to login" });
  }
}

module.exports = {
  register,
  login
};
