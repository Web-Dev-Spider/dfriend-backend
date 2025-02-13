const express = require("express");
const { DB_URI, NODE_ENV, PORT } = require("./config/env");
const { adminRouter } = require("./routes/adminRoutes");
const { userRouter } = require("./routes/userRoutes");
const connectToDB = require("./database/mongodb");

const app = express();

app.use("/api/v1/users", userRouter);
app.use("/api/v1", adminRouter);
app.listen(PORT, async (req, res) => {
  try {
    console.log(`app started working in ${NODE_ENV} enviornment at ${PORT}`);
    await connectToDB();
  } catch (error) {
    console.log("Failed to start the server", error);
  }
});
