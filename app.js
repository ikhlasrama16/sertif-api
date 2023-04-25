const express = require('express');
// Import route dari file participants.js
const participantRouter = require('./routes/participants');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Menggunakan body-parser untuk membaca request body
app.use(express.json());

// Menggunakan route dari file 'participants.js'
app.use('/participants', participantRouter);

// Menghubungkan ke database MongoDB
const url = 'mongodb+srv://ikhlasrama16:mikhlasr@rest-api.w8arlzp.mongodb.net/Node-API?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
console.log('Connected to MongoDB database');
});

app.listen(port, () => {
console.log('Server running at http://localhost3000');
});