import { PlanoSaude } from "./planoSaude";

export const planoService = {
  async getAll() {
    return await PlanoSaude.findAll();
  },

  async getById(id: number) {
    return await PlanoSaude.findByPk(id);
  },

  async create(data: any) {
    return await PlanoSaude.create(data);
  },

  async update(id: number, data: any) {
    const plano = await PlanoSaude.findByPk(id);
    if (!plano) throw new Error('Plano de Saude não encontrado');
    await plano.update(data);
    return plano;
  },

  async delete(id: number) {
    const plano = await PlanoSaude.findByPk(id);
    if (!plano) throw new Error('Plano de Saude não encontrado');
    await plano.destroy();
    return;
  },
};
