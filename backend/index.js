import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import carbonFootprintRoutes from "./routes/carbonFootprintRoutes.js";
import mlRoutes from "./routes/mlRoutes.js";
import predictionRoutes from "./routes/predictionRoutes.js";
import mlPredictionRoutes from "./routes/mlPredictionRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  }),
);

app.use(express.json());

/* ===============================
   EXISTING ROUTES
   =============================== */
app.use("/api", carbonFootprintRoutes);

/* ===============================
   NEW ML ROUTES
   =============================== */
app.use("/api/ml", mlRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.use("/api", predictionRoutes);
app.use("/api", mlPredictionRoutes);
