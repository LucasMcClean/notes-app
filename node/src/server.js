import express from "express";
import cors from "cors";

const PORT = process.env.port || 3000;

const app = express();
app.use(express.json());
app.use(cors);

app.get("/api/notes", async (req, res) => {
  res.send("Success");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
