import express from "express";
import "dotenv/config";

const app = express();
app.listen(process.env.API_PORT, () => {
  console.log(`Server running on port: ${process.env.API_PORT}`);
});

app.get("/api", (req, res) => {
  res.status(200).send("Boas vindas à imersão!");
});
