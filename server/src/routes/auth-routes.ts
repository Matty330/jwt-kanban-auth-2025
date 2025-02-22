import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET as string;

// Dummy user database (Replace with actual DB check)
const users = [
    { username: "testuser", password: "password123" }  // Replace with actual hashed passwords
];

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        res.status(401).json({ message: "Invalid username or password" });
        return; // Ensure function execution stops
    }

    // Generate JWT Token
    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
    return; // Ensure function execution stops
});

export default router;
