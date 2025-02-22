import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token from "Bearer <token>"

    if (!token) {
        res.status(401).json({ message: "Access Denied. No token provided." });
        return; // Ensure function execution stops
    }

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        (req as any).user = verified; // Attach user data to request
        next(); // Call next() to proceed
    } catch (error) {
        res.status(403).json({ message: "Invalid Token" });
        return; // Ensure function execution stops
    }
};
