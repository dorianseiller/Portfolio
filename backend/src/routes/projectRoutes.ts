import { Router } from 'express';
import { getAllProjects, getProjectById, createProject, updateProject, deleteProject } from '../controllers/projectController';
import { verifyToken } from '../middlewares/authMiddleware';

const router = Router();
router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.post('/', verifyToken, createProject);
router.put('/:id', verifyToken, updateProject);
router.delete('/:id', verifyToken, deleteProject);

export default router;