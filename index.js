const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const apiRoute = require('./routes/apiRoutes');
const logger = require('./config/logger');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    logger.infoLogger.info(`${req.method} request at ${req.originalUrl}`);
    next();
});


app.use('/api', apiRoute);


app.get('/', (req, res) => {
    res.send('Server Running');
});


try {
    app.listen(process.env.PORT);
    logger.infoLogger.info(`Server started at port ${process.env.PORT}`)
} catch (error) {
    logger.error(`${error.message}`);
}