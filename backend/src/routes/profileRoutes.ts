import { Router } from 'express';
import { getProfile, updateProfile } from '../controllers/profileController';
import { verifyToken } from '../middlewares/authMiddleware';

const router = Router();
router.get('/', getProfile);
router.put('/', verifyToken, updateProfile);

export default router;