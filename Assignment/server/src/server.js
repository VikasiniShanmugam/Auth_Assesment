require("dotenv").config();
const express = require("express");
const { authLimiter, apiLimiter, corsMiddleware } = require("./middleware/securityMiddleware");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");

const app = express();
app.use(corsMiddleware);
app.use(express.json());

// Apply rate limiting
app.use("/api/auth", authLimiter);
app.use("/api", apiLimiter);

app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  process.stdout.write(`Server running on port ${port}`);
});
