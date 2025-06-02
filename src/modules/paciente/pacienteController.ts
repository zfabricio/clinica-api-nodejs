import { Request, Response } from 'express';
import {pacienteService}  from './pacienteService';

export const pacienteController = {
  async getAll(req: Request, res: Response) {
    try {
      const pacientes = await pacienteService.getAll();
      res.json(pacientes);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const paciente = await pacienteService.getById(Number(req.params.id));
      if (paciente) {
        res.json(paciente);
      } else {
        res.status(404).json({ error: 'Paciente não encontrado' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const paciente = await pacienteService.create(req.body);
      res.status(201).json(paciente);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const paciente = await pacienteService.update(Number(req.params.id), req.body);
      res.json(paciente);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      await pacienteService.delete(Number(req.params.id));
      res.json({ message: 'Paciente excluído com sucesso' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
};
