const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (Replace with your connection string)
mongoose.connect('mongodb+srv://kbtug23648:Tejas%40123@readitlater-proj.hyouwyj.mongodb.net/?retryWrites=true&w=majority&appName=readitlater-proj')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Note Schema
const Note = mongoose.model('Note', {
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

// Routes
app.get('/api/notes', async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.json(notes);
});

app.post('/api/notes', async (req, res) => {
  const note = new Note(req.body);
  await note.save();
  res.json(note);
});

app.delete('/api/notes/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'Note deleted' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));