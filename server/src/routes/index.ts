import express from 'express';
import { authenticateToken } from '../middleware/auth';
import authRoutes from './auth-routes';

const router = express.Router();

router.use('/auth', authRoutes);

// Protect Kanban board routes
router.get('/kanban', authenticateToken, (_, res) => {
    res.json({ message: "Welcome to your Kanban board!" });
});

export default router;
