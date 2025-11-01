const rateLimit = require("express-rate-limit");
const cors = require("cors");

// Rate limiting configuration
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs for auth routes
  message: { message: "Too many requests from this IP, please try again later" }
});

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Limit each IP to 100 requests per windowMs for other routes
});

// CORS configuration
// Allow the configured CLIENT_URL OR any localhost origin (useful during development when Vite
// may pick a different port like 5173/5174). For production, set CLIENT_URL to your exact origin.
const corsOptions = {
  origin: (origin, callback) => {
    // Allow non-browser requests (curl, Postman) which have no origin
    if (!origin) return callback(null, true);
    const configured = process.env.CLIENT_URL;
    if (configured && origin === configured) return callback(null, true);
    // Allow any localhost origin (http://localhost:5173, http://localhost:5174, etc.)
    if (/^https?:\/\/localhost(?::\d+)?$/.test(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
  maxAge: 600 // Maximum age of CORS preflight requests cache (10 minutes)
};

module.exports = {
  authLimiter,
  apiLimiter,
  corsMiddleware: cors(corsOptions)
};