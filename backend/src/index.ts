import express, { Application, Request, Response, Router } from "express";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import connection from "./database/config";
import authRoutes from "./routes/auth/auth";
import welcomeRouter from "./routes/welcome";
import userRouter from "./routes/user/user";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

//create instance of server
const app: Application = express();
// HTTP request  logger  middleware
app.use(morgan("dev"));
// HTTP security middleware
app.use(helmet());
// middleware to parse request
app.use(express.json());

dotenv.config();
//  this middleware to limit number of requests
const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: "Too many requests from this IP, please try again after an hour",
});

// app.use(apiLimiter);

app.listen(PORT, () => {
  console.log("server listening on port http://localhost:" + PORT);
});

app.use("/api", authRoutes, welcomeRouter);
app.use("/api/user", userRouter);

connection
  .sync()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error: " + err.message);
  });
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    message: "page not found",
  });
});
export default app;
