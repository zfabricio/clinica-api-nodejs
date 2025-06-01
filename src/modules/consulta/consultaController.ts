import { Request, Response } from 'express';
import { consultaService } from './consultaService';


export const consultaController = {

  async getAll(req: Request, res: Response) {
    try {
      const consultas = await consultaService.getAll();
      res.json(consultas);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const consulta = await consultaService.getById(Number(req.params.id));
      if (consulta) {
        res.json(consulta);
      } else {
        res.status(404).json({ error: 'Consulta não encontrado' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const consulta = await consultaService.create(req.body);
      res.status(201).json(consulta);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const consulta = await consultaService.update(Number(req.params.id), req.body);
      res.json(consulta);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      await consultaService.delete(Number(req.params.id));
      res.json({ message: 'Consulta excluído com sucesso' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
};
