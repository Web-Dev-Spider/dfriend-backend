const adminRouter = require("express").Router();

adminRouter.post("/sign-in", (req, res) => {
  res.send({ message: "You are tryig to login as an admin" });
});
adminRouter.post("/sing-out", (req, res) => {
  res.send({ message: "You are tryig to sign-out as an admin" });
});

module.exports = { adminRouter };
