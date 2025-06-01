import { Paciente } from "models";


export const pacienteService = {
  async getAll() {
    return await Paciente.findAll();
  },

  async getById(id: number) {
    return await Paciente.findByPk(id);
  },

  async create(data: any) {
    return await Paciente.create(data);
  },

  async update(id: number, data: any) {
    const paciente = await Paciente.findByPk(id);
    if (!paciente) throw new Error('Paciente não encontrado');
    await paciente.update(data);
    return paciente;
  },

  async delete(id: number) {
    const paciente = await Paciente.findByPk(id);
    if (!paciente) throw new Error('Paciente não encontrado');
    await paciente.destroy();
    return;
  },
};
