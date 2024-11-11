import express from 'express';
import photoRoutes from './routes/photoRoutes';
import orderRoutes from './routes/orderRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use('/photos', photoRoutes);
app.use('/orders', orderRoutes);

export default app;
