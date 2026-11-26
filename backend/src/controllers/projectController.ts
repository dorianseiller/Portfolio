import { Request, Response } from 'express';

export const getAllProjects = (_req: Request, res: Response): void => {
  res.json({ message: 'Liste des projets (à implémenter)' });
};

export const getProjectById = (req: Request, res: Response): void => {
  res.json({ message: `Détail du projet ${req.params.id} (à implémenter)` });
};

export const createProject = (_req: Request, res: Response): void => {
  res.status(501).json({ message: 'Création d’un projet (à implémenter)' });
};

export const updateProject = (req: Request, res: Response): void => {
  res.status(501).json({ message: `Modification du projet ${req.params.id} (à implémenter)` });
};

export const deleteProject = (req: Request, res: Response): void => {
  res.status(501).json({ message: `Suppression du projet ${req.params.id} (à implémenter)` });
};