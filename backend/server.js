require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')


const app = express();


app.use(express.json());

// MongoDB Connection
const url = process.env.MONGO_URL;
mongoose.connect(url).then(() => {
  console.log("MongoDB Connected")
})


const userRouter = require('./routes/authRoute');


// Routes
app.use('/api/auth', userRouter);



app.listen(process.env.PORT || 4000, () => {
    console.log('listening on port: 4000');
  });
  