const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const newsRoutes = require('./routes/newsRoutes');

app.use('/auth', authRoutes);
app.use('/news', newsRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server läuft auf Port ${process.env.PORT || 5000}`);
});