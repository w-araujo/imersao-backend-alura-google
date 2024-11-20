import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
routes(app);

app.listen(process.env.API_PORT, () => {
  console.log(`Server running on port: ${process.env.API_PORT}`);
});
