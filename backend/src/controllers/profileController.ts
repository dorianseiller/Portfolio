import { Request, Response } from 'express';

export const getProfile = (_req: Request, res: Response): void => {
  res.json({ message: 'Consultation du profil (à implémenter)' });
};

export const updateProfile = (_req: Request, res: Response): void => {
  res.status(501).json({ message: 'Mise à jour du profil (à implémenter)' });
};