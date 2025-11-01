const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const { ROLE_VALUES } = require("../constants/roles");

const USERS_PATH = path.join(__dirname, "../data/users.json");
const SALT_ROUNDS = 10;

function readUsers() {
  if (!fs.existsSync(USERS_PATH)) {
    fs.writeFileSync(USERS_PATH, JSON.stringify([]));
  }
  const data = fs.readFileSync(USERS_PATH, "utf-8");
  return JSON.parse(data);
}

function writeUsers(users) {
  fs.writeFileSync(USERS_PATH, JSON.stringify(users, null, 2));
}

function findUserByEmail(email) {
  const users = readUsers();
  return users.find((user) => user.email === email);
}

async function createUser({ email, password, role }) {
  const users = readUsers();
  if (users.some((user) => user.email === email)) {
    throw new Error("User already exists");
  }
  if (!ROLE_VALUES.includes(role)) {
    throw new Error("Invalid role");
  }
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  const newUser = {
    id: Date.now().toString(),
    email,
    password: hashedPassword,
    role
  };
  users.push(newUser);
  writeUsers(users);
  const { password: _, ...safeUser } = newUser;
  return safeUser;
}

async function validateUserCredentials(email, password) {
  const user = findUserByEmail(email);
  if (!user) {
    return null;
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return null;
  }
  const { password: _, ...safeUser } = user;
  return safeUser;
}

module.exports = {
  findUserByEmail,
  createUser,
  validateUserCredentials
};
