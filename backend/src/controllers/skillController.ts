import { Request, Response } from 'express';

export const getCategories = (_req: Request, res: Response): void => {
  res.json({ message: 'Liste des catégories (à implémenter)' });
};

export const getSkills = (_req: Request, res: Response): void => {
  res.json({ message: 'Liste des compétences (à implémenter)' });
};

export const createSkill = (_req: Request, res: Response): void => {
  res.status(501).json({ message: 'Ajout d’une compétence (à implémenter)' });
};

export const updateSkill = (req: Request, res: Response): void => {
  res.status(501).json({ message: `Modification de la compétence ${req.params.id} (à implémenter)` });
};

export const deleteSkill = (req: Request, res: Response): void => {
  res.status(501).json({ message: `Suppression de la compétence ${req.params.id} (à implémenter)` });
};