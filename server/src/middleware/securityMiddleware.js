const rateLimit = require("express-rate-limit");
const cors = require("cors");

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5, 
  message: { message: "Too many requests from this IP, please try again later" }
});

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100 
});

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    const configured = process.env.CLIENT_URL;
    if (configured && origin === configured) return callback(null, true);
    if (/^https?:\/\/localhost(?::\d+)?$/.test(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
  maxAge: 600 
};

module.exports = {
  authLimiter,
  apiLimiter,
  corsMiddleware: cors(corsOptions)
};