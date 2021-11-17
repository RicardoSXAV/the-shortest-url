import express from "express";
import cors from "cors";
import database from "./database/config";

import urlRoutes from "./routes/url";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () =>
  console.log("Server is running on http://localhost:5000")
);

database
  .sync()
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log(error));

app.use("/url", urlRoutes);
