require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'build'))); // Set build folder

app.use(express.json()); // access req.body

const holdingsRoutes = require('./src/server-routes/holdingsRoutes');
app.use('/api/holdings/', holdingsRoutes);

const portfolioRoutes = require('./src/server-routes/portfolioRoutes');
app.use('/api/portfolio/', portfolioRoutes);

const authRoutes = require('./src/server-routes/authRoutes');
app.use('/api/auth/', authRoutes);

const apiRoutes = require('./src/server-routes/apiRoutes');
app.use('/api/stocks/', apiRoutes);

// Catch all
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
