import { Medico } from "models";

export const medicoService = {
  async getAll() {
    return await Medico.findAll();
  },

  async getById(id: number) {
    return await Medico.findByPk(id);
  },

  async create(data: any) {
    return await Medico.create(data);
  },

  async update(id: number, data: any) {
    const medico = await Medico.findByPk(id);
    if (!medico) throw new Error('Médico não encontrado');
    await medico.update(data);
    return medico;
  },

  async delete(id: number) {
    const medico = await Medico.findByPk(id);
    if (!medico) throw new Error('Médico não encontrado');
    await medico.destroy();
    return;
  },
};
