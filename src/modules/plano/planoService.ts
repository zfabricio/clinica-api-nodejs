import { PlanoDeSaude } from "models";


export const planoService = {
  async getAll() {
    return await PlanoDeSaude.findAll();
  },

  async getById(id: number) {
    return await PlanoDeSaude.findByPk(id);
  },

  async create(data: any) {
    return await PlanoDeSaude.create(data);
  },

  async update(id: number, data: any) {
    const plano = await PlanoDeSaude.findByPk(id);
    if (!plano) throw new Error('Plano de Saude não encontrado');
    await plano.update(data);
    return plano;
  },

  async delete(id: number) {
    const plano = await PlanoDeSaude.findByPk(id);
    if (!plano) throw new Error('Plano de Saude não encontrado');
    await plano.destroy();
    return;
  },
};
