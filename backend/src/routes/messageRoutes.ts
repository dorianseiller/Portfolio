import { Router } from 'express';
import { sendMessage, getMessages, toggleMessageRead, deleteMessage } from '../controllers/messageController';
import { verifyToken } from '../middlewares/authMiddleware';

const router = Router();
router.post('/contact', sendMessage);
router.get('/messages', verifyToken, getMessages);
router.patch('/messages/:id/read', verifyToken, toggleMessageRead);
router.delete('/messages/:id', verifyToken, deleteMessage);

export default router;  