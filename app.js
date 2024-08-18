const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const passwordUtil = require('./utils/passwordUtil');

app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api', authRoutes);

// Start password generator
passwordUtil.startPasswordGenerator();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
