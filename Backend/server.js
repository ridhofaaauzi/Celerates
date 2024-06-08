import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());

// Menggunakan rute yang sudah dibuat
app.use("/", userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
