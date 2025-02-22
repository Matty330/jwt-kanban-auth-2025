"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = express_1.default.Router();
const JWT_SECRET = process.env.JWT_SECRET;
// Dummy user database (Replace with actual DB check)
const users = [
    { username: "testuser", password: "password123" } // Replace with actual hashed passwords
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
    const token = jsonwebtoken_1.default.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
    return; // Ensure function execution stops
});
exports.default = router;
