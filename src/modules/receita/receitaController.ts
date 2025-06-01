import { Request, Response } from 'express';
import { receitaService } from './receitaService';

export const receitaController = {
  async getAll(req: Request, res: Response) {
    try {
      const receitas = await receitaService.getAll();
      res.json(receitas);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const receita = await receitaService.getById(Number(req.params.id));
      if (receita) {
        res.json(receita);
      } else {
        res.status(404).json({ error: 'Receita Medica não encontrado' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const receita = await receitaService.create(req.body);
      res.status(201).json(receita);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const receita = await receitaService.update(Number(req.params.id), req.body);
      res.json(receita);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      await receitaService.delete(Number(req.params.id));
      res.json({ message: 'Receita Medica excluído com sucesso' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
};
