import app from './app';
import dotenv from 'dotenv';
import { connectDB } from './config/database';

dotenv.config();

const PORT = process.env.PORT || 3000;

// // Connect to the database and start the server
// connectDB().then(() => {
//     console.log('Database connected');
// })
// .catch((error) => {
//     console.error('Database connection error:', error);
//   //  process.exit(1);
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});