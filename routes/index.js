import express from "express";
import apiRouter from "./apiroutes.js";

const router = express.Router();
router.use("/", apiRouter);

export default router;
