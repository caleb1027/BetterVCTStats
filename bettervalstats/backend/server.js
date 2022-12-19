const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to MongoDB");
});

const playersRouter = require('./routes/players');
app.use('/players', playersRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});
