import { Router } from 'express';
import { getCategories, getSkills, createSkill, updateSkill, deleteSkill } from '../controllers/skillController';
import { verifyToken } from '../middlewares/authMiddleware';

const router = Router();
router.get('/categories', getCategories);
router.get('/skills', getSkills);
router.post('/skills', verifyToken, createSkill);
router.put('/skills/:id', verifyToken, updateSkill);
router.delete('/skills/:id', verifyToken, deleteSkill);

export default router;