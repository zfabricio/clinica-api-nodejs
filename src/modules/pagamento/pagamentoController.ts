import { Request, Response } from 'express';
import { pagamentoService } from './pagamentoService';

export const pagamentoController = {
  async getAll(req: Request, res: Response) {
    try {
      const pagamentos = await pagamentoService.getAll();
      res.json(pagamentos);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const pagamento = await pagamentoService.getById(Number(req.params.id));
      if (pagamento) {
        res.json(pagamento);
      } else {
        res.status(404).json({ error: 'Pagamento não encontrado' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const pagamento = await pagamentoService.create(req.body);
      res.status(201).json(pagamento);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const pagamento = await pagamentoService.update(Number(req.params.id), req.body);
      res.json(pagamento);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      await pagamentoService.delete(Number(req.params.id));
      res.json({ message: 'Pagamento excluído com sucesso' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
};
