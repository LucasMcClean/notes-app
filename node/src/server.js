import express from "express";
import cors from "cors";
import { Prisma, PrismaClient } from "@prisma/client";

const PORT = process.env.port || 3000;

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/notes", async (req, res) => {
  const notes = await prisma.note.findMany();
  res.json(notes);
});

app.post("/api/notes", async (req, res) => {
  const { title, content } = req.body;
  if (!title) return res.status(400).send("Title field required");
  if (!content) return res.status(400).send("Content field required");
  try {
    const note = await prisma.note.create({
      data: { title, content },
    });
    res.json(note);
  } catch (error) {
    res.status(500).send("Encountered an error processing the request");
  }
});

app.put("/api/notes/:id", async (req, res) => {
  const { title, content } = req.body;
  const id = parseInt(req.params.id);

  if (!title) return res.status(400).send("Title field required");
  if (!content) return res.status(400).send("Content field required");
  if (!id || isNaN(id)) return res.status(400).send("Valid ID is required");

  try {
    const updatedNote = await prisma.note.update({
      where: { id },
      data: { title, content },
    });
    res.json(updatedNote);
  } catch (error) {
    res.status(500).send("Encountered an error processing the request");
  }
});

app.delete("/api/notes/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);

  if (!id || isNaN(id)) return res.status(400).send("Valid ID is required");

  try {
    await prisma.note.delete({
      where: { id },
    });
    return res.status(204).send();
  } catch (error) {
    res.status(500).send("Encountered an error processing the request");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
