import { Request, Response } from 'express';

export const sendMessage = (_req: Request, res: Response): void => {
  res.status(501).json({ message: 'Envoi d’un message de contact (à implémenter)' });
};

export const getMessages = (_req: Request, res: Response): void => {
  res.status(501).json({ message: 'Liste des messages reçus (à implémenter)' });
};

export const toggleMessageRead = (req: Request, res: Response): void => {
  res.status(501).json({ message: `Changement statut lu du message ${req.params.id} (à implémenter)` });
};

export const deleteMessage = (req: Request, res: Response): void => {
  res.status(501).json({ message: `Suppression du message ${req.params.id} (à implémenter)` });
};