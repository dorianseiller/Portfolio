import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import './config/db';
import authRoutes from './routes/authRoutes';
import profileRoutes from './routes/profileRoutes';
import projectRoutes from './routes/projectRoutes';
import skillRoutes from './routes/skillRoutes';
import messageRoutes from './routes/messageRoutes';

dotenv.config();

const app = express();

// Middlewares globaux
app.use(cors());
app.use(express.json());

// Route de test
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'API Portfolio TypeScript opérationnelle' });
});

// Montage des routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api', skillRoutes);
app.use('/api', messageRoutes);

// Gestion des routes 404
app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Route API introuvable.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});