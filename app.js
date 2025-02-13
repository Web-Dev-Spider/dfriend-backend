const express = require("express");
const { DB_URI, NODE_ENV, PORT } = require("./config/env");
const connectToDB = require("./database/mongodb");
const errorMiddleware = require("./middlewares/error.middleware");
const cookieParser = require("cookie-parser");

const { adminRouter } = require("./routes/adminRoutes");
const { userRouter } = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/users", userRouter);
app.use("/api/v1", adminRouter);

app.use(errorMiddleware);
app.listen(PORT, async (req, res) => {
  try {
    console.log(`app started working in ${NODE_ENV} enviornment at ${PORT}`);
    await connectToDB();
  } catch (error) {
    console.log("Failed to start the server", error);
  }
});
