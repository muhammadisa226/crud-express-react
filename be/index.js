import express from "express";
import cors from "cors";
import userRoute from "./routes/userRoutes.js";
const app = express();
const port = 5500;
app.use(cors());
app.use(express.json());
app.use(userRoute);

app.listen(port, () => {
  console.log(`Server  Up and Running on : http://localhost:${port}/api/users`);
});
