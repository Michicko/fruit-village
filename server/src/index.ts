import express from "express";
import "dotenv/config";
import logger from "morgan";
import productRouter from "./routes/productRouter.js";
import globalErrorHandler from "./controllers/errorController.js";

const app = express();

// middlewares
if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}

app.use((req, res, next) => {
  res.requestedTime = new Date().toISOString();
  next();
});

// parse request bodies (req.body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  console.log("requested time: ", res.requestedTime);
  res.end("<h1>Welcome to fruit village</h1>");
});

// API Routes
app.use("/api/v1/products", productRouter);

app.use(globalErrorHandler);

// port
const PORT = process.env.PORT || 8080;
// Server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
