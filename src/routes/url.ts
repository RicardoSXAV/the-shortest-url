import express from "express";

const router = express.Router();

router.post("/encode");
router.post("/decode");

export default router;
