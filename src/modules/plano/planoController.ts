import { Request, Response } from 'express';
import { planoService } from './planoService';

export const planoController = {
  async getAll(req: Request, res: Response) {
    try {
      const planos = await planoService.getAll();
      res.json(planos);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const plano = await planoService.getById(Number(req.params.id));
      if (plano) {
        res.json(plano);
      } else {
        res.status(404).json({ error: 'Plano de Saude não encontrado' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const plano = await planoService.create(req.body);
      res.status(201).json(plano);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const plano = await planoService.update(Number(req.params.id), req.body);
      res.json(plano);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      await planoService.delete(Number(req.params.id));
      res.json({ message: 'Plano de Saude excluído com sucesso' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
};
