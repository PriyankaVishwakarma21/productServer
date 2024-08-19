import express from 'express';
import mongoose from 'mongoose';
import apiRouters from './routes/index.js';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT;
const mondodb_URL = process.env.mondodb_URL;

app.use(express.json());
app.use(cors({ origin: '*', credentials: true })); // Enable Cors for browsers
app.use(morgan('dev'));

app.get('/', (req, res) => res.send('working.'));
app.use('/api', apiRouters);

app.listen(PORT, async () => {
    console.log(`Express listening on PORT ${PORT}`);
    try {
        await mongoose.connect(mondodb_URL, {});
        console.log('DB connectioned successfully!!');
    } catch (error) {
        console.log('Error while connecting DB ', error);
    }
})