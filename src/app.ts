import express from "express";
import userRouters from "./routes/user.routes";
const app = express();
app.use(express.json());
app.use("/api", userRouters);

export default app;
