const userRouter = require("express").Router();

userRouter.post("/sign-up", (req, res) => res.send({ message: "User sign-up" }));
userRouter.post("/sign-in", (req, res) => res.send({ message: "User sign-in" }));
userRouter.post("/sign-out", (req, res) => res.send({ message: "User sign-out" }));
userRouter.get("/", (req, res) => res.send({ message: "Welcome to the d-friene to-do list" }));

module.exports = { userRouter };
