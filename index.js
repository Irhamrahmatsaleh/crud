const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/crud", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
mongoose.connect("mongodb://127.0.0.1:27017/crud")
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));


app.get('/', (req, res) => {
  UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById(id)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(id, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  }, { new: true }) // { new: true } agar dokumen yang diperbarui dikembalikan
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id: id})
  .then(res => res.json(res))
  .catch(err => res.json(err))
})

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running");
});
