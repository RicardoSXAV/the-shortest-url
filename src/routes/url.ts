import express from "express";
import url from "../controllers/url";

const router = express.Router();

router.post("/encode", url.encode);
router.post("/decode", url.decode);

export default router;
