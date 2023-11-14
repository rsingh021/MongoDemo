const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const User = require('./models/user');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://Demo123321:Demo12345@demo.2sjnv0g.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', async (req, res) => {
  const { name, email } = req.body;

  try {
    // Create a new user document and save to MongoDB
    const newUser = new User({ name, email });
    await newUser.save();

    // Send a success response
    res.send('Data saved successfully!');
  } catch (error) {
    // Send an error response
    res.status(500).send('Error saving data.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});