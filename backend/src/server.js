import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import connectDB from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import path from 'path';

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();


// Middleware
if (process.env.NODE_ENV === 'production') {
    app.use(cors({
        origin: 'http://localhost:5173',
    }));
}

app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend", "dist", "index.html'));
    });
}


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

