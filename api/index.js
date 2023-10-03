const express = require('express');
const server = express();
const port = process.env.PORT || '3000';

server.use(express.json());

const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, 'config.env'),
});

main().catch((err) => console.log(err));

async function main() {
  // await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://sastajonathanjames:Lakhani%40123@cluster0.pic1vhl.mongodb.net/?retryWrites=true&w=majority', {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });
  console.log('connected');
}

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('user', userSchema);

server.get('/test', async (req, res) => {
  res.json({ message: 'Welcome! Vercel deploy success.'})
});

server.post('/demo', async (req, res) => {
  let user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  const doc = await user.save();
  console.log(doc);
  res.json(doc);
});

server.listen(port, () => {
  console.log('server started');
});
