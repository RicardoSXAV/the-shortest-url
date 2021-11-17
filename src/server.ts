import "reflect-metadata";
import express from "express";
import cors from "cors";
import "./database";

import urlRoutes from "./routes/url";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () =>
  console.log("Server is running on http://localhost:5000")
);

app.use("/url", urlRoutes);
