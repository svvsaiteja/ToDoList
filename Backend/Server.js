// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const routes = require('./routes/ToDoRoute');


// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(express.json());
// app.use(cors())

// mongoose
//     .connect(process.env.MONGODB_URL)
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));


// app.use(routes);

// app.listen(port, () => console.log(`Server started on port ${port}`));


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/ToDoRoute');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('MongoDB Connected');
    app.use(routes);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

startServer();
