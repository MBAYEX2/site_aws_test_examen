import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL || "*"
}));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connecté");
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Serveur sur http://localhost:${process.env.PORT}`);
  });
})
.catch((err) => {
  console.error("❌ Erreur connexion MongoDB :", err);
});
