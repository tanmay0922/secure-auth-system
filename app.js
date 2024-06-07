const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const xss = require('xss-clean'); // Import xss-clean
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(xss()); // Use xss-clean middleware

// Routes
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
