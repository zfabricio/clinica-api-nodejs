import { ReceitaMedica } from "models";


export const receitaService = {
  async getAll() {
    return await ReceitaMedica.findAll();
  },

  async getById(id: number) {
    return await ReceitaMedica.findByPk(id);
  },

  async create(data: any) {
    return await ReceitaMedica.create(data);
  },

  async update(id: number, data: any) {
    const receita = await ReceitaMedica.findByPk(id);
    if (!receita) throw new Error('Receita Medica não encontrado');
    await receita.update(data);
    return receita;
  },

  async delete(id: number) {
    const receita = await ReceitaMedica.findByPk(id);
    if (!receita) throw new Error('Receita Medica não encontrado');
    await receita.destroy();
    return;
  },
};
