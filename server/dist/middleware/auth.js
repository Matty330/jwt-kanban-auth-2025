"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
const authenticateToken = (req, res, next) => {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.split(' ')[1]; // Extract token from "Bearer <token>"
    if (!token) {
        res.status(401).json({ message: "Access Denied. No token provided." });
        return; // Ensure function execution stops
    }
    try {
        const verified = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = verified; // Attach user data to request
        next(); // Call next() to proceed
    }
    catch (error) {
        res.status(403).json({ message: "Invalid Token" });
        return; // Ensure function execution stops
    }
};
exports.authenticateToken = authenticateToken;
