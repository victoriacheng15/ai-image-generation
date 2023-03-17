import rateLimit from 'express-rate-limit'

const FIFTY_MINUTES = 15 * 60 * 1000;

export const apiLimiter = rateLimit({
  windowMs: FIFTY_MINUTES,
  max: 50, 
  standardHeaders: true,
  legacyHeaders: false, 
  message: "Too many requests from this IP, please try again after 15 minutes",
})