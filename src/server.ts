import dotenv from "dotenv";
import app from "./app";
import { getEnv } from "./utils/env";
dotenv.config();

const port = getEnv("PORT");

const server = app.listen(port, () => {
  console.log(`vai tomando na ${port}`);
});

export default server;
