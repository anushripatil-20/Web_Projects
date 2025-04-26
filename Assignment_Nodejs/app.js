const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://anushri:Advait09@cluster0.2fe34xc.mongodb.net/mydb')
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.log("MongoDB connection error: ", err));

const KBTSchema = new mongoose.Schema({
    name: String,
    city: String,
    marks: Number
});

const KBT = mongoose.model('KBT', KBTSchema);

// Sample route
app.get("/", (req, res) => {
    res.send("Server is running!");
});


app.get('/students', async (req, res) => {
    const students = await KBT.find();
    res.send(students);
});

app.get('/students/:name', async (req, res) => {
    const { name } = req.params;
    const students = await KBT.find({ name });
    res.send(students);
});

app.post('/add-student', async (req, res) => {
    const { name, city, marks } = req.body;
    const newStudent = new KBT({ name, city, marks });
    await newStudent.save();
    res.send({ message: 'Student added successfully', student: newStudent });
    
});

app.delete('/delete-student/:name',async(req,res)=>{
    const {name}=req.params;
    const student = await KBT.findOneAndDelete({ name });
    res.send(student);
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
