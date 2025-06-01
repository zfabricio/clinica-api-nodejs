import { Request, Response } from 'express';
import { medicoService } from './medicoService';


export const medicoController = {

  async getAll(req: Request, res: Response) {
    try {
      const medicos = await medicoService.getAll();
      res.json(medicos);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const medico = await medicoService.getById(Number(req.params.id));
      if (medico) {
        res.json(medico);
      } else {
        res.status(404).json({ error: 'Médico não encontrado' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const medico = await medicoService.create(req.body);
      res.status(201).json(medico);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const medico = await medicoService.update(Number(req.params.id), req.body);
      res.json(medico);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      await medicoService.delete(Number(req.params.id));
      res.json({ message: 'Médico excluído com sucesso' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
};
